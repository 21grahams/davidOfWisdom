import React from "react";
import { Button } from "react-bootstrap";

const Map = ({ data, removePost }) => {
  const item = data[Math.floor(Math.random() * data.length)];

  const addDelete = (id) => {
    return (
      <Button variant="secondary" className="DeleteButton" onClick={() => removePost(id)}>
        Delete
      </Button>
    );
  };

  return (
    <div>

      {item ? (
        <span style={{ padding: "10px" }} className="RandomPhrase">
          {item.description}
          {addDelete(item)}
        </span>
      ) : null}
    </div>
  );
};
export default Map;