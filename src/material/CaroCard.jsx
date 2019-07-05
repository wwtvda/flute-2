import React, { Component } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
/* gambar */
import Sl1 from './img/sl1.png'
import Sl2 from './img/sl2.png'
import Sl3 from './img/sl3.png'
import Sl4 from './img/sl4.png'
import Sl5 from './img/sl5.png'
import Sl6 from './img/sl6.png'

export class CaroCard extends Component {
    state = {
        display: true,
        width: 1300
      };
      render() {
        const settings = {
          dots: true,
          infinite: true,
          speed: 500,
          autoplay: true,
          autoplayspeed: 900,
          slidesToShow: 4,
          slidesToScroll: 1
        };
        return (
          <div>
            <div
              style={{
                width: this.state.width + "px",
                display: this.state.display ? "block" : "none"
              }}
            >
              <Slider {...settings}>
                <div>
                  <a href="google.com">
                      <img src={Sl1} alt="Bappenas"/>
                  </a>
                </div>
                <div>
                    <a href="google.com">
                      <img src={Sl2} alt="Bappenas"/>
                    </a>
                </div>
                <div>
                    <a href="google.com">
                      <img src={Sl3} alt="Bappenas"/>
                    </a>
                </div>
                <div>
                    <a href="google.com">
                      <img src={Sl4} alt="Bappenas"/>
                    </a>
                </div>
                <div>
                    <a href="google.com">
                      <img src={Sl5} alt="Bappenas"/>
                    </a>
                </div>
                <div>
                    <a href="google.com">
                      <img src={Sl6} alt="Bappenas"/>
                    </a>
                </div>
              </Slider>
            </div>
          </div>
        );
      }
    }


export default CaroCard
