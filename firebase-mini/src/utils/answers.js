import { db } from "../../firebase";
import { collection, addDoc, getDocs, updateDoc, doc, query, orderBy, onSnapshot } from "firebase/firestore";

const answersCollection = collection(db, "responses");

export const addAnswer = async (text) => {
  return await addDoc(answersCollection, {text, upvotes: 0, createdAt: new Date()});
};

export const getAllAnswers = (callback) => {
  const q = query(answersCollection, orderBy("upvotes", "desc"));
  return onSnapshot(q, (snapshot) => {
    const docs = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
    callback(docs);
  });
};

export const upvoteAnswer = async (id, currentUpvotes) => {
  const answerRef = doc(db, "responses", id);
  return await updateDoc(answerRef, { upvotes: currentUpvotes + 1 });
};


