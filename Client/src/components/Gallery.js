import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import gal1 from "../Pictures/LandingPage/logobar1.jpg";
import gal2 from "../Pictures/LandingPage/logobar2.jpg";
import gal3 from "../Pictures/LandingPage/city1016.png";
import gal4 from "../Pictures/LandingPage/HPM.png";
import gal5 from "../Pictures/LandingPage/itpmediagroup.jpg";
import gal6 from "../Pictures/LandingPage/MVM.png";
import gal7 from "../Pictures/LandingPage/skynews.png";
import gal8 from "../Pictures/LandingPage/CNN.png";
import gal9 from "../Pictures/LandingPage/viola.jpg";
import gal10 from "../Pictures/LandingPage/admedai1.jpg";

//I have no Idea what I used this for but it isnt needed anymore. I think.

function Gallery() {
  return (
    <Carousel>
      <div>
        <img src={gal1} />
      </div>
      <div>
        <img src={gal2} />
      </div>
    </Carousel>
  );
}

export default Gallery;
