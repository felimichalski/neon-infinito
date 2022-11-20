import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: null
}

export const featuredFetch = createAsyncThunk(
    "featured/featuredFetch",
    async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}featured`,{
                mode: 'cors'
            })
            const data = await response.json();
            return data
        } catch (error) {
            console.error(error)
        }
    }
)

const featuredSlice = createSlice({
    name: 'featured',
    initialState,
    reducers: {},
    extraReducers: {
        [featuredFetch.pending]: (state, action) => {
            state.status = 'pending'
        },
        [featuredFetch.fulfilled]: (state, action) => {
            state.status = 'success';
            state.items = action.payload.result;
        },
        [featuredFetch.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    }
})

export default featuredSlice.reducer;