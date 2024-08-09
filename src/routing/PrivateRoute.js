import React from "react";
import AclService from "./AClServices";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  const { component: Component, isAuthenticated, role, path, ...rest } = props; // destructing props
  const aclServices = new AclService(role); // initialising a user
  const permitted = aclServices.hasPermission(path); // checking if user has permission to specific Route
  const whiteListUrl = ["not-found", aclServices.redirectUrl]; // redirect mean Access-denied
  let redirect = "/"; // redirect Url
  redirect = (isAuthenticated && !permitted && aclServices.redirectUrl) || "/"; // userLoggedIn but not permission then redirect to
  return (
    <>
      <div>
        {/* here we are checking if user have Permission to route or this is not-found/AccessDenied Url/Route */}
        {isAuthenticated && (permitted || whiteListUrl.includes(path)) ? (
          Component
        ) : (
          <Navigate to={redirect} /> // if user dont have permission then it will be redirect to access-Denied
        )}
      </div>
    </>
  );
};

export default PrivateRoute;
