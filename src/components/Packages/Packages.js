import React, { useState } from "react";
import "./Packages.scss";
import { Link } from "react-router-dom";
import {
  getPackageDetailsRequest,
  deletePackageRequest,
} from "../../modules/packages/reducer";
import {
  PlusCircleOutlined,
  EditFilled,
  DeleteFilled,
  BuildOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Tag, Tabs, Space } from "antd";
import { getVoicesRequest } from "../../modules/voices/reducer";

function Packages() {
  const dispatch = useDispatch();
  const packages = useSelector((state) => state.packages);

  React.useEffect(() => {
    dispatch(getPackageDetailsRequest());
    dispatch(getVoicesRequest());
  }, []);

  const handleRowDelete = (id) => {
    dispatch(deletePackageRequest(id));
  };

  const packageColumns = [
    {
      title: "Name",
      dataIndex: "displayName",
      key: "displayName",
      render: (text) => <a className="name-link">{text}</a>,
    },
    {
      title: "Duration",
      dataIndex: "expiryLimit",
      key: "expiryLimit",
    },
    {
      title: "Words Per Month",
      dataIndex: "wordsPerMonth",
      key: "wordsPerMonth",
    },
    {
      title: "voices",
      key: "voices",
      dataIndex: "voices",
      render: (text, record) => (
        <>
          {text.map((voice, ind) => {
            return <Tag color="#82ACFF">{voice.toUpperCase()}</Tag>;
          })}
        </>
      ),
    },
    {
      title: "Cost",
      dataIndex: "cost",
      key: "cost",
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "x",
      render: (text) => (
        <Space size="middle">
          <Link to={`/admin/packages/${text._id}`}>
            {<img src="/icons/edit.png" />}
          </Link>
          {
            <img
              src="/icons/delete.png"
              onClick={() => handleRowDelete(text?._id)}
            />
          }
        </Space>
      ),
      width: "5%",
    },
  ];

  const subscriptionColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a className="name-link">{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 0 ? "#82ACFF" : "#82ACFF";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Edit",
      dataIndex: "",
      key: "x",
      render: () => {
        <img src="/icons/edit.png" />;
      },
      width: "5%",
    },
  ];
  const subscriptionData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "4",
      name: "Smith Bond",
      age: 20,
      address: "France No. 5 Square Market",
      tags: ["MERN", "Stack"],
    },
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
  ];
  return (
    <div className="packages-wrapper">
      <div className="new-package">
        <Link to={"/admin/add/package"}>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            size="large"
            className="bg-color-black"
          >
            Add New Package
          </Button>
        </Link>
      </div>
      <div className="package-table">
        <Tabs defaultActiveKey="1" type="card" className="tab-btns">
          <Tabs.TabPane
            tab={
              <span className="pkg-tab">
                {<img src="/icons/package.svg" className="pkg-icon" />}
                <span className="pkg-txt">Packages</span>
              </span>
            }
            key="1"
          >
            <Table
              className="pkg-table"
              columns={packageColumns}
              dataSource={packages?.packageDetails}
              loading={packages?.packagesloading}
              pagination={{
                pageSize: 10,
              }}
            />
          </Tabs.TabPane>
          <Tabs.TabPane
            tab={
              <span className="subscribe-tab">
                {<img src="/icons/subscribe.svg" className="subscribe-icon" />}
                <span className="sub-txt"> Subscriptions</span>
              </span>
            }
            key="2"
          >
            <Table
              className="subscribe-table"
              columns={subscriptionColumns}
              dataSource={subscriptionData}
              pagination={{
                pageSize: 10,
              }}
            />
          </Tabs.TabPane>
        </Tabs>
      </div>
    </div>
  );
}

export default Packages;
