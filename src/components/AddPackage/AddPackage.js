import React from "react";
import "./AddPackage.scss";
import { Card, Col, Row } from "antd";
// import CardsHeader from "../../common/CardsHeader/CardsHeader";
import CustomPackage from "../PackagesType/CustomPackage";
import OverallPackage from "../PackagesType/OverallPackage";

function AddPackage() {
  return (
    <div className="add-package-wrapper">
      {/* <CardsHeader /> */}
      <div className="half-space-cards">
        <Row gutter={16}>
          <Col span={12}>
            <Card title="Package">
              <OverallPackage />
            </Card>
          </Col>
          <Col span={12}>
            <Card title="Custom Package">
              <CustomPackage />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AddPackage;
