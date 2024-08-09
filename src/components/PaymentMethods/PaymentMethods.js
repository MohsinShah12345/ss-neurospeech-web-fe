import React from "react";
import "./PaymentMethods.scss";
import { Card } from "antd";

function PaymentMethods() {
  return (
    <div className="payment-methods-wrapper">
      <Card title="Stripe Info" className="card-height"></Card>
      <Card title="PayPal Info" className="card-height mt-1"></Card>
    </div>
  );
}

export default PaymentMethods;
