// import { createReducer } from "@reduxjs/toolkit";

// const initialState={
//     isAuthenticated:false
// }

// export const userReducer=createReducer(initialState,{
//     LoadUserRequest:(state)=>{
//         state.loading=true
//     },
//     LoadUserSuccess:(state,action)=>{
//         state.isAuthenticated=true;
//         state.isLoading=false;
//         state.user=action.payload;
//     },
//     LoadUserFail:(state,action)=>{
//         state.isAuthenticated=false;
//         state.isLoading=false;
//         state.error=action.payload;
//     },
//     clearErrors:(state)=>{
//         state.error=null
//     }
    
// })

import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('LoadUserRequest', (state) => {
      state.loading = true;
    })
    .addCase('LoadUserSuccess', (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    })
    .addCase('LoadUserFail', (state, action) => {
      state.isAuthenticated = false;
      state.loading = false;
      state.error = action.payload;
    })
    .addCase('clearErrors', (state) => {
      state.error = null;
    });
});