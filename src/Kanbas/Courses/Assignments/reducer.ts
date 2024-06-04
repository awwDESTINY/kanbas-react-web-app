import { createSlice } from "@reduxjs/toolkit";
import { assignments as initialAssignments } from "../../Database";

const initialState = {
  assignments: initialAssignments,
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {

    addAssignment: (state, action) => {
      state.assignments = [
        ...state.assignments,
        {
          _id: new Date().getTime().toString(),
          ...action.payload
        }
      ];
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(assignment => assignment._id !== action.payload);
    },
    updateAssignment: (state, action) => {
      const index = state.assignments.findIndex(assignment => assignment._id === action.payload._id);
      if (index !== -1) {
        state.assignments[index] = {
          ...state.assignments[index],
          ...action.payload
        };
      }
    },
  },
});

export const { addAssignment, deleteAssignment, updateAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
