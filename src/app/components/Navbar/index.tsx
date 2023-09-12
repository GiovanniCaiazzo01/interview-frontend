import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-3 pb-3 pl-20 pr-20 mb-9 bg-gray-100 ">
      <div className="flex justify-center items-center h-10 w-10 p-2 border rounded-xl bg-white">
        <Image src="/Group_5.svg" width={23} height={23} alt="logo" />
      </div>
      <div className="flex justify-center items-center">
        <Image
          src="/avatar-round.png"
          width={32}
          height={32}
          alt="avatar-round"
        />
      </div>
    </div>
  );
};

export default Navbar;
