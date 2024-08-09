import React from "react";
import "./PackageDetail.scss";
import { Row, Col, Card } from "antd";
import Package from "./Package/Package";
import Subscription from "./Subscription";
import { CardsHeader } from "../../common";
import { useParams } from "react-router-dom";

const PackageDetail = () => {
  const params = useParams();
  return (
    <div className="packages-details-wrapper">
      <CardsHeader />
      <Row gutter={16} className="package-subscription">
        <Col span={7}>
          <Card title="Package" className="package-col">
            <Package packageId={params.packageId} />
          </Card>
        </Col>
        <Col span={17}>
          <Card title="Subscriptions" className="subscription-col">
            <Subscription packageId={params.packageId} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default PackageDetail;
