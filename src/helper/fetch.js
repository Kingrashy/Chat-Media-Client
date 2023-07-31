import axios from "axios";
import { BASE_URL } from "./url";

export async function getUser(auth) {
  const response = await axios.get(`${BASE_URL}/users/${auth.username}/logged`);
  return response?.data;
}

export async function getUsers() {
  const response = await axios.get(`${BASE_URL}/users`);
  return response?.data;
}

export async function getProfileUser(username, visitorId) {
  const response = await axios.get(
    `${BASE_URL}/users/${username}/${visitorId}/user`
  );
  return response?.data;
}

export async function getPosts() {
  const response = await axios.get(`${BASE_URL}/posts`);
  return response?.data;
}

export async function getPostLikes(post) {
  const response = await axios.get(`${BASE_URL}/posts/like/${post._id}/all`);
  return response?.data;
}

export async function getUserPosts(auth) {
  const response = await axios.get(`${BASE_URL}/posts/${auth._id}/user`);
  return response?.data;
}

export async function findCurrentChat(senderId, receiverId) {
  const response = await axios.get(`${BASE_URL}/chat/find`, {
    senderId: senderId,
    receiverId: receiverId,
  });
  return response?.data;
}

export async function findUserChat(auth) {
  const response = await axios.get(`${BASE_URL}/chat/find/all/${auth._id}`);
  return response?.data;
}

export async function getUserById(userId) {
  const response = await axios.get(`${BASE_URL}/users/${userId}/get`);
  return response?.data;
}

export async function getCurrentChat(chatId) {
  const response = await axios.get(`${BASE_URL}/chat/current/${chatId}`);
  return response?.data;
}

export async function getMessages(chatId) {
  const response = await axios.get(`${BASE_URL}/message/${chatId}`);
  return response?.data;
}

export async function getUnreadMessage(chat) {
  const response = await axios.get(`${BASE_URL}/message/${chat._id}/unread`);
  return response?.data;
}
