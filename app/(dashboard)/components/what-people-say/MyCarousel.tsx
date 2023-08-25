"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  return (
    <div className="carousel-button-group flex items-center justify-center">
      <Button
        className={'bg-black hover:bg-black hover:opacity-80 transition'}
        onClick={() => previous()}
      >
        <ArrowLeft />
      </Button>
      <Button className={'bg-black hover:bg-black hover:opacity-80 transition'} onClick={() => next()}>
        <ArrowRight />
      </Button>
    </div>
  );
};

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
    partialVisibilityGutter: 70,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 70,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const MyCarousel = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      infinite={true}
      responsive={responsive}
      customButtonGroup={<ButtonGroup />}
      arrows={false}
      renderButtonGroupOutside={true}
      partialVisible={true}
    >
      <div className="h-[560.01px]">
        <Image src={"/images/what-people-say/img1.svg"} alt="card image" fill />
      </div>
      <div className="h-[560.01px]">
        <Image src={"/images/what-people-say/img1.svg"} alt="card image" fill />
      </div>
      <div className="h-[560.01px]">
        <Image src={"/images/what-people-say/img1.svg"} alt="card image" fill />
      </div>
      <div className="h-[560.01px] ">
        <Image src={"/images/what-people-say/img1.svg"} alt="card image" fill />
      </div>
    </Carousel>
  );
};
export default MyCarousel;
