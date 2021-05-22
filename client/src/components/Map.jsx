import React from "react";
import { Button } from "react-bootstrap";

const Map = ({ data }) => {
  const item = data[Math.floor(Math.random() * data.length)];

  const addDelete = () => {
    return (
      <Button variant="secondary" className="DeleteButton">
        Delete
      </Button>
    );
  };

  return (
    <div>
      {item ? (
        <span style={{ padding: "10px" }} className="RandomPhrase">
          {item.description}
          {addDelete()}
        </span>
      ) : null}
    </div>
  );
};
export default Map;
