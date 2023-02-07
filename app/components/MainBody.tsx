import { Box, Button, Flex, Input } from "@chakra-ui/react";
import React, { useState } from "react";

const MainBody = () => {
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
    <Box color={"black"} bg="white" maxW={"700px"} m="50px auto" p={"50px"}>
      <Flex direction={{ base: "row" }}>
        <Input
          type="text"
          value={userInput}
          placeholder="Enter any text"
          variant="outline"
          onChange={(e) => {
            SetUserInput(e.target.value);
          }}
        ></Input>
        <Button colorScheme="teal" variant="solid" onClick={handleAddTodo}>
          Add todo
        </Button>
      </Flex>
    </Box>
  );
};

export default MainBody;
