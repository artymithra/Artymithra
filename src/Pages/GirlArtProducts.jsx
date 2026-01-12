import React from "react";
import Button from "react-bootstrap/Button";
import HeaderBanner from "../Images/HeaderBanner.png";
import About1 from "../Images/About1.png";
import About2 from "../Images/About2.png";
import About3 from "../Images/About3.png";
import Art3 from "../Images/Art3.jpg";
import CoffeeCup from "../Images/Coffeecup.png";
import Tshirt from "../Images/Tshirt.png";
import Cap from "../Images/Cap.png";
import Bag from "../Images/Bag.png";
import Mug from "../Images/Mug.png";
import Bottle from "../Images/Bottle.png";
import Offerbanner from "../Images/Offerbanner.jpg";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";
import Footer from "./Footer";
import AppBreadcrumbs from "./AppBreadcrumbs";

export default function GirlArtProducts() {
  const navigate = useNavigate();

  return (
    <div className="container-fluid m-0 p-0 ">
      <AppBreadcrumbs />

      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-12 text-lg-center">
            <img
              src={Offerbanner}
              className="img-fluid "
              alt="Offer Banner"
            />
          </div>{" "}
        </div>
      </div>
      <div className="container">
        {/* TITLE */}
        <div className="row mt-5">
          <div className="col-12 text-lg-center">
            <h1>Choose your product</h1>
            <p className="Easiesttext">
              Select your favourite product to apply design
            </p>
          </div>
        </div>

        {/* CARDS */}
      

        {/* CARDS */}
        <div className="row justify-content-between mt-4">
          <div className="col-12 col-lg-4 mb-4">
            <Card className="border border-2 border-mutted">
              <img src={Tshirt} className="img-fluid" alt="Tshirt Image" />
              <Card.Body>
                <h2>Tshrit</h2>
                <Card.Text>Price: Rs.3000</Card.Text>
                <button
                  className="Selectdesignbutton p-2"
                  onClick={() => navigate("/girl-products/tshirt")}
                >
                  Select Product
                </button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <Card className="border border-2 border-mutted">
              <img src={Bag} className="img-fluid" alt="Bag Image" />
              <Card.Body>
                <h2>Bag</h2>
                <Card.Text>Price: Rs.3000</Card.Text>
                <button
                  className="Selectdesignbutton p-2"
                  onClick={() => navigate("/girl-products/bag")}
                >
                  Select Product
                </button>
              </Card.Body>
            </Card>
          </div>

          <div className="col-12 col-lg-4 mb-4">
            <Card className="border border-2 border-mutted">
              <img src={Mug} className="img-fluid" alt="Mug Image" />
              <Card.Body>
                <h2>Mug</h2>
                <Card.Text>Price: Rs.3000</Card.Text>
                <button
                  className="Selectdesignbutton p-2"
                  onClick={() => navigate("/girl-products/mug")}
                >
                  Select Product
                </button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
