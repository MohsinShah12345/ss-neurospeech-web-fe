import React from "react";
import "./Main.scss";
import { useNavigate } from "react-router-dom";
import {
  Layout,
  Menu,
  Typography,
  Dropdown,
  Space,
  Input,
  Button,
  Card,
} from "antd";
import { getUser, unSetSessionCookies } from "../../modules/common/utils";
import SegmentedBar from "../../common/SegmentedBar/SegmentedBar";
import {
  HomeOutlined,
  AudioTwoTone,
  UserOutlined,
  BuildOutlined,
  SoundOutlined,
  DollarOutlined,
  LogoutOutlined,
  SettingOutlined,
  SearchOutlined,
  CaretDownOutlined,
  PlusCircleOutlined,
  StarTwoTone,
  BellTwoTone,
} from "@ant-design/icons";
import { useState } from "react";

const { Title } = Typography;
const { Header, Sider, Content } = Layout;

const Main = (props) => {
  const navigate = useNavigate();
  const { children } = props;
  const user = JSON.parse(getUser()); // getting user details
  const role = user?.role?.toLowerCase();

  const onSearch = (search) => {
    console.log("Searched Value: ", search);
  };

  const MenuList = {
    adminMenu: [
      {
        key: "1",
        icon: <HomeOutlined />,
        label: "Dashboard",
        onClick: () => navigate("/admin/home"),
      },
      {
        key: "2",
        icon: <UserOutlined />,
        label: "Users",
        onClick: () => navigate("/admin/users"),
      },
      {
        key: "3",
        icon: <BuildOutlined />,
        label: "Packages",
        onClick: () => navigate("/admin/packages"),
      },
      {
        key: "4",
        icon: <SoundOutlined />,
        label: "Voices",
        onClick: () => navigate("/admin/voices"),
      },
      {
        key: "5",
        icon: <DollarOutlined />,
        label: "Payments",
        onClick: () => navigate("/admin/payments"),
      },
      {
        key: "6",
        icon: <SettingOutlined />,
        label: "Settings",
        onClick: () => navigate("/settings"),
      },
    ],
    clientMenu: [
      {
        key: "1",
        icon: <HomeOutlined />,
        label: "Dashboard",
        onClick: () => navigate("/client/home"),
      },
      {
        key: "2",
        icon: <BuildOutlined />,
        label: "Packages",
        onClick: () => navigate("/client/package"),
      },
      {
        key: "3",
        icon: <SettingOutlined />,
        label: "Settings",
        onClick: () => {
          navigate("/settings");
        },
      },
    ],
  };
  const ProfileMenu = [
    {
      key: "1",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: () => {
        unSetSessionCookies();
        window.location.reload();
      },
    },
  ];
  // const headerItems = [
  //   {
  //     key: "1",
  //     label: (
  //       <div>
  //         <Dropdown menu={{ items: ProfileMenu }}>
  //           <Space>
  //             <CaretDownOutlined />
  //           </Space>
  //         </Dropdown>
  //       </div>
  //     ),
  //   },
  // ];
  const { Search } = Input;
  const SubMenu = Menu.SubMenu;
  const MenuItemGroup = Menu.ItemGroup;
  return (
    <Layout style={{ height: "100vh" }} className="main-layout-wrapper">
      <Sider trigger={null} className="sidebar">
        <div className="logo-neuro-speech-logo">
          <img
            src="/images/SocialScrewLogo.png"
            alt="Logo"
            height={20}
            width={20}
            className="logo-img"
          />
          <Title level={4} className="text-logo">
            Social Screw
          </Title>
        </div>
        <div className="upper-menu">
          <Input
            size="large"
            placeholder="Search"
            onChange={onSearch}
            prefix={<SearchOutlined />}
          />
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[...MenuList[`${role}Menu`]]}
        />
      </Sider>
      <Layout className="site-layout">
        <SegmentedBar defaultPage={"Neurospeech"} />
        {/* <Header
          className="site-layout-background"
          style={{
            padding: 15,
            height: 90,
            background: "white",
          }}
        > 

         <Menu
            theme="dark"
            mode="horizontal"
            style={{ justifyContent: "end" }}
            defaultSelectedKeys={["2"]}
            items={headerItems}
          /> 
         <div className="menu-container">
            <Menu mode="horizontal" theme="dark" className="left-side-menu">
              <Menu.Item key="star">
                <StarTwoTone />
              </Menu.Item> 
         <Menu.Item key="Blogs"> 
         <Search
                placeholder="search"
                onSearch={onSearch}
                className="navbar-search"
                style={{
                  width: 250,
                  marginTop: 10,
                }}
              /> */}
        {/* </Menu.Item> */}
        {/* </Menu> */}
        {/* <Menu mode="horizontal" theme="dark" className="right-side-menu"> */}
        {/* <span className="right-side-menu">
                <Menu.Item key="notification">
                  <BellTwoTone />
                </Menu.Item>
                <Menu.Item key="logout">
                  <Dropdown menu={{ items: ProfileMenu }}>
                    <Space>
                      <CaretDownOutlined />
                    </Space>
                  </Dropdown>
                </Menu.Item>
              </span>
            </Menu>
          </div> 
         </Header> */}
        <Content
          className="site-layout-background"
          style={{
            padding: 10,
            background: "#fff",
            overflowX: "scroll",
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Main;
