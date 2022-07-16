import React from "react";
import ImgCarousel from "./components/carousel/ImgCarousel";
import Destinations from "./components/destinations/Destinations";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Selects from "./components/selects/Selects";
import Book from "./components/book/Book";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <Selects />
      <ImgCarousel />
      <Book />
      <Footer />
    </div>
  );
}

export default App;
