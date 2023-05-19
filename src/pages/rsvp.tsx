import NavbarLight from "@/components/NavbarLight";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { MdKeyboardBackspace } from "react-icons/md";
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
import { useRouter } from "next/router";
import { BiGift } from "react-icons/bi";

function rsvp() {
  const [code, setCode] = useState<string>();
  const [view, setView] = useState<string>("first page");
  const submit = () => {
    if (code === "code") {
      toast.success("Invitation Found");
      setView("confirmation");
    } else {
      toast.error("Invitation not Found");
    }
  };
  const router = useRouter();
  const {
    isOpen: isDOpen,
    onOpen: onDOpen,
    onClose: onDClose,
  } = useDisclosure();
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
        {view === "first page" ? (
          <div className="w-full h-[70vh] flex flex-col justify-center items-center">
            <div className="w-full flex justify-center items-center">
              <div className="w-[50%] flex items-center border-[#7F9B2D] border-[1px] rounded-xl h-[50px] ">
                <Input
                  focusBorderColor="transparent"
                  placeholder="Input code"
                  w="100%"
                  type="text"
                  id="code"
                  name="code"
                  value={code}
                  border="none"
                  onChange={(e) => {
                    setCode(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="w-full flex justify-center items-center mt-12">
              <div
                className="w-fit h-fit text-white  hover:scale-150  hover:text-white px-9 cursor-pointer hover:bg-black py-2 bg-[#7F9B2D] rounded-lg ease-in-out duration-500"
                onClick={() => {
                  submit();
                }}
              >
                <p className="font-semibold  ">RSVP</p>
              </div>
            </div>
          </div>
        ) : null}

        {view === "confirmation" ? (
          <>
            <div className="w-full h-[70vh] flex flex-col justify-center items-center">
              <div className="lg:w-[55%] flex flex-col gap-4 ">
                <div
                  className="cursor-pointer"
                  onClick={() => {
                    setView("first page");
                  }}
                >
                  <MdKeyboardBackspace className="text-xl" />
                </div>
                <p className="text-[18px] font-semibold">
                  Hey There, Joshua Ivie
                </p>
                <p className="lg:text-[50px] text-xl text-[#7F9B2D] font-bold">
                  Will you be attending our wedding?
                </p>
                <div className="flex justify-center items-center mt-5 gap-5">
                  <div
                    className="w-fit h-fit px-12 py-2 bg-[#7F9B2D] text-white cursor-pointer   rounded-lg "
                    onClick={() => {
                      setView("yes");
                    }}
                  >
                    <p className="font-semibold">Yes</p>
                  </div>
                  <div
                    className="w-fit h-fit px-12 py-2  border-[1px] rounded-lg  cursor-pointer  border-[#7F9B2D]"
                    onClick={() => {
                      setView("no");
                    }}
                  >
                    <p className="font-semibold text-[#7F9B2D]">No</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {view === "no" ? (
          <>
            <div className="w-full h-[70vh] flex flex-col justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <div className="w-[50%] gap-5 flex flex-col  items-center justify-center  ">
                  <p className="font-bold text-center lg:text-[50px]">
                    Thank you for letting us know. We completely understand and
                    Hope to catch up with you soon.
                  </p>
                  <p className="font-[400] text-center ">
                    If this was a mistake please contact +2347054274316 or
                    +2348143828217 to rectify the error.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
        {view === "yes" ? (
          <>
            <div className="w-full h-[70vh] flex flex-col justify-center items-center">
              <div className="w-full flex justify-center items-center">
                <div className="w-[50%] gap-5 flex flex-col  items-center justify-center  ">
                  <p className="font-bold text-center lg:text-[50px]">
                    Thank you so much for RSVPing to our wedding!
                  </p>
                  <p className="font-[400] text-center ">
                    If you would like to make enquiries about anything please
                    contact +2347054274316 or +2348143828217.
                  </p>
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default rsvp;
