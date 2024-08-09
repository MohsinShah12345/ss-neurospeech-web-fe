import { Layout } from "antd";
import PropTypes from "prop-types";
import { MainMenu, ProfileMenu } from "./components";

const { Content } = Layout;

const Main = (props) => {
  const { children } = props;

  return (
    <Layout>
      <Layout>
        <div className="main-header-wrapper">
          <MainMenu />
          <ProfileMenu />
        </div>
        <div className="main-content-wrapper">
          <Content>{children}</Content>
        </div>
      </Layout>
    </Layout>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
