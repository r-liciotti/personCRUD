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

interface People {
    people: Person[];
}


const initialState: People = {
    // people: JSON.parse(localStorage.getItem('people') || '[]'),
    people: [] as Person[],

};



const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        addPersonToList(state, action: PayloadAction<Person>) {

            state.people.push(action.payload); // Usare push per mantenere l'immutabilità con Redux Toolkit         

        },
    }
});



export const { addPersonToList } = peopleSlice.actions;

export default peopleSlice.reducer;
