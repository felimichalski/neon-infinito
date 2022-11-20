import { configureStore } from '@reduxjs/toolkit'

import featuredReducer, { featuredFetch } from '../features/slices/featuredSlice'
import cartReducer from '../features/slices/cartSlice'

export const store = configureStore({
    reducer: {
        featured: featuredReducer,
        cart: cartReducer
    }
});