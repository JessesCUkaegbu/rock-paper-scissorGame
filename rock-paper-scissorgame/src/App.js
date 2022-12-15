import React, { useState } from "react";
import Header from "./component/header";
import Play from "./component/play";
import Game from "./component/game";
import Footer from "./component/footer";
import { Routes, Route } from "react-router-dom";
import "./Style.scss"

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);

  return (
    <>
      <div className="container">
        <Header score={score} />
        <Routes>
          <Route exact path="/">
            <Play setMyChoice={setMyChoice} />
          </Route>
          <Route path="/game">
            <Game myChoice={myChoice} score={score} setScore={setScore} />
          </Route>
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;