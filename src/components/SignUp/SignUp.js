import React from "react";
import "./SignUp.scss";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Carousel } from "antd";
import { signUpRequest } from "../../modules/auth/reducer";

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(signUpRequest(values));
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
    <div className="signUp-page">
      <div className="signUp-box">
        <div className="carousel-handler">
          <Carousel autoplay>
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
          name="signUp-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <p className="form-title">Neuro Speech</p>

          <p>Create Account</p>
          <div className="one-row">
            <Form.Item
              name="firstName"
              className="signup-name-fields"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="First Name" />
            </Form.Item>
            <Form.Item
              name="lastName"
              className="signup-name-fields"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input placeholder="Last Name" />
            </Form.Item>
          </div>
          <Form.Item
            name="email"
            rules={[
              { required: true, type: "email", message: "Email is not Valid" },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                len: 11,
              },
            ]}
          >
            <Input type="Number" placeholder="Phone #" />
          </Form.Item>
          <div className="one-row">
            <Form.Item name="city" className="signup-name-fields">
              <Input placeholder="City Name" />
            </Form.Item>
            <Form.Item name="country" className="signup-name-fields">
              <Input placeholder="Country Name" />
            </Form.Item>
          </div>
          <Form.Item name="address">
            <Input.TextArea placeholder="Address" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="signUp-form-button primary-color"
            >
              SignUp
            </Button>
          </Form.Item>
          <div className="already-account">
            Already have an account?{" "}
            <span className="login-link" onClick={() => navigate("/login")}>
              Log in here
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
