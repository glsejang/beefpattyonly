import { configureStore, createSlice } from '@reduxjs/toolkit'



const pageSlice = createSlice({
    name: 'page',
    initialState: { value: 'Home'},
    reducers:{
        toPage: (state, action) => {state.value = action.payload}
    }
})

export const { toPage} = pageSlice.actions  


const store = configureStore({
  reducer: {
    page:pageSlice.reducer
  }
})





export default store
