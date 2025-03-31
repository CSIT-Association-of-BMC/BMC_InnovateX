"use client";
import Image from "next/image";
import React, { useState } from "react";

const Mascot = () => {
  //after 3 sec change the url to /assets/innovateX_Mascot.gif
  const [src, setSrc] = useState("/assets/innovateX_Mascot.gif");
  React.useEffect(() => {
    setTimeout(() => {
      console.log("Changing src to /assets/innovateX_Mascot.png");
      setSrc("/assets/innovateX_Mascot.png");
    }, 6500);
  });

  return (
    <Image
      id="mascot"
      src={src}
      priority={true}
      alt="mascot"
      width={50}
      height={50}
      unoptimized={true}
      className="w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
    />
  );
};

export default Mascot;
