"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import Slider from "react-slick";
import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";

const settings = {
  fade: true,
  infinite: true,
  lazyLoad: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
};

const Photos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="photos" className="my-12 w-full">
      <h2 className="text-center text-xl tracking-wide mb-8">Photos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full">
        {[...Array(19).keys()].map((i) => (
          <div
            key={`photos-${i}`}
            className="w-auto h-32 sm:h-44 lg:h-48 relative"
            onClick={() => {
              setIsOpen(true);
              setActiveImage(i);
            }} // Open dialog on click
          >
            <div className="bg-black/40 cursor-pointer absolute top-0 right-0 left-0 bottom-0 z-20" />
            <Image
              src={`/assets/img-${i + 1}.jpg`}
              className="object-cover"
              fill
              alt=""
            />
          </div>
        ))}
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-20 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black/75" />
          </Transition.Child>
          <div className="flex items-center justify-center min-h-full">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="w-[100vw] md:w-[80vw] transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all">
                <Slider {...settings} initialSlide={activeImage}>
                  {[...Array(19).keys()].map((i) => (
                    <div
                      key={`slider-${i}`}
                      className="relative h-[60vh] md:h-[80vh] w-full"
                    >
                      <X
                        className="absolute top-0 -right-0 z-20 !cursor-pointer"
                        onClick={() => setIsOpen(false)}
                        size={28}
                      />
                      <Image
                        src={`/assets/img-${i + 1}.jpg`}
                        className="object-contain"
                        fill
                        alt=""
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </section>
  );
};

export default Photos;
