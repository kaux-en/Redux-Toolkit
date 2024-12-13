import { configureStore } from "@reduxjs/toolkit";
import { ExerciseLogSlice} from "./features/ExerciseLogSlice";


export const store = configureStore({
    reducer: {
        exercises: ExerciseLogSlice.reducer
    }
});