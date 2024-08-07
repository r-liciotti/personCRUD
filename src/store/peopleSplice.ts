import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface Person {
    genere: string,
    name: string,
    surname: string,
    city: string,
    regione: string,
    country: string,
    email: string,
    eta: number,
    img: string
}

const initialState: PeopleState = {
    // people: JSON.parse(localStorage.getItem('people') || '[]'),
    people: [] as Person[],

};

interface PeopleState {
    people: Person[];
}


const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        addPersonToList(state, action: PayloadAction<Person>) {
            console.log("addPersonToList");
            state.people = [
                ...state.people,
                action.payload
            ];

            console.log("Updated state.people:", state.people);


            //  localStorage.setItem('people', JSON.stringify(state.people));

        }
    }
});



export const { addPersonToList } = peopleSlice.actions;

export default peopleSlice.reducer;
