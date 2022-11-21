import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    status: null
}

export const socialFetch = createAsyncThunk(
    "social/socialFetch",
    async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}public/social`,{
                mode: 'cors'
            })
            const data = await response.json();
            return data
        } catch (error) {
            console.error(error)
        }
    }
)

const socialSlice = createSlice({
    name: 'social',
    initialState,
    reducers: {},
    extraReducers: {
        [socialFetch.pending]: (state, action) => {
            state.status = 'pending'
        },
        [socialFetch.fulfilled]: (state, action) => {
            state.status = 'success';
            state.items = action.payload.result;
        },
        [socialFetch.rejected]: (state, action) => {
            state.status = 'rejected'
        }
    }
})

export default socialSlice.reducer;