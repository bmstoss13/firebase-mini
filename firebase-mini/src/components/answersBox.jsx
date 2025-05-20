import React, { useEffect, useState } from "react";
import { getAllAnswers, upvoteAnswer } from "../utils/answers";

const Answers = () => {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    const unsubscribe = getAllAnswers(setResponses);
    return () => unsubscribe();
  }, []);

  const handleUpvote = async (id, currentUpvotes) => {
    try {
      await upvoteAnswer(id, currentUpvotes);
    } catch (error) {
      console.error("Failed to upvote:", error);
    }
  };

  return (
    <div>
      {responses.map((response) => (
        <div key={response.id} className="flex justify-between items-center border-b py-2">
          <span>{response.text}</span>
          <button
            onClick={() => handleUpvote(response.id, response.upvotes)}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            Upvote ({response.upvotes})
          </button>
        </div>
      ))}
    </div>
  );
};

export default Answers;