import React from "react";
import { Link, HStack, Card, CardBody, StackDivider } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Card margin={"5"}>
      <CardBody>
        <HStack
          alignItems="start"
          spacing={5}
          divider={<StackDivider borderColor="gray.200" />}
        >
          <Link href={`/`} fontSize="xl" fontWeight={"bold"}>
            Add
          </Link>
          <Link href={`/list`} fontSize="xl" fontWeight={"bold"}>
            List
          </Link>
        </HStack>
      </CardBody>
    </Card>
  );
}
