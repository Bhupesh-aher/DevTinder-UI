import { createSlice } from "@reduxjs/toolkit";

const requestsSlice = createSlice({
    name: "requests",
    initialState: null,
    reducers: {
        addRequests: (state, action) => {
            return action.payload
        },
        removeRequest: (state, action) => {
            const newArray = state.filter((req) => req._id !== action.payload);
            return newArray
        }
    }
})

export const { addRequests, removeRequest } = requestsSlice.actions;

export default requestsSlice.reducer;