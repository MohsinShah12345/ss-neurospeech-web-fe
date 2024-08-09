import React, { useEffect } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import AclService from "../../routing/AClServices";
import { useDispatch, useSelector } from "react-redux";
import { signInRequest } from "../../modules/auth/reducer";
import { Form, Input, Button, Checkbox, Carousel } from "antd";

const Login = () => {
  const dispatch = useDispatch();
  const loginState = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginState.isLoggedIn) {
      const aclService = new AclService(
        loginState.userData.data.user.role.toLowerCase()
      );
      navigate(aclService.userAccess.landingUrl);
    }
  }, [loginState.isLoggedIn]);

  const onFinish = (values) => {
    dispatch(signInRequest(values));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const contentStyle = {
    height: "75vh", //537px
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="carousel-handler">
          <Carousel>
            <div>
              <img src="images/pic1.png" alt="pic-1" style={contentStyle} />
            </div>
            <div>
              <img src="images/pic2.jpg" alt="pic-2" style={contentStyle} />
            </div>
            <div>
              <img src="images/pic3.jpg" alt="pic-3" style={contentStyle} />
            </div>
            <div>
              <img src="images/pic4.jpg" alt="pic-4" style={contentStyle} />
            </div>
          </Carousel>
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Neuro Speech</p>

          <p>Login to the Dashboard</p>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input your E-mail!" }]}
          >
            <Input placeholder="Email" style={{ height: "50px" }} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            className="checkbox-color"
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button primary-color"
            >
              LOGIN
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
