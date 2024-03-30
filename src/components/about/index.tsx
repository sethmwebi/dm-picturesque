import Image from "next/image";
import React from "react";


const About = () => {
  return (
    <section className="min-h-[100vh] w-full" id="about">
      <div className="w-full flex justify-center mt-12">
        <div className="relative bg-black h-32 w-32 md:w-44 md:h-44 lg:h-48 lg:w-48 md:mt-24 overflow-hidden rounded-full">
          <Image src="/daniel-majale.jpeg" fill alt="the photographer" />
        </div>
      </div>
      <h4 className="text-center font-sans text-2xl font-extrabold mt-4">
        Hi I&apos;m Daniel Majale
      </h4>
      <div className="mt-4 font-thin w-[80%] mx-auto">
        <p>
          I&apos;m a photographer driven by a profound passion to capture the
          essence of human existence through my lens. With a background immersed
          in diverse cultures and experiences, I aim to transcend boundaries and
          invite viewers to immerse themselves in the richness of each frame.
        </p>
        <p className="mt-2">
          With an insatiable curiosity and a keen eye for detail, I navigate
          through life&apos;s complexities, seeking out moments of raw emotion
          and intrinsic beauty. From sweeping landscapes to intimate portraits,
          every photograph on my website is a narrative waiting to unfold. Join
          me on this journey of visual exploration, where each image serves as a
          window into the captivating world we inhabit.
        </p>
      </div>
          </section>
  );
};

export default About;
