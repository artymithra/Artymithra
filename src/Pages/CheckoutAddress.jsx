import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Select, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useCheckout } from "./CheckoutContext";
import { useCart } from "./CartContext";
import CheckoutBreadcrumbs from "./CheckoutBreadcrumbs";

const { Option } = Select;

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbyrBoW0qQ1vMEog2ZZwNo-KJKkXCqsFTA3vUvpfxii2iXId8aQzEHI0uLth1zJNMs4U/exec";

export default function CheckoutAddress() {
  const navigate = useNavigate();

  const { setBillingAddress, setShippingAddress } = useCheckout();
  const { cartItems, totalAmount } = useCart();

  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values) => {
    if (submitting) return;
    const billing = values.billing;
    const shipping = values.sameAsBilling
      ? values.billing
      : values.shipping;

    // Save to context (for later use)
    setBillingAddress(billing);
    setShippingAddress(shipping);

    // Safety checks
    if (!cartItems || cartItems.length === 0) {
      message.error("Your cart is empty");
      return;
    }

        setSubmitting(true);

    //  BACKEND SAVE HAPPENS HERE
    const formData = new URLSearchParams();
    formData.append("billing", JSON.stringify(billing));
    formData.append("shipping", JSON.stringify(shipping));
    formData.append("cartItems", JSON.stringify(cartItems));
    formData.append("totalAmount", totalAmount);

    try {
      const res = await fetch(GAS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const result = await res.json();

      if (!result.success) {
        message.error(result.error || "Failed to save order");
        setSubmitting(false);
        return;
      }

      message.success("Order saved successfully");

      // ✅ Navigate ONLY after backend save
      navigate("/payment");

    } catch (err) {
      console.error(err);
      message.error("Server error while saving order");
      setSubmitting(false);
    }
  };

  return (
    <div className="container-fluid m-0 p-0">
      <CheckoutBreadcrumbs />

      <div className="container mt-4">
        <h3>Add Address</h3>

        <Form layout="vertical" onFinish={onFinish}  disabled={submitting}>
          {/* ================= BILLING ================= */}
          <h5>Billing Address</h5>

          <Form.Item
            label="Phone Number"
            name={["billing", "phone"]}
            rules={[
              { required: true, message: "Please enter your phone number" },
              {
                pattern: /^[+]?[0-9]{10,15}$/,
                message: "Phone number can contain only numbers or +",
              },
            ]}
          >
            <Input placeholder="+91XXXXXXXXXX" />
          </Form.Item>

          <div className="row">
            <div className="col-md-6">
              <Form.Item
                label="First Name"
                name={["billing", "firstName"]}
                rules={[
                  { required: true, message: "Please enter your first name" },
                  {
                    pattern: /^[A-Za-z\s]+$/,
                    message: "Name should not contain numbers",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>

            <div className="col-md-6">
              <Form.Item
                label="Last Name"
                name={["billing", "lastName"]}
                rules={[
                  { required: true, message: "Please enter your last name" },
                  {
                    pattern: /^[A-Za-z\s]+$/,
                    message: "Name should not contain numbers",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
          </div>

          <Form.Item
            label="PIN Code"
            name={["billing", "pin"]}
            rules={[
              { required: true, message: "Please enter your PIN code" },
              {
                pattern: /^[0-9]{6}$/,
                message: "PIN code must be exactly 6 digits",
              },
            ]}
          >
            <Input maxLength={6} />
          </Form.Item>

          <Form.Item
            label="State"
            name={["billing", "state"]}
            rules={[{ required: true, message: "Please select your state" }]}
          >
            <Select placeholder="Select State">
              <Option value="Tamil Nadu">Tamil Nadu</Option>
              <Option value="Kerala">Kerala</Option>
              <Option value="Karnataka">Karnataka</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="District"
            name={["billing", "district"]}
            rules={[{ required: true, message: "Please enter your district" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Locality"
            name={["billing", "locality"]}
            rules={[{ required: true, message: "Please enter your locality" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Landmark"
            name={["billing", "landmark"]}
            rules={[{ required: true, message: "Please enter a landmark" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Full Address"
            name={["billing", "fullAddress"]}
            rules={[
              { required: true, message: "Please enter your full address" },
            ]}
          >
            <Input.TextArea rows={3} />
          </Form.Item>

          {/* SAME AS BILLING */}
          <Form.Item name="sameAsBilling" valuePropName="checked">
            <Checkbox>Shipping address same as billing</Checkbox>
          </Form.Item>

          {/* ================= SHIPPING ================= */}
          <Form.Item shouldUpdate>
            {({ getFieldValue }) =>
              !getFieldValue("sameAsBilling") && (
                <>
                  <h5>Shipping Address</h5>

                  <Form.Item
                    label="Phone Number"
                    name={["shipping", "phone"]}
                    rules={[
                      { required: true, message: "Enter shipping phone number" },
                      {
                        pattern: /^[+]?[0-9]{10,15}$/,
                        message:
                          "Phone number can contain only numbers or +",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="First Name"
                    name={["shipping", "firstName"]}
                    rules={[
                      { required: true, message: "Enter first name" },
                      {
                        pattern: /^[A-Za-z\s]+$/,
                        message: "Name should not contain numbers",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Last Name"
                    name={["shipping", "lastName"]}
                    rules={[
                      { required: true, message: "Enter last name" },
                      {
                        pattern: /^[A-Za-z\s]+$/,
                        message: "Name should not contain numbers",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="Full Address"
                    name={["shipping", "fullAddress"]}
                    rules={[
                      {
                        required: true,
                        message: "Please enter shipping address",
                      },
                    ]}
                  >
                    <Input.TextArea rows={3} />
                  </Form.Item>
                </>
              )
            }
          </Form.Item>

           <Button
            type="primary"
            htmlType="submit"
            loading={submitting}
            disabled={submitting}
          >
            {submitting ? "Saving..." : "Save Address & Proceed"}
          </Button>
        </Form>
      </div>
    </div>
  );
}
