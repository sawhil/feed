import { POSTS } from "../constants";
import { v4 as uuid } from "uuid";
export const fetchPosts = async () => {
  // Simulating API call for now
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(POSTS); // Using the mock data from Feed/index.jsx
    }, 1000);
  });
};

export const createComment = async (activePostId, commentContent, path) => {
  // Simulating API call
  return new Promise((resolve) => {
    const newCommentId = uuid();
    resolve({
      id: newCommentId,
      content: commentContent,
      timestamp: new Date(),
      child: {},
    });
  })} ;