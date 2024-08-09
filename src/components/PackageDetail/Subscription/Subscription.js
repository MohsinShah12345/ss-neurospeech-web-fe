import React, { useState } from "react";
import { Button, Space, Table, Tag } from "antd";
import { SyncOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { getPackageSubscriptionsRequest } from "../../../modules/packages/reducer";
import "./Subscription.scss";

const columns = [
  {
    title: "Name",
    dataIndex: "firstName",
    key: "firstName",
    render: (text, record) => <a>{`${record.firstName} ${record.lastName}`}</a>,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Phone#",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  // {
  //   title: "Action",
  //   key: "action",
  //   render: (_, record) => (
  //     <Space size="middle">
  //       <a>Invite {record.name}</a>
  //       <a>Delete</a>
  //     </Space>
  //   ),
  // },
];

const Subscription = ({ packageId }) => {
  const dispatch = useDispatch();
  const subscribers = useSelector((state) => state.packages);

  const [showTable, setShowTable] = useState(false);

  return (
    <div className="package-subscription-wrapper">
      {showTable ? (
        <Table
          columns={columns}
          dataSource={subscribers.packageSubscriptions.subscribedBy}
          loading={subscribers.subscriptionLoading}
          pagination={{
            pageSize: 10,
          }}
        />
      ) : (
        <Button
          type="primary"
          icon={<SyncOutlined />}
          size="large"
          className="bg-color-black"
          onClick={() => {
            dispatch(
              getPackageSubscriptionsRequest({
                packageId,
                pageNo: 1,
              })
            );
            setShowTable(true);
          }}
        >
          Load Package's Subscription
        </Button>
      )}
    </div>
  );
};

export default Subscription;
