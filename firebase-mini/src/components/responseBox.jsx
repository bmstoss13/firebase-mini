import React, { useState } from "react";
import { addAnswer } from "../utils/answers";

const Response = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    try {
      await addAnswer(text);
      setText("");
    } catch (error) {
      console.error("Failed to submit response:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={text}
        placeholder="Add your response..."
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">
        Submit
      </button>
    </form>
  );
};

export default Response;