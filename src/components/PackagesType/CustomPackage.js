import React from "react";
import "./PackagesType.scss";
import Label from "../Label";
import { Select, Button, Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getVoicesRequest } from "../../modules/voices/reducer";
import { addPackageRequest } from "../../modules/packages/reducer";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
};
const CustomPackage = () => {
  const dispatch = useDispatch();
  const allVoices = useSelector((state) => state.voices);
  const [custom, setCustom] = React.useState({});

  React.useEffect(() => {
    dispatch(getVoicesRequest());
  }, []);

  const handleCustomObj = ({ name, value }) => {
    setCustom({ ...custom, [name]: value });
  };

  const onFinish = ({ displayName, voices }) => {
    dispatch(addPackageRequest({ package: { displayName, voices, custom } }));
  };

  return (
    <>
      <Form
        name="custom-package"
        layout="vertical"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className="custom-package-wrapper"
      >
        <Form.Item
          name="displayName"
          label="Package Name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="voices"
          label="Voices"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Select Voices"
            options={allVoices?.voices.map((voice) => ({
              label: voice.privLocalName,
              value: voice.privShortName,
            }))}
          />
        </Form.Item>

        <Label title="Total Words" required={true} />
        <Input
          name="totalWords"
          type="number"
          onChange={(evt) => handleCustomObj(evt.target)}
        />
        <Label title="Words Per Month" required={true} />
        <Input
          name="wordsPerMonth"
          type="number"
          onChange={(evt) => handleCustomObj(evt.target)}
        />
        <Label title="Cost $" required={true} />
        <Input
          name="cost"
          type="number"
          onChange={(evt) => handleCustomObj(evt.target)}
        />
        <Label title="Expiry" required={true} />
        <Input
          name="expiryLimit"
          type="number"
          onChange={(evt) => handleCustomObj(evt.target)}
        />
        <Form.Item
          wrapperCol={{
            ...layout.wrapperCol,
            offset: 4,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add Package
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CustomPackage;
