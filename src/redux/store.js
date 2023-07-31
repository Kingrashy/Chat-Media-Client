import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import postReducer from "./postSlice";
import chartReducer from "./chartSlice";

const store = configureStore({
  reducer: {
    CAuth: authReducer,
    post: postReducer,
    chats: chartReducer,
  },
});

export default store;
