"use client";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
const page = () => {
  return (
    <ChakraProvider>
      <Box
        textAlign={{ base: "center", md: "center", lg: "center" }}
        p="20px"
        bg="#6B46C1"
        color="white"
      >
        <Header />
        <MainBody />
      </Box>
    </ChakraProvider>
  );
};

export default page;
