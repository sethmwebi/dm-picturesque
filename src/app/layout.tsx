import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Image from "next/image";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
export const metadata: Metadata = {
  title: "DM Picturesque",
  description: "Daniel Majale Photography Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning={true}>
      <body
        className={cn(
          "bg-background px-2 sm:px-4 lg:px-0",
          merriweather.className,
        )}
      >
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
        <a href="https://wa.me/+254718491538" target="_blank" className="w-fit p-2 bg-black/10 hover:bg-black/40 cursor-pointer rounded-full fixed bottom-4 right-4 z-[20000]">
          <Image
            alt="whatsapp icon"
            src="/whatsapp.svg"
            height={32}
            width={32}
          />
        </a>
      </body>
    </html>
  );
}
