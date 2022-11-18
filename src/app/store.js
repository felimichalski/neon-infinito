import { configureStore } from '@reduxjs/toolkit'

import featuredReducer, { featuredFetch } from '../features/slices/featuredSlice'

export const store = configureStore({
    reducer: {
        featured: featuredReducer,
        f: featuredReducer,
        ft: featuredReducer,
    }
});

store.dispatch(featuredFetch())