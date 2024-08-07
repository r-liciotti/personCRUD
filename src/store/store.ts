import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from "./peopleSplice";
import personReducer from "./personSlice";
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export const peopleStore = configureStore({
    reducer: {
        people: peopleReducer,
        person: personReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof peopleStore.getState>
export type AppDispatch = typeof peopleStore.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default peopleStore;

