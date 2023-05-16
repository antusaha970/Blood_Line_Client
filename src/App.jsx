import { Route, Routes } from "react-router-dom";
import { Home, Loader, NavBar, Register } from "./components/index";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loaderId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(loaderId);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
