"use client";
import { testimonials } from "@/lib/data";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  slidesToShow: 1,
  dots: true,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2500,
  autoplaySpeed: 7000,
  cssEase: "linear",
};

const Testimonials = () => {
  return (
    <div className="w-full my-20" id="testimonials">
      <h2 className="text-center text-4xl tracking-wide mb-16">Testimonials</h2>
      <div className="w-[90%] lg:w-full mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial, idx) => (
            <div
              key={`testimonial-${idx}`}
            >
              <div className="relative h-16 w-16 rounded-full overflow-hidden mx-auto">
                <Image
                  src={testimonial.image_url}
                  className="object-cover object-top"
                  alt=""
                  fill
                />
              </div>
              <div className="my-4 text-center">
              <p className="mx-auto block">{testimonial.name}</p>
              </div>
              <p className="w-[90%] lg:w-[75%] mx-auto font-thin">{`"${testimonial.testimonial}"`}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
