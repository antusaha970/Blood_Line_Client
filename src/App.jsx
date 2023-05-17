import { Route, Routes } from "react-router-dom";
import {
  AdditionalInfo,
  FindBloodLanding,
  Home,
  Loader,
  NavBar,
  PrivateRoute,
  Register,
  UserProfile,
} from "./components/index";
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
            <Route path="/find_blood" element={<FindBloodLanding />} />
            <Route
              path="/addition_info"
              element={
                <PrivateRoute>
                  <AdditionalInfo />
                </PrivateRoute>
              }
            />
            <Route
              path="/user_profile"
              element={
                <PrivateRoute>
                  <UserProfile />
                </PrivateRoute>
              }
            />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
