import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const Home = () => {
  return (
    <div className="h-[calc(100vh-76px)] bg-[url('/sea.jpg')] bg-cover bg-center w-full ">
      <div className="bg-black/90 h-[100%] w-[100%] z-10 flex items-center justify-center">
        <div className="flex flex-col items-center gap-y-4">
          <h2 className="text-xl uppercase tracking-wide font-bold text-muted-foreground">
            DM Picturesque
          </h2>
          <p className="tracking-wider font-thin text-center text-muted-foreground">
            Capturing moments in stunning imagery, your visual stories unfold
            here
          </p>
          <Button className="!rounded-lg overflow-hidden" size={"lg"} asChild>
            <Link href="/#contact">Hire Now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
