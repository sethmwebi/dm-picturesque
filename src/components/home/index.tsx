"use client";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { motion, stagger } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Home = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      id="#home"
      ref={ref}
      className="h-[calc(100vh-76px)] bg-[url('/sea.jpg')] bg-cover bg-center w-full "
    >
      <div className="bg-black/90 h-[100%] w-[100%] z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{delay: 0.1, staggerChildren: 0.1 }}
        className="flex flex-col items-center gap-y-4"
        >
        <h2 className="text-xl uppercase tracking-wide font-bold text-muted-foreground">
          DM Picturesque
        </h2>
        <p className="tracking-wider font-thin text-center text-muted-foreground">
          Capturing moments in stunning imagery, your visual stories unfold
          here
        </p>
        <Button
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
          className="!rounded-lg overflow-hidden"
          size={"lg"}
          asChild
        >
          <Link href="/#contact">Hire Now</Link>
        </Button>
      </motion.div>
    </div>
    </section >
  );
};

export default Home;
