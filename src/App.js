import React from "react";
import "./App.css";

import { Header } from "./components/Header";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Skills />
      <Contact />
    </React.Fragment>
  );
}

export default App;

// 講義メモ
// 下記二つは同じ意味
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// const Welcome = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// }
