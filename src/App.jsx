import React, { useState, useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";

const App = () => {
  const apiTesting = () => {
    fetchDataFromApi("/movie/popular").then((res) => {
      console.log(res);
    });
  };

  useEffect(() => {
    apiTesting();
  }, []);

  return <div>App</div>;
};

export default App;
