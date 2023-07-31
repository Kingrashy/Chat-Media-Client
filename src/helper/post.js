import axios from "axios";
import { BASE_URL } from "./url";

export async function UpdateProfile(data) {
  const response = await axios.patch(`${BASE_URL}/users/${data.userId}/edit`, {
    userProfile: data.userProfile,
    // name: data.name,
    // username: data.username,
  });
  return response?.data;
}

export async function LikePost(postId, userId) {
  const response = await axios.patch(
    `${BASE_URL}/posts/${postId}/${userId}/like`
  );
  return response?.data;
}

export async function MessageUser(senderId, receiverId) {
  const response = await axios.post(`${BASE_URL}/chat/`, {
    senderId: senderId,
    receiverId: receiverId,
  });
  return response?.data;
}

export async function SendMessage(data) {
  const response = await axios.post(`${BASE_URL}/message/new`, {
    chatId: data.chatId,
    senderId: data.senderId,
    text: data.text,
    textImg: data.textImg,
  });
  return response?.data;
}

export async function ReadMessage(chat) {
  const response = await axios.patch(`${BASE_URL}/message/${chat._id}/read`);
  return response?.data;
}
