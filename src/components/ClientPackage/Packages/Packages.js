import React, { useEffect } from "react";
import "./Pacakges.scss";
import Package from "./Package";
import { Card, Row } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getPackageDetailsRequest } from "../../../modules/packages/reducer";

const Packages = () => {
  const dispatch = useDispatch();

  const { packageDetails: availablePackages = [] } = useSelector(
    (state) => state.packages
  ); // if packageDetails are present then assign to availablePackages if not then assign [] array

  useEffect(() => {
    dispatch(getPackageDetailsRequest());
  }, [dispatch]); // here we pass actions as a dependency array to avoid warning

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title="Packages"
        bordered={false}
        style={{
          width: "100%",
          height: "auto",
          marginTop: "10px",
        }}
      >
        <Row gutter={16}>
          {availablePackages?.map((pkg, i) => (
            <Package key={i} data={pkg} />
          ))}
        </Row>
      </Card>
    </div>
  );
};

export default Packages;
