import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';


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
};

const initialState: Person = {
    genere: "",
    name: "",
    surname: "",
    city: "",
    regione: "",
    country: "",
    email: "",
    eta: 0,
    img: ""
};


const personSlice = createSlice({
    name: 'person',
    initialState,
    reducers: {
        setPerson(state, action: PayloadAction<Person>) {
            state = action.payload;
        }
    },
    extraReducers: (builder) => {

        builder.addCase(getRandomPersonAPI.fulfilled, (state, action: PayloadAction<Person>) => {
            // console.log("Action fulfilled:");  // Log per debug

            //state = action.payload;
            return action.payload;
        })
    }
});

export const getRandomPersonAPI = createAsyncThunk<Person>("person/getRandomPerson", async () => {

    const response = await axios.get("https://randomuser.me/api/");
    const res = response.data.results[0];
    const _person: Person = {
        genere: res.gender,
        name: res.name.first,
        surname: res.name.last,
        city: res.location.city,
        regione: res.location.state,
        country: res.location.country,
        email: res.email,
        eta: res.dob.age,
        img: res.picture.medium
    };
    return _person;
});

export const { setPerson } = personSlice.actions;
export default personSlice.reducer;
