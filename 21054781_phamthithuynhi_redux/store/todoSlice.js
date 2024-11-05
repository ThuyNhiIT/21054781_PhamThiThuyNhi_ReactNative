import { createSlice } from "@reduxjs/toolkit";

const initialData = [
  { name: "To check email", id: "1" },
  { name: "UI task web page", id: "2" },
  { name: "Learn javascript basic", id: "3" },
  { name: "Learn HTML advance", id: "4" },
  { name: "Medical app UI", id: "5" },
  { name: "Learn java", id: "6" },
];

const todoSlice = createSlice({
  name: "todos",
  initialState: initialData,
  reducers: {
    addJob: (state, action) => {
      state.push({
        name: action.payload.name,
        id: (state.length + 1).toString(),
      });
    },
    deleteJob: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editJob: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state[index].name = action.payload.name;
      }
    },
  },
});

export const { addJob, deleteJob, editJob } = todoSlice.actions;
export default todoSlice.reducer;
