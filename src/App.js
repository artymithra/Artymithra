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
import RamarArtProducts from "./Pages/RamarArtProducts";
import PullaiyarArtProducts from "./Pages/PillaiyarArtProducts";
import KrishnarArtProducts from "./Pages/KrishnarArtProducts";
import KantaraArtProducts from "./Pages/KantaraArtProducts";
import RuturajArtProducts from "./Pages/RutuajArtProducts";
import RainArtProducts from "./Pages/RainArtProducts";
import RamarArtBag from "./Pages/RamarProducts/RamarArtBag";
import KrishnarArtBag from "./Pages/KrishnarProducts/KrishnarArtBag";
import PillaiyarArtBag from "./Pages/Pillaiyar Products/PillaiyarArtBag";
import KantaraArtBag from "./Pages/KantaraProducts/KantaraArtBag";
import RutuArtBag from "./Pages/RutuProducts/RutuArtBag";
import RamarArtMug from "./Pages/RamarProducts/RamarArtMug";
import RamarArtTshirt from "./Pages/RamarProducts/RamarArtTshirt";
import RamarArtFrame from "./Pages/RamarProducts/RamarArtFrame";
import RamarArtLamp from "./Pages/RamarProducts/RamarArtLamp";
import PillaiyarArtMug from "./Pages/Pillaiyar Products/PillaiyarArtMug";
import PillaiyarArtTshirt from "./Pages/Pillaiyar Products/PillaiyarArtTshirt";
import PillaiyarArtFrame from "./Pages/Pillaiyar Products/PillaiyarArtFrame";
import PillaiyarArtLamp from "./Pages/Pillaiyar Products/PillaiyarArtLamp";
import KrishnarArtMug from "./Pages/KrishnarProducts/KrishnarArtMug";
import KrishnarArtTshirt from "./Pages/KrishnarProducts/KrishnarArtTshirt";
import KrishnarArtFrame from "./Pages/KrishnarProducts/KrishnarArtFrame";
import KrishnarArtLamp from "./Pages/KrishnarProducts/KrishnarArtLamp";
import KantaraArtMug from "./Pages/KantaraProducts/KantaraArtMug";
import KantaraArtTshirt from "./Pages/KantaraProducts/KantaraArtTshirt";
import KantaraArtFrame from "./Pages/KantaraProducts/KantaraArtFrame";
import KantaraArtLamp from "./Pages/KantaraProducts/KantaraArtLamp";
import LionArtLamp from "./Pages/LionProducts/LionArtLamp";
import LionArtFrame from "./Pages/LionProducts/LionArtFrame";
import FlowingArtFrame from "./Pages/FlowingDoodles/FlowingArtFrame";
import FlowingArtLamp from "./Pages/FlowingDoodles/FlowingArtLamp";
import GirlArtLamp from "./Pages/GirlProducts/GirlArtLamp";
import GirlArtFrame from "./Pages/GirlProducts/GirlArtFrame";
import MickeyArtFrame from "./Pages/MickeyMouse/MickeyArtFrame";
import MickeyArtLamp from "./Pages/MickeyMouse/MickeyArtLamp";
import NatureArtFrame from "./Pages/Nature/NatureArtFrame";
import NatureArtLamp from "./Pages/Nature/NatureArtLamp";
import ElegantArtFrame from "./Pages/Elegant/ElegantArtFrame";
import ElegantArtLamp from "./Pages/Elegant/ElegantArtLamp";
import RutuArtMug from "./Pages/RutuProducts/RutuArtMug";
import RutuArtTshirt from "./Pages/RutuProducts/RutuArtTshirt";
import RutuArtFrame from "./Pages/RutuProducts/RutuArtFrame";
import RutuArtLamp from "./Pages/RutuProducts/RutuArtLamp";
import GirlRainArtBag from "./Pages/GirlRainProducts/GirlRainArtBag";
import GirlRainArtMug from "./Pages/GirlRainProducts/GirlRainArtMug";
import GirlRainArtTshirt from "./Pages/GirlRainProducts/GirlRainArtTshirt";
import GirlRainArtFrame from "./Pages/GirlRainProducts/GirlRainArtFrame";
import GirlRainArtLamp from "./Pages/GirlRainProducts/GirlRainArtLamp";

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

                <Route path="/ramar-products" element={<RamarArtProducts />} />

                <Route
                  path="/pillaiyar-products"
                  element={<PullaiyarArtProducts />}
                />

                <Route
                  path="/krishnar-products"
                  element={<KrishnarArtProducts />}
                />

                <Route
                  path="/kantara-products"
                  element={<KantaraArtProducts />}
                />

                <Route
                  path="/ruturaj-products"
                  element={<RuturajArtProducts />}
                />

                <Route path="/girlInRain-products" element={<RainArtProducts />} />

                {/* PRODUCT DETAIL */}
                <Route path="/lion-products/mug" element={<LionArtMug />} />

                <Route
                  path="/lion-products/tshirt"
                  element={<LionArtTshirt />}
                />
                <Route path="/lion-products/frame" element={<LionArtFrame />} />

                <Route path="/lion-products/lamp" element={<LionArtLamp />} />
                <Route path="/lion-products/bag" element={<LionArtBag />} />

                <Route path="/girl-products/mug" element={<GirlArtMug />} />
                <Route
                  path="/girl-products/tshirt"
                  element={<GirlArtTshirt />}
                />

                <Route path="/girl-products/bag" element={<GirlArtBag />} />
                <Route path="/girl-products/lamp" element={<GirlArtLamp />} />
                <Route path="/girl-products/frame" element={<GirlArtFrame />} />

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
                  path="/flowingDoodle-products/frame"
                  element={<FlowingArtFrame />}
                />

                <Route
                  path="/flowingDoodle-products/lamp"
                  element={<FlowingArtLamp />}
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
                  path="/mickeyMouse-products/frame"
                  element={<MickeyArtFrame />}
                />

                <Route
                  path="/mickeyMouse-products/lamp"
                  element={<MickeyArtLamp />}
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
                  path="/nature-products/frame"
                  element={<NatureArtFrame />}
                />
                <Route
                  path="/nature-products/lamp"
                  element={<NatureArtLamp />}
                />

                <Route
                  path="/elegant-products/mug"
                  element={<ElegantArtMug />}
                />

                <Route
                  path="/elegant-products/tshirt"
                  element={<ElegantArtTshirt />}
                />

                <Route
                  path="/elegant-products/frame"
                  element={<ElegantArtFrame />}
                />

                <Route
                  path="/elegant-products/lamp"
                  element={<ElegantArtLamp />}
                />

                <Route
                  path="/elegant-products/bag"
                  element={<ElegantArtBag />}
                />

                <Route path="/ramar-products/mug" element={<RamarArtMug />} />
                <Route path="/ramar-products/bag" element={<RamarArtBag />} />

                <Route
                  path="/ramar-products/frame"
                  element={<RamarArtFrame />}
                />
                <Route
                  path="/ramar-products/tshirt"
                  element={<RamarArtTshirt />}
                />
                <Route path="/ramar-products/lamp" element={<RamarArtLamp />} />
                <Route
                  path="/pillaiyar-products/bag"
                  element={<PillaiyarArtBag />}
                />
                <Route
                  path="/pillaiyar-products/mug"
                  element={<PillaiyarArtMug />}
                />

                <Route
                  path="/pillaiyar-products/frame"
                  element={<PillaiyarArtFrame />}
                />

                <Route
                  path="/pillaiyar-products/tshirt"
                  element={<PillaiyarArtTshirt />}
                />

                <Route
                  path="/pillaiyar-products/lamp"
                  element={<PillaiyarArtLamp />}
                />

                <Route
                  path="/krishnar-products/bag"
                  element={<KrishnarArtBag />}
                />

                <Route
                  path="/krishnar-products/mug"
                  element={<KrishnarArtMug />}
                />

                <Route
                  path="/krishnar-products/tshirt"
                  element={<KrishnarArtTshirt />}
                />

                <Route
                  path="/krishnar-products/lamp"
                  element={<KrishnarArtLamp />}
                />

                <Route
                  path="/krishnar-products/frame"
                  element={<KrishnarArtFrame />}
                />

                <Route
                  path="/kantara-products/bag"
                  element={<KantaraArtBag />}
                />

                <Route
                  path="/kantara-products/mug"
                  element={<KantaraArtMug />}
                />

                <Route
                  path="/kantara-products/tshirt"
                  element={<KantaraArtTshirt />}
                />

                <Route
                  path="/kantara-products/lamp"
                  element={<KantaraArtLamp />}
                />

                <Route
                  path="/kantara-products/frame"
                  element={<KantaraArtFrame />}
                />

                <Route path="/ruturaj-products/bag" element={<RutuArtBag />} />
                <Route path="/ruturaj-products/mug" element={<RutuArtMug />} />
                <Route path="/ruturaj-products/tshirt" element={<RutuArtTshirt />} />
                <Route path="/ruturaj-products/frame" element={<RutuArtFrame />} />
                <Route path="/ruturaj-products/lamp" element={<RutuArtLamp />} />


                <Route path="/girlInRain-products/bag" element={<GirlRainArtBag />} />
                <Route path="/girlInRain-products/mug" element={<GirlRainArtMug />} />
                <Route path="/girlInRain-products/tshirt" element={<GirlRainArtTshirt />} />
                <Route path="/girlInRain-products/frame" element={<GirlRainArtFrame />} />
                <Route path="/girlInRain-products/lamp" element={<GirlRainArtLamp />} />

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
