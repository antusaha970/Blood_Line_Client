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
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase.config";
import { useDispatch } from "react-redux";
import {
  addUserInfo,
  fetchLoggedInUser,
} from "./redux/slices/userSlice/userSlice";
import { toast } from "react-toastify";

function App() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [user, loading, error] = useAuthState(auth);
  if (error) {
    console.log(error);
  }
  useEffect(() => {
    const loaderId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => {
      clearTimeout(loaderId);
    };
  }, []);

  useEffect(() => {
    if (user !== null && loading !== true) {
      const { displayName: name, email, photoURL: imageURL } = user;
      dispatch(addUserInfo({ name, email, imageURL }));
      dispatch(fetchLoggedInUser(email));
      toast(`Welcome ${name.toUpperCase()}`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  }, [user, loading]);
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
