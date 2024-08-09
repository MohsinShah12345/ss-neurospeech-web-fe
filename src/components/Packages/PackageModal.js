import React from "react";
import "./PackageModal.scss";
import { useDispatch } from "react-redux";
import {
  addPackageRequest,
  updatePackageRequest,
} from "../../modules/packages/reducer";
import { Modal, Button, Select, Form, Input, InputNumber } from "antd";

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
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const PackageModal = ({
  open,
  pkgId,
  title,
  voices,
  openState,
  renderKey,
  formValues,
}) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (renderKey) form.resetFields();
  }, []);

  const handleCancel = () => {
    openState(false);
  };

  const onFinish = (values) => {
    if (renderKey) {
      dispatch(addPackageRequest({ package: values }));
    } else {
      dispatch(
        updatePackageRequest({ packageId: pkgId, updatedPackage: values })
      );
    }
    openState(false);
  };

  return (
    <Modal title={title} open={open} className="package-modal-wrapper">
      <Form
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        fields={formValues}
        form={form}
        validateMessages={validateMessages}
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
        {/* <Form.Item
          name="wordsPerDay"
          label="Words Per Day"
          rules={[
            {
              //   type: "email",
              type: "number",
            },
          ]}
        >
          <InputNumber />
        </Form.Item> */}
        <Form.Item
          name="wordsPerMonth"
          label="Words Per Month"
          rules={[
            {
              type: "number",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name="voices" label="Voices">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Select Voices"
            options={voices.map((voice) => ({
              label: voice.privLocalName,
              value: voice.privShortName,
            }))}
          />
        </Form.Item>
        <Form.Item
          name="cost"
          label="Cost"
          rules={[
            {
              type: "number",
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
              type: "number",
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item className="submit-btn">
          <Button type="primary" htmlType="submit">
            {renderKey ? "Submit" : "Update"}
          </Button>
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default PackageModal;
