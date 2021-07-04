import React, { useState } from "react";

interface Props {
  handleAdd: (text: string) => void;
}

export const AddTodo: React.FC<Props> = ({ handleAdd }) => {
  const [text, setText] = useState("");

  return (
    <div
      style={{
        marginBottom: 10,
        display: "flex",
      }}
    >
      <span>Add ToDo</span>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setText("");
          handleAdd(text);
        }}
      >
        <input
          type="text"
          style={{
            marginLeft: 10,
            marginRight: 10,
          }}
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <input type="submit" value="save"></input>
      </form>
    </div>
  );
};
