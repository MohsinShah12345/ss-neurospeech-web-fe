import React, { useState } from "react";
import "./PackagesType.scss";
import { useDispatch, useSelector } from "react-redux";
import Label from "../Label";
import { Switch, Select, Button, Form, Input, Divider } from "antd";
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

const OverallPackage = () => {
  const dispatch = useDispatch();
  const [monthlySection, setMonthlySection] = useState(false);
  const [biAnnualSection, setBiAnnualSection] = useState(false);
  const [lifeTimeSection, setLifeTimeSection] = useState(false);
  const [packageObj, setPackageObj] = useState({});
  const allVoices = useSelector((state) => state.voices);

  React.useEffect(() => {
    dispatch(getVoicesRequest());
  }, []);

  const handleObjUpdate = ({ name, value }, key) => {
    setPackageObj({
      ...packageObj,
      [key]: { ...packageObj[key], [name]: value },
    });
  };

  const onFinish = (values) => {
    const { displayName, voices } = values;
    dispatch(
      addPackageRequest({
        package: {
          displayName,
          voices,
          ...packageObj,
        },
      })
    );
  };
  return (
    <Form
      name="main-package"
      layout="vertical"
      onFinish={onFinish}
      validateMessages={validateMessages}
      className="main-package-wrapper"
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
      <div className="divider-section">
        <Divider orientation="left" plain>
          Monthly
        </Divider>
        <Switch
          checkedChildren="Enable"
          unCheckedChildren="Disable"
          style={{ width: "15%", marginLeft: "15px" }}
          defaultChecked={monthlySection}
          onChange={(checked) => {
            setMonthlySection(checked);
          }}
        />
      </div>
      <Label title="Total Words" required={true} />
      <Input
        name="totalWords"
        type="number"
        disabled={!monthlySection}
        onChange={(evt) => handleObjUpdate(evt.target, "monthly")}
      />
      <Label title="Words Per Month" required={true} />
      <Input
        name="wordsPerMonth"
        type="number"
        disabled={!monthlySection}
        onChange={(evt) => handleObjUpdate(evt.target, "monthly")}
      />
      <Label title="Cost" required={true} />
      <Input
        name="cost"
        type="number"
        disabled={!monthlySection}
        onChange={(evt) => handleObjUpdate(evt.target, "monthly")}
      />
      <Label title="Expiry" required={true} />
      <Input
        name="expiryLimit"
        type="number"
        disabled={!monthlySection}
        onChange={(evt) => handleObjUpdate(evt.target, "monthly")}
      />
      <div className="divider-section" style={{ marginTop: "3%" }}>
        <Divider orientation="left" plain>
          Bi-Annual
        </Divider>
        <Switch
          checkedChildren="Enable"
          unCheckedChildren="Disable"
          style={{ width: "15%", marginLeft: "15px" }}
          defaultChecked={biAnnualSection}
          onChange={(checked) => {
            setBiAnnualSection(checked);
          }}
        />
      </div>
      <Label title="Total Words" required={true} />
      <Input
        name="totalWords"
        type="number"
        disabled={!biAnnualSection}
        onChange={(evt) => handleObjUpdate(evt.target, "biAnnual")}
      />
      <Label title="Words Per Month" required={true} />
      <Input
        name="wordsPerMonth"
        type="number"
        disabled={!biAnnualSection}
        onChange={(evt) => handleObjUpdate(evt.target, "biAnnual")}
      />
      <Label title="Cost" required={true} />
      <Input
        name="cost"
        type="number"
        disabled={!biAnnualSection}
        onChange={(evt) => handleObjUpdate(evt.target, "biAnnual")}
      />
      <Label title="Expiry" required={true} />
      <Input
        name="expiryLimit"
        type="number"
        disabled={!biAnnualSection}
        onChange={(evt) => handleObjUpdate(evt.target, "biAnnual")}
      />
      <div className="divider-section" style={{ marginTop: "3%" }}>
        <Divider orientation="left" plain>
          Life Time
        </Divider>
        <Switch
          checkedChildren="Enable"
          unCheckedChildren="Disable"
          style={{ width: "15%", marginLeft: "15px" }}
          defaultChecked={lifeTimeSection}
          onChange={(checked) => {
            setLifeTimeSection(checked);
          }}
        />
      </div>
      <Label title="Total Words" required={true} />
      <Input
        name="totalWords"
        type="number"
        disabled={!lifeTimeSection}
        onChange={(evt) => handleObjUpdate(evt.target, "lifeTime")}
      />
      <Label title="Words Per Month" required={true} />
      <Input
        name="wordsPerMonth"
        type="number"
        disabled={!lifeTimeSection}
        onChange={(evt) => handleObjUpdate(evt.target, "lifeTime")}
      />
      <Label title="Cost" required={true} />
      <Input
        name="cost"
        type="number"
        disabled={!lifeTimeSection}
        onChange={(evt) => handleObjUpdate(evt.target, "lifeTime")}
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
  );
};

export default OverallPackage;
