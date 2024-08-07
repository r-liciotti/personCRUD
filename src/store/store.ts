import { configureStore } from '@reduxjs/toolkit';
import peopleReducer from "./peopleSplice";
import personReducer from "./personSlice";


export const peopleStore = configureStore({
    reducer: {
        people: peopleReducer,
        person: personReducer,
    }
});

export type RootState = ReturnType<typeof peopleStore.getState>
export type AppDispatch = typeof peopleStore.dispatch;


