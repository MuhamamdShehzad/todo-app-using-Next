"use client";
import { Box, ChakraProvider, Flex } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
const page = () => {
  const [id, SetId] = useState(2);
  const [userInput, SetUserInput] = useState("");
  const [todo, SetTodo] = useState([
    { id: 0, todoText: "Hello", completed: false },
    { id: 1, todoText: "World", completed: false },
  ]);

  const handleCheckbox = (meraTodo: any) => {
    const newtodo = todo.map((task) => {
      if (task.id === meraTodo.id) {
        task.completed = !task.completed;
      }
      return task;
    });
    SetTodo(newtodo);
  };
  const handleAddTodo = () => {
    if (userInput == "") return;
    SetId(id + 1);
    const newtodo = { id: id, todoText: userInput, completed: false };
    const temp = [...todo, newtodo];
    SetTodo(temp);
    SetUserInput("");
  };
  const handleDelete = (task: any) => {
    const newtodo = todo.filter((a) => {
      if (a.id === task.id) return false;
      return true;
    });
    SetTodo(newtodo);
  };
  return (
    <ChakraProvider>
      <Box
        textAlign={{ base: "center", md: "center", lg: "center" }}
        p="20px"
        bg="#6B46C1"
        pt="50px"
        pb="50px"
        mt="100px"
        mb="100px"
        ml="200px"
        mr="200px"
        color="white"
      >
        <Header />

        <MainBody />
      </Box>
    </ChakraProvider>
  );
};

export default page;
