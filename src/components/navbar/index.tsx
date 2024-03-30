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
import { useActiveSectionContext } from "@/context/active-section-context";
import { links } from "@/lib/data";
import clsx from "clsx";

const Navbar = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <div className="flex justify-between items-center text-muted-foreground bg-background py-4">
      <div className="border-2 px-2 lg:px-4 py-2 border-primary">
        <Link href="#home" className="whitespace-nowrap">
          DM Picturesque
        </Link>
      </div>
      <div className="hidden sm:flex items-center gap-x-2 lg:gap-x-4 uppercase text-md lg:text-lg tracking-wide">
        {links.map((link) => (
          <Link
            key={link.hash}
            href={link.hash}
            className={clsx(
              "hover:text-primary underline-offset-4 last:px-2 last:py-2 last:lg:px-2 last:bg-primary last:text-secondary last:hover:text-secondary/60",
              {
                "text-primary last:text-gray-200": activeSection === link.name,
              },
            )}
            onClick={() => {
              setActiveSection(link.name);
              setTimeOfLastClick(Date.now());
            }}
          >
            {link.name}
          </Link>
        ))}
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
  );
};

export default Navbar;
