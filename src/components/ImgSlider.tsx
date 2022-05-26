import { ClassType, Component, ReactNode } from "react"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline"

const Carousel = styled(Slider)`
  margin-top: 20px;
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(149, 158, 171);
    }

    &:hover:not(.slick-active button) {
      opacity: 0.25;
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: visible;
  }
  .slick-arrow {
    z-index: 1;
    width: 40px;
    height: 40px;
  }
  .slick-prev {
    opacity: 0;
  }
  .slick-prev:hover {
    opacity: 1;
  }

  .slick-prev::before,
  .slick-next::before {
    display: none;
  }

  button {
    z-index: 1;
  }
`
const Wrap = styled.div`
  cursor: pointer;
  img {
    border: 4px solid transparent;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    box-shadow: rgb(0 0 0/ 69%) 0px 26px 30px -10px,
      rgb(0 0 0/ 73%) 0px 16px 10px -10px;
    transition-duration: 300ms;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`

const PreviousBtn = (props: any) => {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}>
      <ChevronLeftIcon style={{ color: "white" }} />
    </div>
  )
}

const NextBtn = (props: any) => {
  const { className, onClick } = props
  console.log(className)
  return (
    <div className={className} onClick={onClick}>
      <ChevronRightIcon style={{ color: "white" }} />
    </div>
  )
}

function ImgSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: <PreviousBtn />,
    nextArrow: <NextBtn />,
    appendDots: (dots: ReactNode) => (
      <div style={{ height: "80px" }}>
        <ul
          style={{
            display: "flex",
            justifyContent: "right",
            marginRight: "20px"
          }}
        >
          {" "}
          {dots}{" "}
        </ul>
      </div>
    )
  }
  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
    </Carousel>
  )
}

export default ImgSlider
