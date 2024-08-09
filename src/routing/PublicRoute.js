import React from "react";
import { Navigate } from "react-router-dom";
import AclServices from "./AClServices";
const PublicRoute = (props) => {
  const { component: Component, isAuthenticated, role, path, ...rest } = props; // destructing props
  const aclService = new AclServices(role); // initialising User
  return (
    <>
      <div>
        {/* if User Authenticated and he will try to access auth routes then he will be redirected to landing Path */}
        {isAuthenticated ? <Navigate to={aclService.landingPage} /> : Component}
      </div>
    </>
  );
};

export default PublicRoute;
