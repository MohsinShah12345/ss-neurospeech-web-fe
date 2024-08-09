import React from "react";
import "./Package.scss";
import { List } from "antd";
const Package = () => {
  const data = [
    "Pro",
    "Basic",
    "wordsPerDay  150",
    "wordsPerMonth 1200",
    "cost  $10",
    "expiryDays  30",
    "isActivated TRUE",
    "isDeleted FALSE",
  ];
  return (
    <div className="package-detail-package">
      <List
        size="large"
        dataSource={data}
        renderItem={(item) => <List.Item>{item}</List.Item>}
      />
    </div>
  );
};

export default Package;
