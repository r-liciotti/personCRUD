import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { HStack, Text } from "@chakra-ui/react";

const ListPeople: React.FC = () => {
  const peopleList = useSelector((state: RootState) => state.people.people);
  const randomPersonApi = useSelector((state: RootState) => state.person);

  console.log("Current people list:", peopleList);
  console.log(randomPersonApi);

  return (
    <>
      <div>
        {peopleList.map((p, i) => (
          <HStack key={i}>
            <img src={p.img} alt="" />
            <Text>
              {p.name} {p.surname}
            </Text>
          </HStack>
        ))}
      </div>
    </>
  );
};
export default ListPeople;
