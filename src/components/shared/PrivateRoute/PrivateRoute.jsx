import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
function PrivateRoute({ children }) {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const location = useLocation();
  if (!isLoggedIn) {
    return (
      <Navigate to="/register" replace state={{ from: location.pathname }} />
    );
  }
  return children;
}
export default PrivateRoute;
PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};
