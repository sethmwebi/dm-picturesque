"use client";
import Link from "next/link";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import { motion, useCycle } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";
import { useRef } from "react";
import { useDimensions } from "@/lib/hooks";
import { Navigation } from "./navigation";
import { MenuToggle } from "./menu-toggle";
import { Instagram } from "lucide-react";

const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(20px at 40px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <div className="z-20">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="flex fixed top-0 left-0 right-0 max-w-full mx-auto z-20 text-white bg-black/20 justify-between px-2 py-1 items-center text-xs"
      >
        <div className="flex gap-x-2 items-center">
          <Link href="https://www.instagram.com/dm.pictureske" target="_blank">
            <Instagram size={12} />
          </Link>
          <Link href="https://www.tiktok.com/@dandmpictures_ke" target="_blank">
            <Image src="/tiktok.svg" alt="" height={13} width={13} />
          </Link>
        </div>
        <div>
          <p>0794592974</p>
        </div>
      </motion.div>
      <div className="flex flex-row-reverse sm:flex-row justify-between items-center pt-[28px] py-2">
        <div
          className="relative h-10 w-10 z-10"
        >
          <Link href="#home" className="whitespace-nowrap">
            <Image src="/logo-color.svg" fill alt="" />
          </Link>
        </div>
        <ul className="hidden sm:flex items-center gap-x-2 lg:gap-x-4 uppercase text-md lg:text-lg tracking-wide">
          {links.map((link) => (
            <motion.li
              className={clsx(
                "hover:text-primary underline-offset-4 last:px-2 last:py-2 last:lg:px-2 last:bg-primary last:text-secondary last:hover:text-secondary/60",
                {
                  "text-primary last:text-gray-200":
                    activeSection === link.name,
                },
              )}
              key={link.hash}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
              }}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link href={link.hash}>{link.name}</Link>
            </motion.li>
          ))}
        </ul>
        <div className="sm:hidden overflow-hidden h-100vh">
          <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={isOpen ? height : 0}
            ref={containerRef}
            className="absolute top-0 left-0 w-[300px] overflow-hidden"
          >
            <motion.div
              className="bg-[#b79891] z-[9999] absolute top-0 left-0 w-[300px] h-full"
              variants={sidebar}
            />
            <Navigation toggle={() => toggleOpen()} />
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
