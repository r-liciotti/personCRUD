import { combineReducers, configureStore } from '@reduxjs/toolkit';
import peopleReducer from "./peopleSplice";
import personReducer from "./personSlice";

const rootReducer = combineReducers({
    people: peopleReducer,
    person: personReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


