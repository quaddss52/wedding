import NavbarLight from "@/components/NavbarLight";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import {
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { BiGift } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";

function checkout() {
  const router = useRouter();
  const { id } = router.query;
  const [fullName, setFullName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [cardNo, setCardNo] = useState<number>();

  const {
    isOpen: isDOpen,
    onOpen: onDOpen,
    onClose: onDClose,
  } = useDisclosure();
  return (
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

      <div className="w-full h-[70vh] flex flex-col justify-center items-center">
        <div className="lg:w-[55%] flex flex-col gap-4 ">
          <div className="cursor-pointer flex w-full justify-between">
            <MdKeyboardBackspace className="text-xl" />
          </div>
          <div className="mt-5">
            <div className="w-full flex mt-5 items-center border-[#7F9B2D] border-[1px] rounded-xl h-[50px] ">
              <Input
                focusBorderColor="transparent"
                placeholder="Full Name"
                w="100%"
                type="text"
                id="code"
                name="code"
                value={email}
                border="none"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-full flex mt-5 items-center border-[#7F9B2D] border-[1px] rounded-xl h-[50px] ">
              <Input
                focusBorderColor="transparent"
                placeholder="Email Address"
                w="100%"
                type="text"
                id="code"
                name="code"
                value={email}
                border="none"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="w-full flex mt-5 items-center border-[#7F9B2D] border-[1px] rounded-xl h-[50px] ">
              <Input
                focusBorderColor="transparent"
                placeholder="Card Number"
                w="100%"
                type="number"
                id="code"
                name="code"
                value={cardNo}
                border="none"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default checkout;
