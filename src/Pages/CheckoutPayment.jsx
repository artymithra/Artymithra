import React from "react";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import gpayQR from "../Images/gpay-qr.jpg";
import CheckoutBreadcrumbs from "./CheckoutBreadcrumbs";

export default function CheckoutPayment() {
  const navigate = useNavigate();
  const { totalAmount } = useCart();

  return (
    <div className="container-fluid m-0 p-0">
      <CheckoutBreadcrumbs />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#f5f5f5",
        }}
      >
        <Card style={{ width: 360, textAlign: "center" }}>
          <h3>Scan & Pay</h3>

          <div
            style={{
              background: "#B9976E",
              padding: "10px",
              borderRadius: "6px",
              marginBottom: "15px",
            }}
          >
            <p style={{ margin: 0, fontSize: 14, color:"#f5f4ef" }}>Pay Amount</p>
            <h2 style={{ margin: 0, color: " #f5f4ef" }}>
              ₹{totalAmount}
            </h2>
          </div>

          <img
            src={gpayQR}
            alt="Google Pay QR"
            style={{ width: 220, marginBottom: 15 }}
          />

          <p style={{ fontSize: 13, color: "#555" }}>
            Scan using <strong>Google Pay / PhonePe / Paytm</strong>
          </p>

          <p style={{ fontSize: 12, color: "#999" }}>
            Please enter the exact amount shown above
          </p>

          {/* <Button type="primary" size="large" disabled>
            Awaiting Payment
          </Button> */}

          <Button
            type="link"
            onClick={() => navigate("/")}
            style={{ marginTop: 10 }}
          >
            ← Back to Home
          </Button>
        </Card>
      </div>
    </div>
  );
}
