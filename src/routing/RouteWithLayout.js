import React from "react";
import PropTypes from "prop-types";
import { getUserId, getUser } from "../modules/common/utils";
import PrivateRoute from "./PrivateRoute"; // private route for users who logged In
import PublicRoute from "./PublicRoute"; // public routes for users who does not loggedIn

const RouteWithLayout = (props) => {
  const user = JSON.parse(getUser()); // getting user details
  const isAuthenticated = !!getUserId(); // checking If User authenticated or not
  const role = user?.role?.toLowerCase(); // getting role from user details
  const {
    layout: Layout, // Main || Minimal Layout
    component: Component, // Component for rendering
    protectedRoute, // state for protected routes
    ...rest
  } = props; //destructing props
  return protectedRoute ? (
    <PrivateRoute
      isAuthenticated={isAuthenticated} // passing Prop if user LoggedIn or not
      role={role} // passing the role assigned to user
      // rapping componenet in Layout
      component={
        <Layout>
          <Component />
        </Layout>
      }
      {...rest}
    />
  ) : (
    <PublicRoute
      role={role} // passing the role assigned to user
      isAuthenticated={isAuthenticated} // passing Prop if user LoggedIn or not
      component={
        <Layout>
          <Component />
        </Layout>
      }
      {...rest}
    />
  );
};

RouteWithLayout.propTypes = {
  component: PropTypes.any.isRequired,
  layout: PropTypes.any.isRequired,
  path: PropTypes.string.isRequired,
  path: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
  protectedRoute: PropTypes.bool,
};

export default RouteWithLayout;
