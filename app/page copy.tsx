"use client";
import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
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
      <div>
        <h1> My Todo App</h1>
        <br />
        <input
          type="text"
          value={userInput}
          placeholder="Enter any text"
          style={{ backgroundColor: "grey" }}
          onChange={(e) => {
            SetUserInput(e.target.value);
          }}
        ></input>
        <button onClick={handleAddTodo}>Add todo</button>
        <br />
        <ul>
          {todo.map((task) => {
            return (
              <>
                <li key={task.id}>
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleCheckbox(task)}
                  ></input>
                  {task.todoText}
                  <button onClick={() => handleDelete(task)}>Delete</button>
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </ChakraProvider>
  );
};

export default page;
