"use client";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";


import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  return (
    <>
      <main className="relative flex grow flex-col">{children}</main>

      <div className="fixed flex h-[200px] items-end  justify-between px-10 py-4 w-full bottom-[20px] left-0 ">
        <a href={`tel:+918800592770`} className="">
          <FaPhoneAlt className="text-4xl text-white bg-black p-2   rounded-full" />
        </a>
        <a href={`http://wa.me/+918800592770`}>
          <IoLogoWhatsapp className="text-4xl text-[#08c241] " />
        </a>
      </div>
    </>
  );
}
