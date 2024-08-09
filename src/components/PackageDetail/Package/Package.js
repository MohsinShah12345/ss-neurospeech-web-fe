import React, { useState, useEffect } from "react";
import "./Package.scss";
import Label from "../../Label";
import { useDispatch, useSelector } from "react-redux";
import { getVoicesRequest } from "../../../modules/voices/reducer";
import {
  Select,
  Button,
  Form,
  Input,
  InputNumber,
  Spin,
  Switch,
  Divider,
} from "antd";
import {
  getSinglePackageRequest,
  updatePackageRequest,
} from "../../../modules/packages/reducer";

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

const Package = ({ packageId }) => {
  const dispatch = useDispatch();
  const allVoices = useSelector((state) => state.voices);
  const packageDetails = useSelector((state) => state.packages);

  const [packageObj, setPackageObj] = useState({});
  const [monthlySection, setMonthlySection] = useState(true);
  const [biAnnualSection, setBiAnnualSection] = useState(true);
  const [lifeTimeSection, setLifeTimeSection] = useState(true);

  useEffect(() => {
    dispatch(getVoicesRequest());
    dispatch(getSinglePackageRequest(packageId));
  }, []);

  useEffect(() => {
    setPackageObj(packageDetails.singlePackage);
  }, [packageDetails.singlePackage]);

  const onFinish = (values) => {
    dispatch(
      updatePackageRequest({
        packageId: packageId,
        updatedPackage: {
          displayName: values.displayName,
          voices: values.voices,
          custom: {
            totalWords: values.totalWords,
            wordsPerMonth: values.wordsPerMonth,
            cost: values.cost,
            expiryLimit: values.expiryLimit,
          },
        },
      })
    );
  };
  const onFinish2 = (values) => {
    const { displayName, voices, packageType, subscribedBy, ...rest } =
      packageObj;

    dispatch(
      updatePackageRequest({
        packageId: packageId,
        updatedPackage: {
          displayName: values.displayName,
          voices: values.voices,
          ...rest,
        },
      })
    );
  };

  const handleObjUpdate = ({ name, value }, key) => {
    setPackageObj({
      ...packageObj,
      [key]: { ...packageObj[key], [name]: value },
    });
  };

  return (
    <>
      {packageDetails.loading ? (
        <Spin />
      ) : packageDetails.singlePackage.custom ? (
        <Form
          initialValues={{
            displayName: packageDetails.singlePackage.displayName,
            totalWords: packageDetails.singlePackage.custom?.totalWords,
            wordsPerMonth: packageDetails.singlePackage.custom?.wordsPerMonth,
            voices: packageDetails.singlePackage.voices,
            cost: packageDetails.singlePackage.custom?.cost,
            expiryLimit: packageDetails.singlePackage.custom?.expiryLimit,
          }}
          name="update-package"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
          className="package-details-wrapper"
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
            name="totalWords"
            label="Number of Words"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="wordsPerMonth" label="Words Per Month">
            <InputNumber />
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
          <Form.Item
            name="cost"
            label="Cost $"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="expiryLimit"
            label="Expiry Limit in Days"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            wrapperCol={{
              ...layout.wrapperCol,
              offset: 4,
            }}
          >
            <Button type="primary" htmlType="submit">
              Update Package
            </Button>
          </Form.Item>
        </Form>
      ) : (
        <Form
          name="main-package"
          initialValues={{
            displayName: packageDetails.singlePackage.displayName,
            voices: packageDetails.singlePackage.voices,
          }}
          layout="vertical"
          onFinish={onFinish2}
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
              style={{ width: "15%", marginLeft: "15px" }}
              defaultChecked={packageDetails?.singlePackage?.monthly?.enable}
              onChange={(checked) => {
                setMonthlySection(checked);
                handleObjUpdate({ name: "enable", value: checked }, "monthly");
              }}
            />
          </div>
          <Label title="Total Words" required={true} />
          <Input
            name="totalWords"
            defaultValue={packageDetails.singlePackage?.monthly?.totalWords}
            type="number"
            disabled={!monthlySection}
            onChange={(evt) => handleObjUpdate(evt.target, "monthly")}
          />
          <Label title="Words Per Month" required={true} />
          <Input
            name="wordsPerMonth"
            defaultValue={packageDetails.singlePackage?.monthly?.wordsPerMonth}
            type="number"
            disabled={!monthlySection}
            onChange={(evt) => handleObjUpdate(evt.target, "monthly")}
          />
          <Label title="Cost" required={true} />
          <Input
            name="cost"
            defaultValue={packageDetails.singlePackage?.monthly?.cost}
            type="number"
            disabled={!monthlySection}
            onChange={(evt) => handleObjUpdate(evt.target, "monthly")}
          />
          <Label title="Expiry" required={true} />
          <Input
            name="expiryLimit"
            defaultValue={packageDetails.singlePackage?.monthly?.expiryLimit}
            type="number"
            disabled={!monthlySection}
            onChange={(evt) => handleObjUpdate(evt.target, "monthly")}
          />
          <div className="divider-section" style={{ marginTop: "3%" }}>
            <Divider orientation="left" plain>
              Bi-Annual
            </Divider>
            <Switch
              style={{ width: "15%", marginLeft: "15px" }}
              defaultChecked={packageDetails?.singlePackage?.biAnnual?.enable}
              onChange={(checked) => {
                setBiAnnualSection(checked);
                handleObjUpdate({ name: "enable", value: checked }, "biAnnual");
              }}
            />
          </div>
          <Label title="Total Words" required={true} />
          <Input
            name="totalWords"
            defaultValue={packageDetails.singlePackage?.biAnnual?.totalWords}
            type="number"
            disabled={!biAnnualSection}
            onChange={(evt) => handleObjUpdate(evt.target, "biAnnual")}
          />
          <Label title="Words Per Month" required={true} />
          <Input
            name="wordsPerMonth"
            defaultValue={packageDetails.singlePackage?.biAnnual?.wordsPerMonth}
            type="number"
            disabled={!biAnnualSection}
            onChange={(evt) => handleObjUpdate(evt.target, "biAnnual")}
          />
          <Label title="Cost" required={true} />
          <Input
            name="cost"
            defaultValue={packageDetails.singlePackage?.biAnnual?.cost}
            type="number"
            disabled={!biAnnualSection}
            onChange={(evt) => handleObjUpdate(evt.target, "biAnnual")}
          />
          <Label title="Expiry" required={true} />
          <Input
            name="expiryLimit"
            defaultValue={packageDetails.singlePackage?.biAnnual?.expiryLimit}
            type="number"
            disabled={!biAnnualSection}
            onChange={(evt) => handleObjUpdate(evt.target, "biAnnual")}
          />
          <div className="divider-section" style={{ marginTop: "3%" }}>
            <Divider orientation="left" plain>
              Life Time
            </Divider>
            <Switch
              style={{ width: "15%", marginLeft: "15px" }}
              defaultChecked={packageDetails?.singlePackage?.lifeTime?.enable}
              onChange={(checked) => {
                setLifeTimeSection(checked);
                handleObjUpdate({ name: "enable", value: checked }, "lifeTime");
              }}
            />
          </div>
          <Label title="Total Words" required={true} />
          <Input
            name="totalWords"
            defaultValue={packageDetails.singlePackage?.lifeTime?.totalWords}
            type="number"
            disabled={!lifeTimeSection}
            onChange={(evt) => handleObjUpdate(evt.target, "lifeTime")}
          />
          <Label title="Words Per Month" required={true} />
          <Input
            name="wordsPerMonth"
            defaultValue={packageDetails.singlePackage?.lifeTime?.wordsPerMonth}
            type="number"
            disabled={!lifeTimeSection}
            onChange={(evt) => handleObjUpdate(evt.target, "lifeTime")}
          />
          <Label title="Cost" required={true} />
          <Input
            name="cost"
            defaultValue={packageDetails.singlePackage?.lifeTime?.cost}
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
              Update Package
            </Button>
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default Package;
