import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "./CheckoutContext";

export default function CheckoutLogin() {
  const [mobile, setMobile] = useState("");
  const { setUser } = useCheckout();
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <h3>Sign in / Enter Details</h3>

      <input
        className="form-control mt-3"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />

      <button
        className="btn btn-warning mt-4"
        onClick={() => {
          setUser({ mobile });
          navigate("/address");
        }}
      >
        Continue
      </button>
    </div>
  );
}
