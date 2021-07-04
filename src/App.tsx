import React, { useEffect, useState } from "react";
import { TodoEntry } from "./components/todo_entry";
import { AddTodo } from "./components/add_todo";

interface todo {
  id: number;
  text: string;
  finished: boolean;
}

function App() {
  const [todos, setTodos] = useState<todo[]>([]);
  const [sorted, setSorted] = useState(false);
  const [nextID, setNextID] = useState(1);

  useEffect(() => {
    console.log(sorted);
    sorted
      ? setTodos([...todos.sort(sortByText)])
      : setTodos([...todos.sort(sortByID)]);
  }, [sorted]);

  function sortByText(todo1: todo, todo2: todo) {
    return todo1.text.localeCompare(todo2.text);
  }

  function sortByID(todo1: todo, todo2: todo) {
    return todo1.id - todo2.id;
  }

  function handleClick() {
    setSorted((prevSorted) => !prevSorted);
  }

  function handleAdd(text: string) {
    const newTodos = todos.concat({
      id: nextID,
      text: text,
      finished: false,
    });
    setNextID(nextID + 1);
    sorted
      ? setTodos(newTodos.sort(sortByText))
      : setTodos(newTodos.sort(sortByID));
  }

  function handleChecked(id: number) {
    const newTodos = [...todos];
    const { finished } = newTodos[id - 1];
    newTodos[id - 1].finished = !finished;
    setTodos(newTodos);
  }

  return (
    <div
      style={{
        margin: "auto",
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "peachpuff",
        width: "fit-content",
        padding: 20,
        border: "3px solid peru",
      }}
    >
      <AddTodo handleAdd={handleAdd} />
      {sorted ? (
        <button onClick={handleClick}>sort by ID</button>
      ) : (
        <button onClick={handleClick}>sort by text</button>
      )}
      {todos
        .filter((todo) => !todo.finished)
        .map((todo) => (
          <div key={todo.id}>
            <TodoEntry
              text={todo.text}
              finished={todo.finished}
              id={todo.id}
              handleChecked={handleChecked}
            />
          </div>
        ))}
      {todos
        .filter((todo) => todo.finished)
        .map((todo) => (
          <div key={todo.id}>
            <TodoEntry
              text={todo.text}
              finished={todo.finished}
              id={todo.id}
              handleChecked={handleChecked}
            />
          </div>
        ))}
    </div>
  );
}

export default App;
