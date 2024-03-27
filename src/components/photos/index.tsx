import Image from "next/image";
import React from "react";

const Photos = () => {
  return (
    <section id="photos" className="my-12">
      <h2 className="text-center text-xl tracking-wide mb-8">Photos</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {[...Array(19).keys()].map((i) => (
          <div key={`photos-${i}`} className="w-full h-32 sm:h-44 lg:h-48 relative">
          <div className="bg-black/40 cursor-pointer absolute top-0 right-0 left-0 bottom-0 z-20"/>
            <Image src={`/assets/img-${i + 1}.jpg`} className="object-cover" fill alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Photos;
