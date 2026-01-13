import React from "react";
import Button from "react-bootstrap/Button";
import HeaderBanner from "../Images/HeaderBanner.png";
import About1 from "../Images/About1.png";
import About2 from "../Images/About2.png";
import About3 from "../Images/About3.png";
import Art3 from "../Images/Art3.jpg";
import Design1 from "../Images/LionArt.jpg";
import Design2 from "../Images/GirlArt.jpg";
import Design3 from "../Images/FlowingArt.jpg";
import Design4 from "../Images/MickeyArt.jpg";
import Design5 from "../Images/NatureArt.jpg";
import Design6 from "../Images/ElegantArt.jpg";
import Design7 from "../Images/RamarArt.jpg";
import Design8 from "../Images/PillaiyarArt.jpg";
import Design9 from "../Images/KrishnarArt.jpg";
import Design10 from "../Images/KantaraArt.jpg";
import Design11 from "../Images/RutuArt.jpg";
import Design12 from "../Images/GirlInRainArt.jpg";


import { Modal, Form, Input, Tag, Button as AntButton, message } from "antd";
import { InstagramOutlined } from "@ant-design/icons";

import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../App.css";
import Footer from "./Footer";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [openArtistForm, setOpenArtistForm] = useState(false);
  const [submittingArtist, setSubmittingArtist] = useState(false);

  const [artistHomeForm] = Form.useForm();
  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbxo59covQ7RZgwIbuSwitCaLl1dAO4MmSu5o-cih9ND-8PwP4AUqRbw6nt7WXc8530/exec";
  const submitArtistDetails = async (values) => {
    if (submittingArtist) return;

    setSubmittingArtist(true);
    try {
      const formData = new URLSearchParams();
      formData.append("action", "artist_details");
      formData.append("email", values.email || "");
      formData.append("phone", values.phone || "");
      formData.append("website", values.website || "");
      formData.append("instagram", values.instagram || "");
      formData.append("pinterest", values.pinterest || "");

      const response = await fetch(GAS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData.toString(),
      });

      const result = await response.json();

      if (result.success) {
        message.success({
          content: "Artist details submitted successfully!",
          duration: 3,
        });
        artistHomeForm.resetFields();
        setOpenArtistForm(false);
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setSubmittingArtist(false);
    }
  };
  const styl = `
.ant-modal .ant-modal-close {
    position: absolute;
    top: calc((calc(calc(var(--ant-line-height-heading-5) * var(--ant-font-size-heading-5)) + calc(var(--ant-padding) * 2)) - var(--ant-control-height)) / 2);
    inset-inline-end: calc((calc(calc(var(--ant-line-height-heading-5) * var(--ant-font-size-heading-5)) + calc(var(--ant-padding) * 2)) - var(--ant-control-height)) / 2);
    z-index: calc(var(--ant-z-index-popup-base) + 10);
    padding: 0;
    color: #fff;
    font-weight: var(--ant-font-weight-strong);
    line-height: 1;
    text-decoration: none;
    background: #dc3545;
    border-radius: var(--ant-border-radius-sm);
    width: var(--ant-control-height);
    height: var(--ant-control-height);
    border: 0;
    outline: 0;
    cursor: pointer;
    transition: color var(--ant-motion-duration-mid), background-color var(--ant-motion-duration-mid);
}

.ant-modal .ant-modal-close:hover {
    color: var(--ant-color-icon-hover);
    background-color: #dc3545;
    color: #ffff;
}  
`;
  return (
    <>
      {" "}
      <style> {styl}</style>
      <div className="container-fluid m-0 p-0 ">
        <div className="container-fluid Homebannerbgcolor rounded-bottom-5">
          <div className="container">
            <div className="row  pt-3">
              {/* LEFT CONTENT */}
              <div className="col-12 col-lg-6 mt-3 mt-lg-0">
                <div className="row">
                  <div className="col-12">
                    <p className="Homebannertext1">
                      The commercial friend of every artist
                    </p>
                    {/* <p className="Homebannertext2">
                      Explore our unique collection of digital art created by
                      talented artists worldwide.
                    </p> */}
                  </div>

                  {/* BUTTONS */}
                  {/* <div className="col-12 d-lg-flex mt-4">
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <button className="Learnmorebutton p-1">
                        Learn More
                      </button>
                    </div>

                    <div className="col-12 col-lg-6 d-flex justify-content-center mt-4 mt-lg-0">
                      <button className="Artbutton p-2">Add Art</button>
                    </div>
                  </div> */}

                  {/* OWN DESIGN SECTION */}
                  {/* <div className="col-11 Owndesignsection mt-4 p-3 p-lg-5">
                  <div className="col-12 text-center">
                    <p className="Owndesigntext">Create Your Own Design</p>
                  </div>

                  <div className="col-12 d-flex justify-content-center">
                    <button className="Clicknowbutton p-2">Click Now</button>
                  </div>
                </div> */}

                  <div className="col-11 Owndesignsection mt-4 p-3 p-lg-5 mb-5">
                    <div className="col-12 ">
                      <p className="Owndesigntext">
                        Put up your art, set your own price, and sell your
                        products.
                      </p>
                    </div>

                    <div className="col-12 d-flex justify-content-center">
                      <button
                        className="Clicknowbutton p-2"
                        onClick={() => setOpenArtistForm(true)}
                      >
                        I'm an Artist
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="col-12 col-lg-6 mt-3 mt-lg-0  d-flex justify-content-center align-items-center Bannerimage">
                <img
                  src={HeaderBanner}
                  className="img-fluid"
                  alt="Header Banner"
                />
              </div>
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
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/lion-products")}
                  >
                    {" "}
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design2} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Girl Art</h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/girl-products")}
                  >
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design3} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Flowing Doodles Art </h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/flowing-products")}
                  >
                    Select Art
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
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/mickeyMouse-products")}
                  >
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design5} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Nature Art</h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/nature-products")}
                  >
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design6} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Elegant Art</h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/elegant-products")}
                  >
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design7} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Ramar Art</h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/ramar-products")}
                  >
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design8} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Pillaiyar Art</h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/pillaiyar-products")}
                  >
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design9} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Krishnar Art</h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/krishnar-products")}
                  >
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design10} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Kantara Art</h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/kantara-products")}
                  >
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design11} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Ruturaj Art</h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/ruturaj-products")}
                  >
                    Select Art
                  </button>
                </Card.Body>
              </Card>
            </div>

            
            <div className="col-12 col-lg-4 mb-4">
              <Card>
                <img src={Design12} className="img-fluid" alt="Art 3 Image" />
                <Card.Body>
                  <h2>Girl In Rain Art</h2>
                  <Card.Text>Starting at Rs.600</Card.Text>
                  <button
                    className="Selectdesignbutton p-2"
                    onClick={() => navigate("/girlInRain-products")}
                  >
                    Select Art
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
                    Answers to any business related inquiry 24/7 and in
                    real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <Modal
            open={openArtistForm}
            onCancel={() => {
              setOpenArtistForm(false);
              artistHomeForm.resetFields();
            }}
            footer={null}
            zIndex={2000}
            centered
            bodyStyle={{ padding: 0 }}
          >
            {/* HEADER */}
            <div>
              <h2>Artist Sign-up</h2>
            </div>

            {/* FORM BODY */}
            <div style={{ padding: 5 }}>
              <p style={{ color: "#666", marginBottom: 24 }}>
                Join our community of talented artists and start selling your
                artwork today!
              </p>

              <Form
                form={artistHomeForm}
                layout="vertical"
                onFinish={submitArtistDetails}
                disabled={submittingArtist}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Enter a valid email" },
                  ]}
                >
                  <Input placeholder="your@email.com" />
                </Form.Item>

                <Form.Item
                  label="Phone Number (Optional)"
                  name="phone"
                  rules={[
                    {
                      pattern: /^[+\-\d\s]+$/,
                      message:
                        "Phone number can contain only +, -, spaces, and numbers",
                    },
                    {
                      min: 7,
                      message: "Phone number must be at least 7 digits",
                    },
                    {
                      max: 15,
                      message: "Phone number cannot exceed 15 digits",
                    },
                  ]}
                >
                  <Input placeholder="+91 1234567890" />
                </Form.Item>

                <Form.Item
                  label="Website (Optional)"
                  name="website"
                  rules={[
                    {
                      type: "url",
                      message:
                        "Please enter a valid website URL (include https://)",
                    },
                  ]}
                >
                  <Input
                    placeholder="https://yourwebsite.com"
                    onBlur={(e) => {
                      const value = e.target.value;
                      if (value && !value.startsWith("http")) {
                        e.target.value = `https://${value}`;
                      }
                    }}
                  />
                </Form.Item>

                <Form.Item label="Instagram (Optional)" name="instagram">
                  <Input
                    prefix={<InstagramOutlined />}
                    placeholder="@yourusername"
                  />
                </Form.Item>

                <Form.Item label="Pinterest (Optional)" name="pinterest">
                  <Input placeholder="@yourusername" />
                </Form.Item>

                <Form.Item>
                  <AntButton
                    type="primary"
                    htmlType="submit"
                    loading={submittingArtist}
                    disabled={submittingArtist}
                    block
                    size="large"
                    className="artist-submit-btn"
                  >
                    {submittingArtist ? "Submitting..." : "Submit Application"}
                  </AntButton>
                </Form.Item>
              </Form>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}
