"use client";
import { useSectionInView } from "@/lib/hooks";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { transformAnimationVariants } from "@/lib/animations";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      variants={transformAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      custom={1}
      ref={ref}
      className="min-h-[100vh] w-full scroll-mt-[28px]"
      id="about"
    >
      <div className="w-full flex justify-center mt-12">
        <motion.div
          variants={transformAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={2}
          className="relative bg-black h-32 w-32 md:w-44 md:h-44 lg:h-48 lg:w-48 md:mt-24 overflow-hidden rounded-full"
        >
          <Image
            src="/daniel-majale.jpeg"
            className="object-cover"
            fill
            alt="the photographer"
          />
        </motion.div>
      </div>
      <motion.h4
        variants={transformAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={2}
        className="text-center font-sans text-2xl font-extrabold mt-4"
      >
        Hi I&apos;m Daniel Majale
      </motion.h4>
      <div className="mt-4 font-thin w-[80%] mx-auto">
        <motion.p
          variants={transformAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={3}
        >
          I&apos;m a photographer driven by a profound passion to capture the
          essence of human existence through my lens. With a background immersed
          in diverse cultures and experiences, I aim to transcend boundaries and
          invite viewers to immerse themselves in the richness of each frame.
        </motion.p>
        <motion.p
          variants={transformAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          custom={4}
          className="mt-2"
        >
          With an insatiable curiosity and a keen eye for detail, I navigate
          through life&apos;s complexities, seeking out moments of raw emotion
          and intrinsic beauty. From sweeping landscapes to intimate portraits,
          every photograph on my website is a narrative waiting to unfold. Join
          me on this journey of visual exploration, where each image serves as a
          window into the captivating world we inhabit.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default About;
