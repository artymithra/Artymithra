import React from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";

export default function CheckoutBreadcrumbs() {
  const { pathname } = useLocation();

  const steps = [
    { label: "Cart", path: "/cart" },
    { label: "Address", path: "/address" },
    { label: "Payment", path: "/payment" },
  ];

  // Find current step index
  const currentIndex = steps.findIndex(
    (step) => step.path === pathname
  );

  // Show only steps up to current page
  const visibleSteps =
    currentIndex >= 0 ? steps.slice(0, currentIndex + 1) : [];

  return (
    <div className="container-fluid m-0 p-0 bg-light ">
    <Breadcrumb className="p-1">
      {visibleSteps.map((step, index) => {
        const isActive = index === visibleSteps.length - 1;

        return (
          <Breadcrumb.Item key={step.path}>
            <span
              style={{
                fontWeight: isActive ? 600 : 400,
                color: isActive ? "#000" : "#777",
                cursor: "default",
              }}
            >
              {step.label}
            </span>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
    </div>
  );
}
