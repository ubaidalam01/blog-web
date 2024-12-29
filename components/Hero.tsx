import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-screen p-0 md:p-10">
      <h1 className="flex items-center justify-center p-4 text-2xl font-medium text-black">
        Stories About Design
      </h1>
      <div className="flex flex-col md:flex-row">
        <div className="">
          <Image
            src="/void2.jpeg"
            alt="Void"
            width="620"
            height="400"
            layout="intrinsic"
          />
        </div>

        <div className="min-h-screen w-full md:w-[52%] flex flex-col items-center justify-center gap-5 bg-black text-white">
        <h1 className="font-bold">FEAUTURED STORY</h1>
          {/* <h1>
            Jun 12, 2023.
            2 min read
            </h1> */}
          <Link href="/All">
          <h1 className="font-bold text-5xl hover:text-black">
            A SURREAL
            <br />
            CONCRETE
            <br />
            DREAM
          </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
