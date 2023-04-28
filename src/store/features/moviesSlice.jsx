
import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    search: "",
    genre: "trending",isClicked:false,page:1
    
  },
  reducers: {
    changeGenre(state, action) {
      state.genre = action.payload;
    },
    searchTerm(state,action){
      state.search=action.payload
    },
    isClickedFun(state,action){
      state.isClicked=action.payload
    },
    changePage(state,action){
state.page=action.payload
    }

  },
 
});

export const moviesReducer = moviesSlice.reducer;
export const  {changeGenre,searchTerm,isClickedFun,changePage}=moviesSlice.actions