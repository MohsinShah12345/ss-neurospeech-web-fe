import React, { useState, useEffect } from "react";
import "./Client.scss";
import { Layout, Menu, Typography, Input, Divider, Card, Button } from "antd";
import { SearchOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getProjectRequest } from "../../modules/project/reducer";
import { faBorderNone } from "@fortawesome/free-solid-svg-icons";

const { Title } = Typography;
const { Sider, Content } = Layout;

const Main = (props) => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.project);

  const { children } = props;

  useEffect(() => {
    dispatch(getProjectRequest());
  }, []);

  const onSearch = (search) => {
    console.log("Searched Value: ", search);
  };

  const [show, setShow] = useState(false);

  return (
    <Layout style={{ height: "100vh" }} className="client-layout-wrapper">
      <Sider trigger={null} className="side-navbar">
        <div className="logo neuro-speech-logo">
          <img
            src="/images/SocialScrewLogo.png"
            alt="Logo"
            height={20}
            width={20}
            className="logo-img"
          />
          <Title level={5} className="text-logo">
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
          <Button
            className="project-btn"
            icon={<PlusCircleOutlined />}
            size="large"
            onClick={() => setShow(!show)}
          >
            Add New Project
          </Button>
          {show && (
            <Card className="click-popup">
              <Input
                className="popup-input"
                size="large"
                placeholder="| Enter Project Name"
              />
              <div className="popup-btns">
                <Button className="confirm-btn">Confirm</Button>
                <Button className="cancel-btn" onClick={() => setShow(!show)}>
                  Cancel
                </Button>
              </div>
            </Card>
          )}
        </div>
        <Divider className="menu-divider" />
        <div className="projects-section">
          <Title level={5} className="projects-title">
            Your Projects
          </Title>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ background: "transparent" }}
            items={projects.map((project, key) => {
              return {
                key: key + 1,
                label: (
                  <div className="project-label">
                    <span className="custom-circle"></span>
                    {project.projectName}
                  </div>
                ),
              };
            })}
          />
        </div>
        <div className="upgrade-card-container">
          <img
            src="/images/UpgradeMark.png"
            alt="Upgrade Badge"
            height={80}
            width={80}
            className="upgrade-badge"
          />
          <Card
            style={{
              width: 200,
              height: 170,
            }}
            className="upgrade-card"
          >
            <div className="upgrade-card-body">
              <span>
                Upgrade to <span className="pro-span">PRO</span> for more
                features.
              </span>
              <Button size="large">Upgrade Now</Button>
            </div>
          </Card>
        </div>
      </Sider>
      <Layout className="site-layout">
        <Content
          className="site-layout-background"
          style={{
            padding: 10,
            background: "#eeeefa",
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
