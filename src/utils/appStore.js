import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice"
import feedSlice from "./feedSlice"
import connectionsSlice from "./connectionsSlice"
import requestsSlice from "./requestsSlice"


const appStore = configureStore({
    reducer: {
        user: userSlice,
        feed: feedSlice,
        connection: connectionsSlice,
        requests: requestsSlice,
    }
})

export default appStore;