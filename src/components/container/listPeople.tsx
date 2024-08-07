import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function ListPeople() {
  const peopleList = useSelector((state: RootState) => state.people.people);
  console.log("People List:", peopleList); // Aggiungi questo console.log per verificare il contenuto dello stato

  return (
    <>
      <h3>Lung {peopleList.length}</h3>
      <ul>
        {peopleList.map((p, i) => (
          <li key={i}>
            <img src={p.img} alt="" /> {p.name} {p.surname}
          </li>
        ))}
      </ul>
    </>
  );
}
