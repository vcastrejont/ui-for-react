import React from "react";
import "../style/style.scss";
import Ucontainter from "./lib/Ucontainter";
import Header from "./Header";
import Aside from "./Aside";
import Main from "./Main";

const App = () => {
  return (
    <Ucontainter>
      <Header></Header>
      <Aside />
      <Main />
    </Ucontainter>
  );
};

export default App;
