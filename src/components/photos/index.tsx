"use client";
import Image from "next/image";
import { Fragment, useState, useRef } from "react";
import Slider from "react-slick";
import { Dialog, Transition } from "@headlessui/react";
import { Eye, MoveLeft, MoveRight, X } from "lucide-react";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const settings = {
  arrows: false,
  fade: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  waitForAnimate: false,
};

const fadeInAnimationVariants = {
  initial: { opacity: 0, y: 100 },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 0.75 },
  }),
};

const Photos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const slider = useRef<Slider | null>(null);
  const { ref } = useSectionInView("Photos");

  return (
    <section ref={ref} id="photos" className="my-12 w-full scroll-mt-[28px]">
      <h2 className="text-center text-4xl tracking-wide mb-8">Photos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 w-full">
        {[...Array(19).keys()].map((i) => (
          <motion.div
            key={`photos-${i}`}
            className="w-auto h-32 sm:h-44 lg:h-48 relative cursor-pointer group overflow-hidden"
            onClick={() => {
              setIsOpen(true);
              setActiveImage(i);
            }}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="hidden group-hover:flex items-center justify-center h-full w-full bg-black/80 absolute top-0 right-0 left-0 bottom-0 z-20 cursor-pointer">
              <Eye className="text-primary cursor-pointer" size={28} />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 z-20 bg-black/40" />
            <Image
              src={`/assets/img-${i + 1}.jpg`}
              className="object-cover object-center lg:object-top transform transition duration-500 ease-in-out group-hover:scale-105"
              fill
              alt=""
            />
          </motion.div>
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
                <Slider {...settings} initialSlide={activeImage} ref={slider}>
                  {[...Array(19).keys()].map((i) => (
                    <div key={`slider-${i}`}>
                      <X
                        className="absolute top-0 -right-0 z-20 !cursor-pointer hover:text-[#fafafa]"
                        onClick={() => setIsOpen(false)}
                        size={28}
                        strokeWidth={3}
                      />
                      <div
                        onClick={() => slider.current?.slickPrev()}
                        className="absolute top-1/2 left-0 transform -translate-y-1/2 cursor-pointer z-30 md:bg-black px-4 py-1"
                      >
                        <MoveLeft
                          size={32}
                          strokeWidth={3}
                          className="hover:text-[#fafafa]"
                        />
                      </div>
                      <div className="relative h-[60vh] md:h-[80vh] w-[72%] sm:w-[80%] md:w-[100%] mx-auto">
                        <Image
                          src={`/assets/img-${i + 1}.jpg`}
                          className="object-contain"
                          fill
                          alt=""
                        />
                      </div>
                      <div
                        onClick={() => slider.current?.slickNext()}
                        className="absolute top-1/2 right-0 transform -translate-y-1/2 cursor-pointer z-30 md:bg-black px-4 py-1"
                      >
                        <MoveRight
                          size={32}
                          strokeWidth={3}
                          className="hover:text-[#fafafa]"
                        />
                      </div>
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
