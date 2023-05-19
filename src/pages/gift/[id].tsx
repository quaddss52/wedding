import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import NavbarLight from "@/components/NavbarLight";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
} from "@chakra-ui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiGift } from "react-icons/bi";

function gift() {
  const router = useRouter();
  const { id } = router.query;
  const {
    isOpen: isDOpen,
    onOpen: onDOpen,
    onClose: onDClose,
  } = useDisclosure();
  return (
    <>
      <div className="lg:p-12 ">
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

        <div className="lg:px-20 p-5">
          <div className="lg:mt-12 mt-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-[5rem] w-full h-[70vh]">
              <div className="w-full rounded-xl h-full bg-red-200 truncate">
                <Image
                  src="/images/groom1.jpeg"
                  alt="logo"
                  width={300}
                  height={300}
                  // objectFit="cover"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex flex-col justify-between items-start">
                <div className="py-5">
                  <p className="lg:text-[50px] text-xl mb-1 font-semibold">
                    Gift Name
                  </p>
                  <p className="lg:text-[30px] text-[#7F9B2D] font-semibold">
                    ₦ 20,000
                  </p>
                </div>
                <div className="w-full">
                  <div className="flex flex-row justify-between gap-3 items-center">
                    <div className="w-full lg:h-[50px] h-[35px] flex justify-center items-center border-[1px] rounded-lg border-black">
                      <p className="">Gift Page</p>
                    </div>
                    <div className="w-full lg:h-[50px] h-[35px] flex justify-center items-center border-[1px] rounded-lg border-black">
                      <p className="">Gift Bag</p>
                    </div>
                  </div>
                  <div className="w-full mt-5 lg:h-[70px] h-[50px] bg-black text-white rounded-lg flex justify-center items-center">
                    <p className="">Add To Gift Bag</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:mt-12 mt-5 flex justify-between items-center">
            <div className="">
              <p className="lg:text-[30px] font-semibold cursor-pointer text-xl text-[#797979]">
                Previous Gift
              </p>
            </div>
            <div className="">
              <p className="lg:text-[30px] text-xl font-semibold cursor-pointer text-[#7F9B2D]">
                Next Gift
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default gift;
