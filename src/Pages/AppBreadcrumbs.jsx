import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

export default function AppBreadcrumbs() {
  const location = useLocation();

  const pathSnippets = location.pathname.split("/").filter(Boolean);

  /* ===============================
     LABELS (WHAT USER SEES)
     =============================== */
  const labelMap = {
    "lion-products": "Lion Products",
    "girl-products": "Girl Products",
    "flowingDoodle-products": "Flowing Doodle Products",
    "elegant-products": "Elegant Products",
    "mickeyMouse-products": "Mickey Mouse Products",
    "nature-products": "Nature Products",

    mug: "Mug",
    tshirt: "T-Shirt",
    cup: "Cup",
    cap: "Cap",
    bag: "Bag",
    bottle: "Bottle",
  };

  /* ===============================
     ROUTES (WHERE LINK SHOULD GO)
     =============================== */
  const routeMap = {
    "lion-products": "/lion-products",
    "girl-products": "/girl-products",
    "flowingDoodle-products": "/flowing-products", // 🔥 FIX
    "elegant-products": "/elegant-products",
    "mickeyMouse-products": "/mickeyMouse-products",
    "nature-products": "/nature-products",
  };

  const items = [
    {
      title: <Link to="/">Home</Link>,
    },
    ...pathSnippets.map((segment, index) => {
      const isLast = index === pathSnippets.length - 1;

      const target =
        routeMap[segment] ||
        `/${pathSnippets.slice(0, index + 1).join("/")}`;

      return {
        title: isLast ? (
          <span>{labelMap[segment] || segment}</span>
        ) : (
          <Link to={target}>{labelMap[segment] || segment}</Link>
        ),
      };
    }),
  ];


  return (
    <div className="container-fluid m-0 p-0 bg-light ">
      <Breadcrumb items={items} className="p-1 text-center"/>
    </div>
  );
}
