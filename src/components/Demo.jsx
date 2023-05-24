import React from "react";
import { VITE_API_MSG, VITE_API_KEY } from "../config/env";

const Demo = () => {
  // to display the example message and key based on particular build
  console.log(VITE_API_MSG);
  console.log(VITE_API_KEY);
  
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Demo;
