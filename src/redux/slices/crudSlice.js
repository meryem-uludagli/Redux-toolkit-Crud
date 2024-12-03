import { createSlice } from "@reduxjs/toolkit";
import { initialTasks } from "../../constants";

const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: initialTasks },
  reducers: {
    addTask: (state, action) => {
      action.payload.id = new Date().getTime();

      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const i = state.tasks.findIndex((i) => i.id === action.payload);
      state.tasks.splice(i, 1);
    },
  },
});

export const { addTask, deleteTask } = taskSlice.actions;
export default taskSlice.reducer;