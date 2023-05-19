import NavbarLight from "@/components/NavbarLight";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { BiGift, BiMinus } from "react-icons/bi";
import { BsPlus } from "react-icons/bs";
import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";

function giftPage() {
  const router = useRouter();
  const {
    isOpen: isDOpen,
    onOpen: onDOpen,
    onClose: onDClose,
  } = useDisclosure();
  const gift = [
    { id: 1, name: "Cash Gift", price: 2000 },
    { id: 1, name: "Cash Gift", price: 2000 },
    { id: 1, name: "Cash Gift", price: 2000 },
    { id: 1, name: "Cash Gift", price: 2000 },
    { id: 1, name: "Cash Gift", price: 2000 },
  ];

  return (
    <>
      <div className="lg:p-12">
        <div className=" bg-white lg:bg-transparent flex flex-row justify-between items-center lg:justify-none p-5 lg:p-0 lg:flex-col ">
          <div className="flex w-full lg:justify-center items-center md:mt-5">
            <div className="hidden lg:block">
              <Image
                src="/icons/logoLight.svg"
                alt="logo"
                width={70}
                height={70}
              />
            </div>
            <div className="block lg:hidden">
              <Image
                src="/icons/logoLight.svg"
                alt="logo"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <NavbarLight />
          </div>
          <div className="block lg:hidden">
            <RxHamburgerMenu className="text-black text-xl" onClick={onDOpen} />
            <Drawer
              isOpen={isDOpen}
              placement="right"
              size="full"
              onClose={onDClose}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />

                <DrawerBody>
                  <div className="flex w-full h-full justify-center items-center">
                    <div className="w-full flex flex-col gap-5 mt-8 justify-center items-center">
                      <div className=" flex flex-col gap-5 items-center font-semibold  justify-center">
                        <div
                          className={
                            router.asPath === "/"
                              ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
                              : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
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
                              ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
                              : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
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
                              ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
                              : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
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
                              ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
                              : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
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
                              ? "text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
                              : "hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[25px]"
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
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 gap-5 p-5 lg:p-0 mt-12">
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
