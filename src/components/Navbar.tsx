import { useRouter } from "next/router";
import React from "react";
import { BiGift } from "react-icons/bi";

function Navbar() {
  const router = useRouter();
  return (
    <div>
      <div className="w-full flex mt-8 justify-center items-center">
        <div className="md:w-[50%] md:flex md:gap-[5rem] md:items-center font-semibold md:justify-center justify-center">
          <div
            className={
              router.asPath === "/"
                ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
                : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
            }
            onClick={() => {
              router.push("/");
            }}
          >
            <p className=" ">Home</p>
          </div>
          <div
            className={
              router.asPath === "/gallery"
                ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
                : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
            }
            onClick={() => {
              router.push("/gallery");
            }}
          >
            <p className="">Gallery</p>
          </div>
          <div
            className={
              router.asPath === "/gifting"
                ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
                : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
            }
            onClick={() => {
              router.push("/gifting");
            }}
          >
            <p className="">Gifting</p>
          </div>
          <div
            className={
              router.asPath === "/rsvp"
                ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
                : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
            }
            onClick={() => {
              router.push("/rsvp");
            }}
          >
            <p className="">RSVP</p>
          </div>
          <div
            className={
              router.asPath === "/giftPage"
                ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
                : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]"
            }
            onClick={() => {
              router.push("/giftPage");
            }}
          >
            <BiGift className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
