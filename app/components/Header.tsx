import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <>
      <Heading as="h1">Todo App</Heading>
      <Text pt="10px" fontStyle={"italic"}>
        Keep track of daily tasks!
      </Text>
    </>
  );
};

export default Header;
