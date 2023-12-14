import React from "react";
import TodoApp from "./components/TodoApp.jsx";
import "./App.css";

const App = () => {
  return(
    <div className="App">
      <h1> Todo App </h1>
      <TodoApp />
    </div>
  );
}

export default App;