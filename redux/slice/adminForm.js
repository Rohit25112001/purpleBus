import { createSlice } from "@reduxjs/toolkit";

const addBus = createSlice({
    name:'adminForm',
    initialState:false,
    reducers:{
        addBusButton: (state)=>{
            return(!state)
        }
    }
})

export const {addBusButton} = addBus.actions;
export default addBus.reducer;