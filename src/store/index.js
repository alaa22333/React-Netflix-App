import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { moviesReducer } from "../store/features/moviesSlice";
import { movieCoreApi } from "./Services/Apis";
export const store =configureStore({
    reducer:{
        movies:moviesReducer,
       
        [movieCoreApi.reducerPath]:movieCoreApi.reducer
    },middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(movieCoreApi.middleware)
})


export * from '../store/features/moviesSlice'
