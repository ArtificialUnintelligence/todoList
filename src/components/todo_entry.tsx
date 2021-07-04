import React from "react";

interface Props {
  text: string;
  finished: boolean;
  id: number;
  handleChecked: (index: number, status: boolean) => void;
}

export const TodoEntry: React.FC<Props> = ({
  text,
  finished,
  id,
  handleChecked,
}) => {
  return (
    <div
      style={{
        border: "3px solid black",
        padding: 10,
        display: "flex",
        flexDirection: "row",
        width: "fit-content",
        marginTop: 10,
        backgroundColor: finished ? "lightgray" : "darksalmon",
      }}
    >
      <span
        style={{
          marginRight: 10,
        }}
      >
        {id}: {text}
      </span>
      <input
        type="checkbox"
        style={{
          marginLeft: "auto",
        }}
        onChange={(e) => handleChecked(id, e.target.checked)}
        checked={finished}
      ></input>
    </div>
  );
};
