import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { cn } from "@/lib/utils";
import ActiveSectionContextProvider from "@/context/active-section-context";

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
    <html lang="en">
      <body
        className={cn(
          "bg-background px-2 sm:px-4 lg:px-0",
          merriweather.className,
        )}
      >
        <ActiveSectionContextProvider>{children}</ActiveSectionContextProvider>
      </body>
    </html>
  );
}
