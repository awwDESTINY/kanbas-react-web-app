import { configureStore } from "@reduxjs/toolkit";
import modules from "./Courses/Modules/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
const store = configureStore({
  reducer: {
    modules,
    assignments: assignmentsReducer,
  },
});
export default store;