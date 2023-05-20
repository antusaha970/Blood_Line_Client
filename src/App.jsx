import { Route, Routes } from "react-router-dom";
import {
  AdditionalInfo,
  Contact,
  FindBloodLanding,
  Home,
  Loader,
  NavBar,
  PrivateRoute,
  Register,
  UserProfile,
} from "./components/index";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { Typography } from "@mui/material";

function App() {
  const isMessengerWebView =
    navigator.userAgent.includes("FBAN") ||
    navigator.userAgent.includes("FBAV");
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loaderId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    if (isMessengerWebView) {
      window.open("https://blood-line-icst.netlify.app/", "_blank");
      // window.close(); // Close the current tab within Messenger web view
    }
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
          <Typography
            variant="small"
            sx={{
              textAlign: "center",
            }}
            component="p"
          >
            Website is in development please report bugs to developers
          </Typography>
          <NavBar />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/find_blood" element={<FindBloodLanding />} />
            <Route path="/contact" element={<Contact />} />
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
