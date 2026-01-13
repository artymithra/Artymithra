import React from "react";
import instagram from "../Images/instagram.png";
import whatsapp from "../Images/whatsapp.png";
import twitter from "../Images/twitter.png";
import facebook from "../Images/facebook.png";

export default function Footer() {
  return (
    <div className="container-fluid  Homebannerbgcolor  rounded-top-5 mt-5 pt-5">
      <div className="row p-5">
        <div className="col-12 col-lg-3 Footertextcolor">
          <p>The commercial friend of every artist</p>
        </div>

        <div className="col-12 col-lg-3 Footertextcolor  d-flex flex-column align-items-lg-center">
          <div>
            <div className="col-12">
              <h5>SHOP</h5>
            </div>
            <div className="col-12 mt-4">
              <p className="fw-light">All Products</p>
            </div>
            <div className="col-12">
              <p className="fw-light">New Arrivals</p>
            </div>
            <div className="col-12">
              <p className="fw-light">Offers</p>
            </div>
            <div className="col-12">
              <p className="fw-light">Combo Zone</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3 Footertextcolor d-flex flex-column align-items-lg-center">
          <div>
            <div className="col-12">
              <h5>INFO</h5>
            </div>
            <div className="col-12 mt-4">
              <p className="fw-light">About Us</p>
            </div>
            <div className="col-12">
              <p className="fw-light">Company</p>
            </div>

            <div className="col-12">
              <p className="fw-light">Blog</p>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-3 Footertextcolor  d-flex flex-column align-items-lg-center">
          <div>
            <div className="col-12">
              <h5>SUPPORT</h5>
            </div>
            <div className="col-12 mt-4">
              <p className="fw-light">Terms & Conditions</p>
            </div>
            <div className="col-12">
              <p className="fw-light">Privacy Policy</p>
            </div>
            <div className="col-12">
              <p className="fw-light">Cancellation & Refund Policy</p>
            </div>
            <div className="col-12">
              <p className="fw-light">Shopping & Delivery Policy</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row Footersubdesigncolor p-3">
        <div className="col-12 col-lg-6 ">
          <div className="ms-lg-4">
            <p className="m-0 p-0 ">Copyright - 2026. All Rights Reserved</p>
          </div>
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-start justify-content-lg-end align-items-lg-center mt-3 mt-lg-0">
          <div className="d-flex gap-5">
            <img src={instagram} alt="Instagram" />
            <img src={whatsapp} alt="WhatsApp" />
            <img src={twitter} alt="Twitter" />
            <img src={facebook} alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}
