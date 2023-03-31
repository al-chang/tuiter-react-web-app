import { createSlice } from "@reduxjs/toolkit";
import {
  createTuitThunk,
  findTuitsThunk,
  deleteTuitThunk,
  updateTuitThunk,
} from "../../services/tuits-thunks";

const currentUser = {
  userName: "NASA",
  handle: "@nasa",
  image: "/images/nasa.jpg",
};

const templateTuit = {
  ...currentUser,
  topic: "Space",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const initialState = {
  tuits: [],
  loading: false,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: initialState,
  reducers: {
    createTuit(state, action) {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: new Date().getTime(),
      });
    },
    deleteTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state.splice(index, 1);
    },
    likeTuit(state, action) {
      const index = state.findIndex((tuit) => tuit._id === action.payload);
      state[index].liked = !state[index].liked;
      state[index].likes = state[index].liked
        ? state[index].likes + 1
        : state[index].likes - 1;
    },
  },
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.push(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
});

export const { createTuit, deleteTuit, likeTuit } = tuitsSlice.actions;
export default tuitsSlice.reducer;
