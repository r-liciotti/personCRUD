import React from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Link as ChakraLink,
  HStack,
  Card,
  CardBody,
  StackDivider,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Card margin={"5"}>
      <CardBody>
        <HStack
          alignItems="start"
          spacing={5}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <ChakraLink
            as={ReactRouterLink}
            to={`/`}
            fontSize="xl"
            fontWeight={"bold"}
          >
            Add
          </ChakraLink>
          <ChakraLink
            as={ReactRouterLink}
            to={`/list`}
            fontSize="xl"
            fontWeight={"bold"}
          >
            List
          </ChakraLink>
        </HStack>
      </CardBody>
    </Card>
  );
}
