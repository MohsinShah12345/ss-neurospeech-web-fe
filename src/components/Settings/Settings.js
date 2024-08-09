import React from "react";
import "./Settings.scss";
import BreadCrumbs from "../../common/BreadCrumbs/BreadCrumbs";

const Settings = () => {
  const mainBreadcrumbsRoute = {
    name: "Home",
    route: "/client/home",
  };

  const breadcrumbsRoutes = [
    {
      name: "Settings",
      route: "/settings",
    },
  ];
  return (
    <div>
      <BreadCrumbs
        mainRoute={mainBreadcrumbsRoute}
        childRoutes={breadcrumbsRoutes}
      />
      Settings
    </div>
  );
};

export default Settings;
