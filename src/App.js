import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import LionArtProducts from "./Pages/LionArtProducts";
import GirlArtProducts from "./Pages/GirlArtProducts";
import ElegantArtProducts from "./Pages/ElegantArtProducts";
import FlowingArtProducts from "./Pages/FlowingArtProducts";
import MickeyMouseArtProducts from "./Pages/MickeyMouseArtProducts";
import NatureArtProducts from "./Pages/NatureArtProducts";
import Artists from "./Pages/Artist Page/Artist";
import LionArtMug from "./Pages/LionProducts/LionMugArt";
import LionArtTshirt from "./Pages/LionProducts/LionArtTshirt";

import NavbarMenu from "./Pages/NavbarMenu";
import Cart from "./Pages/Cart";

import CheckoutLogin from "./Pages/CheckoutLogin";
import CheckoutAddress from "./Pages/CheckoutAddress";
import CheckoutPayment from "./Pages/CheckoutPayment";
import Footer from "./Pages/Footer";
import { CartProvider } from "./Pages/CartContext";
import { CheckoutProvider } from "./Pages/CheckoutContext";
import LionArtBag from "./Pages/LionProducts/LionArtBag";
import GirlArtMug from "./Pages/GirlProducts/GirlArtMug";
import GirlArtTshirt from "./Pages/GirlProducts/GirlArtTshirst";
import GirlArtBag from "./Pages/GirlProducts/GirlArtBag";
import FlowingArtMug from "./Pages/FlowingDoodles/FlowingArtMug";
import FlowingArtTshirt from "./Pages/FlowingDoodles/FlowingArtTshirt";
import FlowingArtBag from "./Pages/FlowingDoodles/FlowingArtBag";
import MickeyArtMug from "./Pages/MickeyMouse/MickeyArtMug";
import MickeyArtBag from "./Pages/MickeyMouse/MickeyArtBag";
import MickeyArtTshirt from "./Pages/MickeyMouse/MickeyArtTshirt";
import NatureArtBag from "./Pages/Nature/NatureArtBag";
import NatureArtMug from "./Pages/Nature/NatureArtMug";
import NatureArtTshirt from "./Pages/Nature/NatureArtTshirt";
import ElegantArtMug from "./Pages/Elegant/ElegantArtMug";
import ElegantArtTshirt from "./Pages/Elegant/ElegantArtTshirt";
import ElegantArtBag from "./Pages/Elegant/ElegantArtBag";
import ScrollToTop from "./Pages/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <CartProvider>
        <CheckoutProvider>
          <div className="app-layout">
            <NavbarMenu />

            <div className="app-content">
              <Routes>
                {/* HOME */}
                <Route path="/" element={<Home />} />

                {/* PRODUCTS */}
                {/* LION ART PRODUCTS */}
                <Route path="/lion-products" element={<LionArtProducts />} />

                {/* GIRL ART PRODUCTS */}
                <Route path="/girl-products" element={<GirlArtProducts />} />
                <Route
                  path="/flowing-products"
                  element={<FlowingArtProducts />}
                />
                <Route
                  path="/elegant-products"
                  element={<ElegantArtProducts />}
                />
                <Route
                  path="/mickeyMouse-products"
                  element={<MickeyMouseArtProducts />}
                />
                <Route
                  path="/nature-products"
                  element={<NatureArtProducts />}
                />

                {/* PRODUCT DETAIL */}
                <Route path="/lion-products/mug" element={<LionArtMug />} />

                <Route
                  path="/lion-products/tshirt"
                  element={<LionArtTshirt />}
                />

                <Route path="/lion-products/bag" element={<LionArtBag />} />

                <Route path="/girl-products/mug" element={<GirlArtMug />} />
                <Route
                  path="/girl-products/tshirt"
                  element={<GirlArtTshirt />}
                />

                <Route path="/girl-products/bag" element={<GirlArtBag />} />

                <Route
                  path="/flowingDoodle-products/mug"
                  element={<FlowingArtMug />}
                />

                <Route
                  path="/flowingDoodle-products/tshirt"
                  element={<FlowingArtTshirt />}
                />

                <Route
                  path="/flowingDoodle-products/bag"
                  element={<FlowingArtBag />}
                />

                <Route
                  path="/mickeyMouse-products/mug"
                  element={<MickeyArtMug />}
                />

                <Route
                  path="/mickeyMouse-products/tshirt"
                  element={<MickeyArtTshirt />}
                />

                <Route
                  path="/mickeyMouse-products/bag"
                  element={<MickeyArtBag />}
                />

                <Route path="/nature-products/mug" element={<NatureArtMug />} />

                <Route
                  path="/nature-products/tshirt"
                  element={<NatureArtTshirt />}
                />

                <Route path="/nature-products/bag" element={<NatureArtBag />} />

                <Route
                  path="/elegant-products/mug"
                  element={<ElegantArtMug />}
                />

                <Route
                  path="/elegant-products/tshirt"
                  element={<ElegantArtTshirt />}
                />

                <Route
                  path="/elegant-products/bag"
                  element={<ElegantArtBag />}
                />
                                <Route path="/artists" element={<Artists />} />

                {/* CART */}
                <Route path="/cart" element={<Cart />} />

                {/* ADDRESS */}
                <Route path="/address" element={<CheckoutAddress />} />

                {/* PAYMENT */}
                <Route path="/payment" element={<CheckoutPayment />} />
              </Routes>
            </div>

            <Footer />
          </div>
        </CheckoutProvider>
      </CartProvider>
    </HashRouter>
  );
}

export default App;
