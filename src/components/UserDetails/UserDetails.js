import React, { useEffect, useState } from "react";
import "./UserDetails.scss";
import { useParams } from "react-router-dom";
import { Card, Col, Row, Space, Table, Tag, List } from "antd";
import CardsHeader from "../../common/CardsHeader/CardsHeader";
import { getUserRequest } from "../../modules/auth/reducer";
import { useDispatch, useSelector } from "react-redux";

function UserDetails() {
  const [userInfoValue, setUserInfoValue] = useState([]);
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserRequest(userId));
  }, [userId]);

  useEffect(() => {
    if (userData) {
      const { _id, ...rest } = userData;
      setUserInfoValue(Object.values(rest));
    }
  }, [userData]);

  const userProjectColumns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
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
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
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
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const userProjectData = [
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
  ];
  return (
    <div className="user-details-wrapper">
      <CardsHeader />
      <div className="user-details">
        <Row gutter={16}>
          <Col span={6}>
            <Card
              title="User Information"
              bordered={false}
              className="user-information"
            >
              <List
                size="large"
                dataSource={userInfoValue}
                renderItem={(item) => <List.Item>{item}</List.Item>}
              />
            </Card>
          </Col>
          <Col span={18}>
            <Card
              title="Payment History"
              bordered={false}
              className="user-payment-history"
            >
              H I S T O R Y
            </Card>
            {/* <Card title="Projects" bordered={false} className="user-projects"> */}
            <div className="user-projects">
              <h3>Projects</h3>
              <Table
                columns={userProjectColumns}
                dataSource={userProjectData}
                size="small"
                pagination={{
                  pageSize: 6,
                }}
              />
            </div>
            {/* </Card> */}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default UserDetails;
