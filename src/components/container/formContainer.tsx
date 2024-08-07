import React, { useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Image,
  FormHelperText,
  VStack,
  Button,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Radio,
  RadioGroup,
  Stack,
  Avatar,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

import { addPersonToList } from "../../store/peopleSplice";
import { Person, getRandomPersonAPI } from "../../store/personSlice";

//import { PersonAppDispatch, PersonState } from "../../store/store";
import { AppDispatch, RootState } from "../../store/store";

export default function FormContainer() {
  const [pers, setPers] = useState({
    genere: "",
    name: "",
    surname: "",
    city: "",
    regione: "",
    country: "",
    email: "",
    eta: 0,
    img: "",
  } as Person);

  const dispatch = useDispatch<AppDispatch>();

  const [radioGenere, setRadioGenere] = useState("");
  const randomPersonApi = useSelector((state: RootState) => state.person);

  // Gestisci i cambiamenti nei campi di input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPers((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    // pers.genere = radioGenere;
    setPers((prevPerson) => ({
      ...prevPerson,
      genere: radioGenere,
    }));
    dispatch(addPersonToList(pers));
    setPers({
      genere: "male",
      name: "",
      surname: "",
      city: "",
      regione: "",
      country: "",
      email: "",
      eta: 0,
      img: "",
    });
    setRadioGenere("");
  };

  useEffect(() => {
    // console.log("useEffect");

    // console.log(randomPersonApi);

    if (randomPersonApi && randomPersonApi.name) {
      // Verifica se randomPersonApi ha dati validi
      setPers({
        genere: randomPersonApi.genere,
        name: randomPersonApi.name,
        surname: randomPersonApi.surname,
        city: randomPersonApi.city,
        regione: randomPersonApi.regione,
        country: randomPersonApi.country,
        email: randomPersonApi.email,
        eta: randomPersonApi.eta,
        img: randomPersonApi.img,
      });
      setRadioGenere(randomPersonApi.genere);
    }
  }, [randomPersonApi]);

  const handleClick = () => {
    dispatch(getRandomPersonAPI());
  };

  return (
    <form onSubmit={handleSumbit}>
      <VStack spacing={4} align="flex-start">
        <FormControl>
          <FormLabel htmlFor="gender">Genere</FormLabel>
          <RadioGroup value={radioGenere} onChange={setRadioGenere}>
            <Stack direction="row">
              <Radio value="male">Maschio</Radio>
              <Radio value="female">Femmina</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>

        <HStack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <Input
              id="name"
              name="name"
              type="text"
              value={pers.name}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="cognome">Cognome</FormLabel>
            <Input
              id="cognome"
              name="surname"
              type="text"
              value={pers.surname}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>

        <HStack spacing={4}>
          <FormControl>
            <FormLabel htmlFor="city">Citta</FormLabel>
            <Input
              id="city"
              name="city"
              type="text"
              value={pers.city}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl maxW={20}>
            <FormLabel htmlFor="province">Provincia</FormLabel>
            <Input
              id="province"
              name="regione"
              type="text"
              value={pers.regione}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl maxW={40}>
            <FormLabel htmlFor="country">Stato</FormLabel>
            <Input
              id="country"
              name="country"
              type="text"
              value={pers.country}
              onChange={handleChange}
            />
          </FormControl>
        </HStack>

        <HStack alignItems="start" w="100%">
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              w="100%"
              name="email"
              value={pers.email}
              onChange={handleChange}
            />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>

          <FormControl w="fit-content">
            <FormLabel>Eta</FormLabel>
            <NumberInput maxW={100}>
              <NumberInputField
                value={pers.eta}
                name="eta"
                onChange={handleChange}
              />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </HStack>

        <FormControl alignItems="center">
          <FormLabel htmlFor="picture">Immagine</FormLabel>
          <HStack>
            {(pers.name || pers.surname || pers.img) && (
              <Avatar name={pers.name + " " + pers.surname} src={pers.img} />
            )}
            <Input
              maxW="80%"
              id="picture"
              name="img"
              type="text"
              value={pers.img}
              onChange={handleChange}
            />
          </HStack>
          <Image></Image>
        </FormControl>

        <HStack w="100%" justifyContent={"space-between"}>
          <Button type="submit" colorScheme="blue">
            Add
          </Button>
          <Button colorScheme="blackAlpha" onClick={handleClick}>
            Genera Info
          </Button>
        </HStack>
      </VStack>
    </form>
  );
}
