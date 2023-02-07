import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Flex,
  HStack,
  IconButton,
  Input,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
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
      <Flex direction={{ base: "row" }} mb={5}>
        <Input
          type="text"
          value={userInput}
          placeholder="Enter any text"
          variant="outline"
          onChange={(e) => {
            SetUserInput(e.target.value);
          }}
        ></Input>
        <ButtonGroup
          size="md"
          isAttached
          variant="outline"
          colorScheme="teal"
          onClick={handleAddTodo}
        >
          <Button>Add todo</Button>
          <IconButton aria-label="Add to friends" icon={<AddIcon />} />
        </ButtonGroup>
      </Flex>
      <Flex>
        <UnorderedList listStyleType="none">
          {todo.map((task) => {
            return (
              <>
                <ListItem key={task.id} mb={5}>
                  <HStack>
                    <Checkbox
                      size="lg"
                      colorScheme="green"
                      onChange={() => handleCheckbox(task)}
                    >
                      {" "}
                      <Text pr={5} pl={5} size="md">
                        {task.todoText}
                      </Text>
                    </Checkbox>

                    <Button
                      variant="outline"
                      colorScheme="teal"
                      size="sm"
                      onClick={() => handleDelete(task)}
                    >
                      Delete
                    </Button>
                  </HStack>
                </ListItem>
              </>
            );
          })}
        </UnorderedList>
      </Flex>
    </Box>
  );
};

export default MainBody;
