import React from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

function BreadCrumbs({ mainRoute, childRoutes }) {
  return (
    <div className="breadcrumbs-wrapper">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={mainRoute.route}>{mainRoute.name}</Link>
        </Breadcrumb.Item>
        {childRoutes.map((child) => {
          return (
            <Breadcrumb.Item>
              <Link to={child.route}>{child.name}</Link>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default BreadCrumbs;
