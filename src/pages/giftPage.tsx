import NavbarLight from "@/components/NavbarLight";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";

function giftPage() {
  const router = useRouter();
  const gift = [
    { id: 1, name: "Cash Gift", price: 2000 },
    { id: 1, name: "Cash Gift", price: 2000 },
    { id: 1, name: "Cash Gift", price: 2000 },
    { id: 1, name: "Cash Gift", price: 2000 },
    { id: 1, name: "Cash Gift", price: 2000 },
  ];

  return (
    <>
      <div className="p-12">
        <div className="flex w-full justify-center items-center md:mt-5">
          <Image src="/icons/logoLight.svg" alt="logo" width={70} height={70} />
        </div>
        <NavbarLight />

        <div className="w-full grid grid-cols-1 gap-5 mt-12">
          {gift &&
            gift.map((item, index) => (
              <div
                className="w-full h-[100px] border-[1px] rounded-xl px-8 py-3 flex border-[#7F9B2D] flex items-center "
                key={index}
                onClick={() => {
                  router.push(`/checkout/id`);
                }}
              >
                <div className="w-[70%] h-full flex items-center gap-5">
                  <div className="w-[10%] h-full cursor-pointer">
                    <div className="w-full rounded-xl h-full bg-red-200 truncate">
                      <Image
                        src="/images/groom1.jpeg"
                        alt="logo"
                        width={300}
                        height={3}
                        // objectFit="cover"
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="">
                    <p className="text-[20px] font-semibold">{item.name}</p>
                    <p className="text-[#7F9B2D] font-semibold">{item.price}</p>
                  </div>
                </div>
                <div className="w-[30%] flex items-center justify-between">
                  <div className="w-fit h-fit px-12 py-3 rounded-lg bg-[#7F9B2D] cursor-pointer">
                    <p className="text-white">Checkout</p>
                  </div>

                  <div className="">
                    <p className="font-semibold">1 item</p>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-fit h-fit px-3 py-3 rounded-lg bg-[#7F9B2D] cursor-pointer">
                      <BiMinus className="text-white" />
                    </div>
                    <div className="w-fit h-fit px-3 py-3 rounded-lg bg-[#7F9B2D] cursor-pointer">
                      <BsPlus className="text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default giftPage;
