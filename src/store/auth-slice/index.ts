/* eslint-disable @typescript-eslint/no-explicit-any */
import {createSlice} from "@reduxjs/toolkit"

type InitialStateType = {
    isAuthenticated : boolean,
    isLoading : boolean,
    user : any
}

const initialState : InitialStateType = {
    isAuthenticated : false,
    isLoading : false,
    user : null
}

const authSlice = createSlice({
   name:'auth',
   initialState,
   reducers : {
        // reducers for managing the states
        setUser : (state,action)=>{

        }
   }
})

export const {setUser} = authSlice.actions
export default authSlice.reducer
