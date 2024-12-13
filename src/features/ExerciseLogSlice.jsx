import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    exercises: [],
};


export const ExerciseLogSlice = createSlice({
    name: 'exercises',
    initialState,
    reducers: {
       addExercise: (state, action) => {
        state.exercises.push(action.payload);
    },
    deleteExercise: (state, action) => {
        state.exercises = state.exercises.filter(
            (exercise) => exercise.id !== action.payload
        );
    },
    }
})

export const { addExercise, deleteExercise } = ExerciseLogSlice.actions;

export default ExerciseLogSlice.reducer