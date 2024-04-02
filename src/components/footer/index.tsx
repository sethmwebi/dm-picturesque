"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="mb-12 flex flex-col justify-center gap-y-8 items-center">
      <div className="flex gap-x-4 items-center">
        <Link href="https://www.instagram.com/dm.pictureske" target="_blank">
          <div className="flex items-center gap-1">
            <Instagram size={20} />
            <p className="hover:underline">Instagram</p>
          </div>
        </Link>
        <Link href="https://www.tiktok.com/@dandmpictures_ke" target="_blank">
          <div className="flex items-center gap-1">
            <Image src="/tiktok.svg" alt="" height={20} width={20} />
            <p className="hover:underline">Tiktok</p>
          </div>
        </Link>
        <div className="flex items-center gap-1">
          <Image src="/phone.svg" alt="phone icon" height={20} width={20} />
          <p>0718491538</p>
        </div>
      </div>
      <p className="flex items-center justify-center text-xs">
        Copyright&nbsp;&nbsp;<span className="mt-1.5">&copy;</span>{" "}
        {new Date().getFullYear()}. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
