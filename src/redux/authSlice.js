import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { BASE_URL } from "../helper/url";
import { toast } from "react-toastify";

const initialState = {
  token: localStorage.getItem("ChatMedia/token"),
  name: "",
  username: "",
  email: "",
  _id: "",
  userLoaded: false,
  registerStatus: null,
  registerError: null,
  loginStatus: null,
  loginError: null,
  selectedChat: "",
};

export const RegisterUser = createAsyncThunk(
  "auth-new",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/new`, {
        name: user.name,
        username: user.username,
        email: user.email,
        password: user.password,
      });
      localStorage.setItem("ChatMedia/token", token?.data);
      return token?.data;
    } catch (error) {
      console.log(error.response?.data);
      toast.error(error.response?.data, { position: "top-center" });
      return rejectWithValue(error.response?.data);
    }
  }
);
export const loginUser = createAsyncThunk(
  "auth-login",
  async (user, { rejectWithValue }) => {
    try {
      const token = await axios.post(`${BASE_URL}/auth/login`, {
        username: user.username,
        password: user.password,
      });
      localStorage.setItem("ChatMedia/token", token?.data);
      return token?.data;
    } catch (error) {
      console.log(error.response?.data);
      toast.error(error.response?.data, { position: "top-center" });
      return rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loadUser: (state, action) => {
      const token = state.token;
      if (token) {
        const user = jwtDecode(token);

        return {
          ...state,
          name: user.name,
          username: user.username,
          email: user.email,
          _id: user._id,
          userLoaded: true,
        };
      }
    },
    logOut: (state, action) => {
      localStorage.removeItem("ChatMedia/token");
      toast.warning("You logged out", { position: "top-center" });

      return {
        ...state,
        token: "",
        name: "",
        username: "",
        email: "",
        _id: "",
        userLoaded: false,
      };
    },
    selecteChat: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(RegisterUser.pending, (state, action) => {
      return { ...state, registerStatus: "pending" };
    });
    builder.addCase(RegisterUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        toast.success(`Welcome to HotLesbians ${user.username}`, {
          position: "top-center",
        });

        return {
          ...state,
          token: action.payload,
          name: user.name,
          username: user.username,
          email: user.email,
          _id: user._id,
          userLoaded: true,
          registerStatus: "success",
        };
      }
    });
    builder.addCase(RegisterUser.rejected, (state, action) => {
      return {
        ...state,
        registerStatus: "rejected",
        registerError: action.payload,
      };
    });
    builder.addCase(loginUser.pending, (state, action) => {
      return { ...state, loginStatus: "pending" };
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      if (action.payload) {
        const user = jwtDecode(action.payload);
        toast.success(`Welcome back ${user.username}`, {
          position: "top-center",
        });

        return {
          ...state,
          token: action.payload,
          name: user.name,
          username: user.username,
          email: user.email,
          _id: user._id,
          userLoaded: true,
          loginStatus: "success",
        };
      }
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      return { ...state, loginStatus: "rejected", loginError: action.payload };
    });
  },
});

export default authSlice.reducer;

export const { loadUser, logOut, selecteChat } = authSlice.actions;
