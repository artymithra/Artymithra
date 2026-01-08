import React from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "./CheckoutContext";
import Footer from "./Footer";
import CheckoutBreadcrumbs from "./CheckoutBreadcrumbs";

export default function Cart() {
  const { cartItems, totalAmount, removeFromCart } = useCart();
  const { user } = useCheckout();
  const navigate = useNavigate();
  if (cartItems.length === 0) {
    return (
      <div className="container-fluid text-center m-0 p-0">
        <CheckoutBreadcrumbs />

        <div className="container">
          <h3>Your cart is empty</h3>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid m-0 p-0">
      <CheckoutBreadcrumbs />

      <div className="container">
        <h3>Shopping Cart</h3>

        <div className="row mt-4">
          {/* LEFT */}
          <div className="col-lg-8">
            {cartItems.map((item) => (
              <div key={item.id} className="card mb-3 p-3">
                <div className="d-lg-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: "300px" }}
                  />

                  <div className="ms-3 flex-grow-1">
                    <h5>{item.name}</h5>
                    <p className="text-muted mb-1">
                      Product Code: <strong>{item.productCode}</strong>
                    </p>
                    <p className="mb-1">Price: ₹{item.price}</p>
                    <small>Qty: {item.qty}</small>
                  </div>

                  <button
                    className="btn btn-outline-danger mt-3 ms-3"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="col-lg-4">
            <div className="card p-4">
              <h5>Bill Details</h5>
              <hr />
              <p className="d-flex justify-content-between">
                <span>Total</span>
                <strong>₹{totalAmount}</strong>
              </p>

              {/* ✅ CHECKOUT LOGIC */}
              <button
                className="btn btn-warning w-100 mt-3"
                onClick={() => {
                  navigate("/address");
                }}
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
