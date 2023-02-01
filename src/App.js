import "./App.css";
import Content from "./components/Content";
import Groupedemployee from "./components/Groupedemployee";
import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route exact path="/" element={<Content></Content>}></Route>
        <Route
          exact
          path="/grouped"
          element={<Groupedemployee></Groupedemployee>}
        ></Route>
      </Routes>
    </>
  );
}

export default App;
