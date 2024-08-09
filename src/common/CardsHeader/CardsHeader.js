import React from "react";
import "./CardsHeader.scss";
import { Card, Col, Row } from "antd";

function CardsHeader() {
  return (
    <div className="cards-header-wrapper">
      <div className="site-card-wrapper">
        <Row gutter={16}>
          <Col span={6}>
            <Card title="Card title" bordered={false} className="sky-blue-card">
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Card title"
              bordered={false}
              className="light-grey-card"
            >
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card title="Card title" bordered={false} className="sky-blue-card">
              Card content
            </Card>
          </Col>
          <Col span={6}>
            <Card
              title="Card title"
              bordered={false}
              className="light-grey-card"
            >
              Card content
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default CardsHeader;
