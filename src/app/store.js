import { configureStore } from '@reduxjs/toolkit'

import featuredReducer, { featuredFetch } from '../features/slices/featuredSlice'
import cartReducer from '../features/slices/cartSlice'
import socialReducer, { socialFetch } from '../features/slices/socialSlice'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        featured: featuredReducer,
        social: socialReducer
    }
});

store.dispatch(featuredFetch());
store.dispatch(socialFetch());