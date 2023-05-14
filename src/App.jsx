import { Route, Routes } from "react-router-dom";
import { Home, NavBar } from "./components/index";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
