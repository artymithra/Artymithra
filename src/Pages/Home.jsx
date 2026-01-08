import React from "react";
import Button from "react-bootstrap/Button";
import HeaderBanner from "../Images/HeaderBanner.png";
import About1 from "../Images/About1.png";
import About2 from "../Images/About2.png";
import About3 from "../Images/About3.png";
import Art3 from "../Images/Art3.jpg";
import Design1 from "../Images/Design1.jpg";
import Design2 from "../Images/Design2.jpg";
import Design3 from "../Images/Design3.jpg";
import Design4 from "../Images/Design4.jpg";
import Design5 from "../Images/Design5.jpg";
import Design6 from "../Images/Design6.jpg";

import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";
import Footer from "./Footer";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid m-0 p-0 ">
      <div className="container-fluid Homebannerbgcolor rounded-bottom-5">
        <div className="row  pt-3">
          {/* LEFT CONTENT */}
          <div className="col-12 col-lg-6 mt-3 mt-lg-0">
            <div className="row">
              <div className="col-12">
                <p className="Homebannertext1">
                  Transforming Imagination into Digital Masterpieces
                </p>
                <p className="Homebannertext2">
                  Explore our unique collection of digital art created by
                  talented artists worldwide.
                </p>
              </div>

              {/* BUTTONS */}
              <div className="col-12 d-lg-flex mt-4">
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                  <button className="Learnmorebutton p-1">Learn More</button>
                </div>

                <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                  <button className="Artbutton p-2">Add Art</button>
                </div>
              </div>

              {/* OWN DESIGN SECTION */}
              <div className="col-11 Owndesignsection mt-4 p-3 p-lg-5 ms-lg-5 ms-3">
                <div className="col-12 text-center">
                  <p className="Owndesigntext">Create Your Own Design</p>
                </div>

                <div className="col-12 d-flex justify-content-center">
                  <button className="Clicknowbutton p-2">Click Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-12 col-lg-6 mt-3 mt-lg-0  d-flex justify-content-center align-items-center Bannerimage">
            <img src={HeaderBanner} className="img-fluid" alt="Header Banner" />
          </div>
        </div>
      </div>

      <div className="container mt-5">
        {/* TITLE */}
        <div className="row">
          <div className="col-12 text-lg-center">
            <h1>Best Selling Artworks</h1>
            <p className="Easiesttext">
              Easiest way to healthy life by buying your favorite plants
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="row justify-content-between mt-4">
          <div className="col-12 col-lg-4 mb-4">
            <Card>
              <img src={Design1} className="img-fluid" alt="Art 3 Image" />
              <Card.Body>
                <h2>Lion Art</h2>
                <Card.Text>Price: Rs.3000</Card.Text>
                <button
                  className="Selectdesignbutton p-2"
                  onClick={() => navigate("/lion-products")}
                >
                  {" "}
                  Select Product
                </button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <Card>
              <img src={Design2} className="img-fluid" alt="Art 3 Image" />
              <Card.Body>
                <h2>Girl Art</h2>
                <Card.Text>Price: Rs.3000</Card.Text>
                <button
                  className="Selectdesignbutton p-2"
                  onClick={() => navigate("/girl-products")}
                >
                  Select Product
                </button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <Card>
              <img src={Design3} className="img-fluid" alt="Art 3 Image" />
              <Card.Body>
                <h2>Flowing Doodles Art </h2>
                <Card.Text>Price: Rs.3000</Card.Text>
                <button
                  className="Selectdesignbutton p-2"
                  onClick={() => navigate("/flowing-products")}
                >
                  Select Product
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* CARDS */}
        <div className="row justify-content-between mt-4">
          <div className="col-12 col-lg-4 mb-4">
            <Card>
              <img src={Design4} className="img-fluid" alt="Art 3 Image" />
              <Card.Body>
                <h2>Mickey Mouse Art</h2>
                <Card.Text>Price: Rs.3000</Card.Text>
                <button
                  className="Selectdesignbutton p-2"
                  onClick={() => navigate("/mickeyMouse-products")}
                >
                  Select Product
                </button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <Card>
              <img src={Design5} className="img-fluid" alt="Art 3 Image" />
              <Card.Body>
                <h2>Nature Art</h2>
                <Card.Text>Price: Rs.3000</Card.Text>
                <button
                  className="Selectdesignbutton p-2"
                  onClick={() => navigate("/nature-products")}
                >
                  Select Product
                </button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <Card>
              <img src={Design6} className="img-fluid" alt="Art 3 Image" />
              <Card.Body>
                <h2>Elegant Art</h2>
                <Card.Text>Price: Rs.3000</Card.Text>
                <button
                  className="Selectdesignbutton p-2"
                  onClick={() => navigate("/elegant-products")}
                >
                  Select Product
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-12 text-lg-center">
            <h1>About us</h1>
            <p className="Easiesttext">
              Order now and appreciate the beauty of nature
            </p>
          </div>

          <div className="row mt-4">
            {/* CARD 1 */}
            <div className="col-12 col-lg-4 mb-4">
              <div className=" h-100 d-flex flex-column align-items-center text-center p-3">
                <img
                  src={About3}
                  className="img-fluid mb-3"
                  alt="Assortment Image"
                  style={{ maxWidth: "80px" }}
                />
                <h2>Large Assortment</h2>
                <p>
                  We offer many different types of products with fewer
                  variations in each category.
                </p>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-12 col-lg-4 mb-4">
              <div className="h-100 d-flex flex-column align-items-center text-center p-3">
                <img
                  src={About2}
                  className="img-fluid mb-3"
                  alt="Assortment Image"
                  style={{ maxWidth: "80px" }}
                />
                <h2>Fast & Free Shipping</h2>
                <p>
                  4-day or less delivery time, free shipping and an expedited
                  delivery option.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-12 col-lg-4 mb-4">
              <div className=" h-100 d-flex flex-column align-items-center text-center p-3">
                <img
                  src={About1}
                  className="img-fluid mb-3"
                  alt="Assortment Image"
                  style={{ maxWidth: "80px" }}
                />
                <h2>24/7 Support</h2>
                <p>
                  Answers to any business related inquiry 24/7 and in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
