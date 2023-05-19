import NavbarLight from "@/components/NavbarLight";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { BiGift } from "react-icons/bi";

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

function gifting() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDOpen,
    onOpen: onDOpen,
    onClose: onDClose,
  } = useDisclosure();

  return (
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

      <div className="w-full p-5 lg:p-0 ">
        <p className="lg:text-[18px] text-center font-bold mb-1 mt-12 ">
          To prevent duplicate gifts as well as enable household planning, the
          couple will prefer that all gifts are given through the registry or
          sent to the couples account. Please feel free to contact
          +2347054274316 for any further enquires or support regarding gifts
        </p>
      </div>

      <div className="lg:mt-12 p-5 lg:p-0 mt-5">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-3 sm:grid-cols-2 md:grid-cols-4">
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
          <div className="w-full h-[300px] cursor-pointer">
            <div
              className="w-full rounded-xl h-[220px] bg-red-200 truncate"
              onClick={() => {
                router.push(`/gift/id`);
              }}
            >
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="">
                <p className="font-bold lg:text-[20px] md:text-[18px]">
                  Gift Name
                </p>
                <p className="font-semibold text-[#7F9B2D]">₦ 20,000</p>
              </div>
              <div
                className="z-10 hover:text-[#7F9B2D] text-black ease-in-out duration-500 cursor-pointer text-[18px]"
                onClick={() => {
                  onOpen();
                }}
              >
                <BiGift className="text-xl lg:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <div className="h-fit p-12 flex flex-col gap-[3rem] justify-center items-center">
              <div className="">
                <Image
                  src="/icons/verified.svg"
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>
              <p className="lg:text-[50px] text-xl text-[#7F9B2D]">
                Item Added To Gift Bag
              </p>
              <div className="flex items-center gap-5">
                <div className="w-fit h-fit px-5 py-2 bg-black text-white  border-[1px] rounded-lg border-black">
                  <p className="font-semibold">Gift Page</p>
                </div>
                <div className="w-fit h-fit px-5 py-2  border-[1px] rounded-lg border-black">
                  <p className="font-semibold">Gift Bag</p>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default gifting;
