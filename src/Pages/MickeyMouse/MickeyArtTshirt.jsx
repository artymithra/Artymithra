import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import MickeyTshirt from "../../Images/MickeyTshirt.png";

import { useCart } from "../CartContext";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import AppBreadcrumbs from "../AppBreadcrumbs";

const images = [MickeyTshirt, MickeyTshirt];

export default function MickeyArtTshirt() {
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const navigate = useNavigate();

  const prevImage = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // ✅ PRODUCT WITH PRODUCT CODE (SKU)
  const product = {
    id: "Tshirt-004",                 
    productCode: "MickeyMouseArt-Tshirt-004",
    name: "Mickey Mouse Art Pattern Tshirt",
    price: 600,
    image: MickeyTshirt,
  };

  return (
    <div className="container-fluid m-0 p-0">
      <AppBreadcrumbs />

      <div className="container">
        <div className="row align-items-start">

          {/* LEFT : IMAGE */}
          <div className="col-12 col-lg-6">
            <div className="bg-white rounded-4 p-3">
              <Carousel
                activeIndex={index}
                indicators={false}
                controls={false}
                interval={null}
              >
                {images.map((img, i) => (
                  <Carousel.Item key={i}>
                    <img
                      src={img}
                      className="d-block w-100 border border-3 border-dark rounded-2"
                      alt={`product-${i}`}
                      style={{ maxHeight: "320px", objectFit: "contain" }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>

            {/* THUMBNAILS */}
            <div className="d-flex align-items-center justify-content-center gap-3 mt-3">
              <button onClick={prevImage} className="thumb-arrow">‹</button>

              <div className="d-flex gap-3">
                {images.map((img, i) => (
                  <div
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`thumb-box ${index === i ? "active" : ""}`}
                  >
                    <img src={img} alt="thumb" />
                  </div>
                ))}
              </div>

              <button onClick={nextImage} className="thumb-arrow">›</button>
            </div>
          </div>

          {/* RIGHT : PRODUCT DETAILS */}
          <div className="col-12 col-lg-6 mt-4 mt-lg-0">
            <p className="fw-bold mb-1">Tshirt</p>

            <h2 className="fw-bold">
              Mickey Mouse Art Pattern Tshirt
            </h2>

            {/* ✅ PRODUCT CODE SHOWN */}
            <p className="text-muted">
              Product Code: <strong>{product.productCode}</strong>
            </p>

            <h3 className="mt-3">MRP ₹{product.price}</h3>
            <p>Inclusive of all taxes</p>

            {/* <div className="bg-dark text-white rounded-pill px-3 py-2 d-inline-block mt-2">
              45,083 People already bought this
            </div> */}

            {/* QUANTITY */}
            <div className="mt-4">
              <p className="fw-bold mb-2">Quantity</p>

              <div className="d-flex align-items-center gap-3">
                <button
                  className="btn btn-outline-dark"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                >
                  −
                </button>

                <span className="fw-bold fs-5">{quantity}</span>

                <button
                  className="btn btn-outline-dark"
                  onClick={() => setQuantity((q) => q + 1)}
                >
                  +
                </button>
              </div>
            </div>

            {/* ✅ BUY NOW (CORRECT WAY) */}
            <div className="mt-4">
            <button
              className="btn btn-warning w-100 mt-5 pt-2 py-2 fw-bold"
              onClick={() => {
                addToCart({
                  ...product,
                  qty: quantity, // ✅ quantity stored properly
                });
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
