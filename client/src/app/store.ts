import { configureStore } from '@reduxjs/toolkit';
import preferencesSlice from './slices/preferencesSlice';

export const store = configureStore({
    reducer: {
        preferences: preferencesSlice
    },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch