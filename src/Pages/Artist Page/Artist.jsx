import React from "react";
import Button from "react-bootstrap/Button";
import HeaderBanner from "../../Images/HeaderBanner.png";
import About1 from "../../Images/About1.png";
import About2 from "../../Images/About2.png";
import About3 from "../../Images/About3.png";
import Art3 from "../../Images/Art3.jpg";
import Design1 from "../../Images/Design1.jpg";
import Design2 from "../../Images/Design2.jpg";
import Design3 from "../../Images/Design3.jpg";
import Design4 from "../../Images/Design4.jpg";
import Design5 from "../../Images/Design5.jpg";
import Design6 from "../../Images/Design6.jpg";
import ZeroCost from "../../Images/ZeroCost.png";
import { Modal, Form, Input, Tag, Button as AntButton, message } from "antd";
import { InstagramOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "../../App.css";
import Footer from "../Footer.jsx";

export default function Artists() {
  const navigate = useNavigate();
  const [artistForm] = Form.useForm();
  const [submittingArtist, setSubmittingArtist] = useState(false);
  const [openArtistForm, setOpenArtistForm] = useState(false);
  const [openArtistDetails, setOpenArtistDetails] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const GAS_URL =
    "https://script.google.com/macros/s/AKfycbxo59covQ7RZgwIbuSwitCaLl1dAO4MmSu5o-cih9ND-8PwP4AUqRbw6nt7WXc8530/exec";

  const artistsList = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Abstract Painter",
      image: Design1,
      tags: ["Abstract", "Acrylic", "Contemporary"],
      description:
        "Sarah specializes in vibrant abstract paintings that explore color theory and emotional expression. Her work has been featured in galleries across Europe and North America.",
      experience: "15 years",
    },
    {
      id: 2,
      name: "Rahul Verma",
      title: "Digital Artist",
      image: Design2,
      tags: ["Digital Art", "Portraits"],
      description:
        "Rahul creates stunning digital portraits blending realism with modern aesthetics.",
      experience: "10 years",
    },
    {
      id: 3,
      name: "Ananya Patel",
      title: "Traditional Indian Artist",
      image: Design3,
      tags: ["Madhubani", "Warli"],
      description:
        "Ananya preserves traditional Indian art forms through intricate hand-painted works.",
      experience: "12 years",
    },
  ];

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
            artistForm.resetFields();
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
      <style> {styl}</style>
      <div className="container-fluid m-0 p-0 ">
        <div className="container-fluid Homebannerbgcolor rounded-bottom-5">
          <div className="container">
            <div className="row  pt-3">
              {/* LEFT CONTENT */}
              <div className="col-12 col-lg-6 mt-3 mt-lg-5">
                <div className="row">
                  <div className="col-12">
                    <p className="Homebannertext1">Meet Our Featured Artists</p>
                    <p className="Homebannertext2">
                      Discover talented creators from across the globe, each
                      sharing their vision through extraordinary craft and
                      design.
                    </p>
                  </div>

                  {/* OWN DESIGN SECTION */}
                  <div className="col-11 Owndesignsection mt-4 p-3 p-lg-5">
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
              <h1>Our Featured Artists</h1>
              <p className="Easiesttext">
                Discover talented artists and their stunning creations
              </p>
            </div>
          </div>

          {/* CARDS */}
          <div className="row justify-content-between mt-4">
            {artistsList.map((artist) => (
              <div key={artist.id} className="col-12 col-lg-4 mb-4">
                <Card>
                  <img
                    src={artist.image}
                    className="img-fluid"
                    alt={artist.name}
                  />
                  <Card.Body>
                    <h2>{artist.name}</h2>

                    <Card.Text>
                      {artist.tags.map((tag, index) => (
                        <Tag
                          key={index}
                          color="purple"
                          className="me-2 mb-2"
                          style={{ fontSize: "14px", padding: "1px" }}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Card.Text>

                    <button
                      className="Selectdesignbutton p-2"
                      onClick={() => {
                        setSelectedArtist(artist);
                        setOpenArtistDetails(true);
                      }}
                    >
                      View Details
                    </button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>

          {/* CARDS */}
          <div className="row justify-content-between mt-4">
            {artistsList.map((artist) => (
              <div key={artist.id} className="col-12 col-lg-4 mb-4">
                <Card>
                  <img
                    src={artist.image}
                    className="img-fluid"
                    alt={artist.name}
                  />
                  <Card.Body>
                    <h2>{artist.name}</h2>

                    <Card.Text>
                      {artist.tags.map((tag, index) => (
                        <Tag
                          key={index}
                          color="purple"
                          className="me-2 mb-2"
                          style={{ fontSize: "14px" }}
                        >
                          {tag}
                        </Tag>
                      ))}
                    </Card.Text>

                    <button
                      className="Selectdesignbutton p-2"
                      onClick={() => {
                        setSelectedArtist(artist);
                        setOpenArtistDetails(true);
                      }}
                    >
                      View Details
                    </button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>

        <div className="container mt-5">
          <div className="row">
            <div className="col-12 text-lg-center">
              <h1>Why choose Artimitra?</h1>
              <p className="Easiesttext">
                Your art deserves the right audience
              </p>
            </div>

            <div className="row mt-4">
              {/* CARD 1 */}
              <div className="col-12 col-lg-4 mb-4">
                <div className=" h-100 d-flex flex-column align-items-center text-center p-3">
                  <img
                    src={ZeroCost}
                    className="img-fluid mb-3"
                    alt="Assortment Image"
                    style={{ maxWidth: "80px" }}
                  />
                  <h2>Zero Setup Cost</h2>
                  <p>
                    Start selling your art without any upfront investment. We
                    only succeed when your art sells.
                  </p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="col-12 col-lg-4 mb-4">
                <div className="h-100 d-flex flex-column align-items-center text-center p-3">
                  <img
                    src={ZeroCost}
                    className="img-fluid mb-3"
                    alt="Assortment Image"
                    style={{ maxWidth: "80px" }}
                  />
                  <h2>Hassle-Free Shipping</h2>
                  <p>
                    Reach art lovers across India with ease. We take care of
                    packaging, logistics, and safe delivery — so you can focus
                    on creating.
                  </p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="col-12 col-lg-4 mb-4">
                <div className=" h-100 d-flex flex-column align-items-center text-center p-3">
                  <img
                    src={ZeroCost}
                    className="img-fluid mb-3"
                    alt="Assortment Image"
                    style={{ maxWidth: "80px" }}
                  />
                  <h2>Direct Payouts</h2>
                  <p>
                    Get paid directly to your bank account. Transparent, secure,
                    and regular payout schedules.
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
              artistForm.resetFields();
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
                form={artistForm}
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
                    block
                    size="large"
                    loading={submittingArtist}
                    disabled={submittingArtist}
                      className="artist-submit-btn"

                 
                  >
                    {submittingArtist ? "Submitting..." : "Submit Application"}
                  </AntButton>
                </Form.Item>
              </Form>
            </div>
          </Modal>
        </div>

        <div className="mt-5">
          <Modal
            open={openArtistDetails}
            onCancel={() => setOpenArtistDetails(false)}
            footer={null}
            width={900}
            centered
            zIndex={3000}
          >
            {selectedArtist && (
              <div className="container-fluid">
                <div className="row align-items-start">
                  {/* LEFT IMAGE */}
                  <div className="col-md-4 text-center">
                    <img
                      src={selectedArtist.image}
                      alt={selectedArtist.name}
                      className="img-fluid rounded-4"
                    />
                  </div>

                  {/* RIGHT CONTENT */}
                  <div className="col-md-8">
                    <h2 className="fw-bold">{selectedArtist.name}</h2>
                    <h5 className="text-primary mb-3">
                      {selectedArtist.title}
                    </h5>

                    <div className="mb-3">
                      {selectedArtist.tags.map((tag, index) => (
                        <Tag key={index} color="purple" className="me-2">
                          {tag}
                        </Tag>
                      ))}
                    </div>

                    <p className="text-muted">{selectedArtist.description}</p>

                    <p className="fw-semibold">
                      Experience: {selectedArtist.experience}
                    </p>

                    <hr />

                    <h5 className="fw-semibold mb-3">
                      Connect with the Artist
                    </h5>

                    <div className="d-flex gap-3 flex-wrap">
                      <AntButton icon={<InstagramOutlined />}>
                        Instagram
                      </AntButton>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Modal>
        </div>
      </div>
    </>
  );
}
