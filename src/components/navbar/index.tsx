"use client";
import { Instagram, Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import { motion } from "framer-motion";
import clsx from "clsx";
import Image from "next/image";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div className="">
      <div className="flex fixed top-0 left-0 right-0 max-w-full mx-auto z-20 text-white bg-black/20 justify-between px-2 py-1 items-center text-xs">
        <div className="flex gap-x-2 items-center">
          <Link href="https://www.instagram.com/dm.pictureske" target="_blank">
            <Instagram size={12} />
          </Link>
          <Link href="https://www.tiktok.com/@dandmpictures_ke" target="_blank">
            <Image
              src="/tiktok.svg"
              className="text-white"
              alt=""
              height={13}
              width={13}
            />
          </Link>
        </div>
        <div>
          <p className="text-white">0794592974</p>
        </div>
      </div>
      <div className="flex justify-between items-center pt-[28px] py-2">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="relative h-10 w-10 z-10"
        >
          <Link href="#home" className="whitespace-nowrap">
            <Image src="/logo-color.svg" fill alt="" />
          </Link>
        </motion.div>
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
        <div className="sm:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="text-primary cursor-pointer" size={32} />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle asChild>
                  <div className="text-primary w-fit border-primary">
                    <SheetClose asChild>
                      <Link href="#home" className="whitespace-nowrap">
                        DM Picturesque
                      </Link>
                    </SheetClose>
                  </div>
                </SheetTitle>
              </SheetHeader>
              <div className="flex h-full justify-center items-center">
                <div className="flex flex-col items-center justify-around h-[75%] uppercase text-md lg:text-lg tracking-wide text-primary">
                  {links.map((link) => (
                    <SheetClose key={`mobile-${link.hash}`} asChild>
                      <Link
                        href={link.hash}
                        className="hover:underline underline-offset-4 last:px-2 last:py-2 last:lg:px-2 last:bg-primary last:text-secondary"
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
