import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { MainMenuRoutes } from "../../routing/AllRoutes";
import AclService from "../../routing/AClServices";
import { Dropdown } from "antd";
// import menu from "./SettingMenu";
import "./MainMenu.scss";

import {
  SearchOutlined,
  EyeOutlined,
  UnorderedListOutlined,
  BarChartOutlined,
  CopyOutlined,
  GlobalOutlined,
  SettingOutlined,
  ScissorOutlined,
  MessageOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { message as antMessage } from "antd";
import { unSetSessionCookies } from "../../modules/common/utils";

const MainMenu = ({ match }) => {
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("");
  const user = useSelector((state) => state.authReducer.user);
  const aclService = new AclService(user.role.toLowerCase());
  return (
    <Menu
      onClick={(e) => setCurrent(e.key)}
      selectedKeys={[current]}
      mode="horizontal"
      theme="dark"
      className="ims-main-menu"
      style={{ minWidth: "75%", marginLeft: "20px" }}
    >
      {MainMenuRoutes.map((route, i) => {
        const classes = [];
        const isActive = route.route == match.path;

        !aclService.hasPermission(route.route) && classes.push("disable");

        isActive && classes.push("active");

        return (
          <Menu.Item key={i} className={classes.join(" ")}>
            {route.label === "Settings" ? (
              <Dropdown trigger={["click"]} placement="bottomLeft" arrow>
                <Link to={route.route}>{route.label}</Link>
              </Dropdown>
            ) : (
              <Link to={route.route}> {route.label} </Link>
            )}
          </Menu.Item>
        );
      })}
    </Menu>
  );
};

export default MainMenu;
