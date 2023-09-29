import React from "react";
import "./app.css";

export const App = () => {
  const name = "Parag";
  const age = 32;

  return (
    <div>
      <h1>
        My name is {name} and I am {age} years old
      </h1>
    </div>
  );
};
