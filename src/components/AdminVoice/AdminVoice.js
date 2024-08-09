import React from "react";
import "./AdminVoice.scss";
// import { CardsHeader } from "../../common";
import { Button, Space, Table, Dropdown } from "antd";
import {
  DownOutlined,
  PlusCircleOutlined,
  EditFilled,
} from "@ant-design/icons";
const AdminVoice = () => {
  const userColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Voices",
      dataIndex: "voices",
      key: "voices",
      render: (text) => (
        <Dropdown
          menu={{
            items: text.map((_, i) => {
              return { label: _, key: _ };
            }),
          }}
        >
          <Button>
            <Space>
              Voices
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
      ),
    },
    {
      title: "Words",
      dataIndex: "words",
      key: "words",
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Expiry",
      dataIndex: "expiry",
      key: "expiry",
    },
    {
      title: "Subscriptions",
      dataIndex: "subscriptions",
      key: "subscriptions",
    },
    {
      title: "Payments",
      dataIndex: "payments",
      key: "payments",
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "x",
      render: () => <img src="/icons/edit.png" />,
      width: "5%",
    },
  ];
  const tableData = [
    {
      key: "1",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "2",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "3",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "4",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "5",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "6",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "6",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "6",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "6",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "6",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
    {
      key: "6",
      name: "Mike",
      voices: ["hello"],
      words: "2345",
      cost: "name:",
      expiry: "name:",
      subscriptions: "name",
      payments: "name",
    },
  ];
  return (
    <div className="voice-wrapper">
      {/* <CardsHeader /> */}
      <div className="new-voice">
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          size="large"
          className="btn-color"
        >
          Add New Voice
        </Button>
      </div>
      <div className="voice-table">
        <Table
          columns={userColumns}
          dataSource={tableData}
          pagination={{ pageSize: 10 }}
        />
      </div>
    </div>
  );
};
export default AdminVoice;
