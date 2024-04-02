"use client"
import { Check } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Testimonials from "../testimonials";
import { transformAnimationVariants } from "@/lib/animations";

const services = [
  "wedding & events photography",
  "videography & drone coverage",
  "livestreaming services",
  "photomounting services",
  "portrait photography",
  "fashion photography",
  "landscape & travel photography",
  "photo editing & retouching services",
];

const Services = () => {
  return (
    <section className="min-h-[100vh] w-full scroll-mt-[28px]" id="services">
      <div>
        <motion.h4
          variants={transformAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={1}
          className="text-center font-sans text-4xl font-extrabold mt-12 md:mt-24 mb-8 md:mb-16"
        >
          Services
        </motion.h4>
        <div className="md:w-[80%] flex justify-center mx-auto">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 ">
            {services.map((service, idx) => (
              <motion.li
                variants={transformAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={idx}
                key={`service-${idx}`}
                className="flex font-thin capitalize"
              >
                <Check className="text-primary mr-2" />
                {service}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default Services;
