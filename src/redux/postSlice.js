import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL } from "../helper/url";

const initialState = {
  posts: [],
  fetchStatus: null,
  fetchError: null,
  createStatus: null,
  createError: null,
};

export const createPosts = createAsyncThunk(
  "post/new",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/posts/new`, {
        body: data.body,
        userId: data.userId,
        postImage: data.postImage,
      });
      return response?.data;
    } catch (error) {
      console.log(error.response?.data);
      toast.error(error.response?.data, { position: "top-center" });
      return rejectWithValue(error.response?.data);
    }
  }
);

export const getPosts = createAsyncThunk("post/all", async () => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    return response?.data;
  } catch (error) {
    console.log(error.response?.data);
  }
});

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: {
    [createPosts.pending]: (state, action) => {
      state.createStatus = "pending";
    },
    [createPosts.fulfilled]: (state, action) => {
      state.createStatus = "success";
      toast.success("You share a feed", { position: "top-center" });
      state.posts.unshift(action.payload);
    },
    [createPosts.rejected]: (state, action) => {
      state.createStatus = "rejected";
      state.createError = action.payload;
    },
    [getPosts.pending]: (state, action) => {
      state.fetchStatus = "pending";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.fetchStatus = "success";
      state.posts = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.fetchStatus = "rejected";
      state.fetchError = action.payload;
    },
  },
});

export default postSlice.reducer;
