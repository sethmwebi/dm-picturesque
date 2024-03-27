"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-primary bg-background py-4">
      <div className="border-2 px-2 lg:px-4 py-2 border-primary">
        <Link href="/#home" className="whitespace-nowrap">
          DM Picturesque
        </Link>
      </div>
      <div className="hidden sm:flex items-center gap-x-2 lg:gap-x-4 uppercase text-md lg:text-lg tracking-wide">
        <Link href="/#home" className="hover:underline underline-offset-4">
          home
        </Link>
        <Link
          href="/#photos"
          scroll={false}
          className="hover:underline underline-offset-4"
        >
          photos
        </Link>
        <Link
          href="/#about"
          scroll={false}
          className="hover:underline underline-offset-4 active:underline"
        >
          about
        </Link>
        <Link
          href="/#testimonials"
          scroll={false}
          className="hover:underline underline-offset-4"
        >
          testimonials
        </Link>
        <Link
          href="/#contact"
          scroll={false}
          className="px-2 lg:px-4 py-2 bg-primary text-secondary hover:underline underline-offset-4"
        >
          contact
        </Link>
      </div>
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Menu className="text-primary cursor-pointer" size={32} />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle asChild>
                <div className="text-primary w-fit border-primary">
                  <Link href="/#home" className="whitespace-nowrap">
                    DM Picturesque
                  </Link>
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex h-full justify-center items-center">
              <div className="flex flex-col items-center justify-around h-[75%] uppercase text-md lg:text-lg tracking-wide text-primary">
                <SheetClose asChild>
                  <Link
                    href="/#home"
                    className="hover:underline underline-offset-4"
                  >
                    home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/#photos"
                    scroll={false}
                    className="hover:underline underline-offset-4"
                  >
                    photos
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/#about"
                    scroll={false}
                    className="hover:underline underline-offset-4 active:underline"
                  >
                    about
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/#testimonials"
                    scroll={false}
                    className="hover:underline underline-offset-4"
                  >
                    testimonials
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/#contact"
                    scroll={false}
                    className="px-4 py-2 bg-primary text-secondary hover:underline underline-offset-4"
                  >
                    contact
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Navbar;
