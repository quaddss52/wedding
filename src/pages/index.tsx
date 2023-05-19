import Image from "next/image";
import { Inter } from "next/font/google";
import { BiGift } from "react-icons/bi";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { RxHamburgerMenu } from "react-icons/rx";
const inter = Inter({ subsets: ["latin"] });
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function Home() {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  const [first, setFirst] = useState<boolean>(false);
  const [second, setSecond] = useState<boolean>(true);
  const [third, setThird] = useState<boolean>(false);

  const targetDate = new Date("June 29, 2023 00:00:00").getTime();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    setDays(days);
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    setHours(hours);
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    setMinutes(minutes);
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    setSeconds(seconds);
    if (timeRemaining < 0) {
      clearInterval(countdown);
      console.log("Countdown finished!");
    }
    return;
  }, 1000);
  return (
    <>
      <div className="h-screen w-screen heroP hero lg:p-12 text-white ">
        <div className=" bg-white lg:bg-transparent flex flex-row justify-between items-center lg:justify-none p-5 lg:p-0 lg:flex-col ">
          <div className="flex w-full lg:justify-center items-center md:mt-5">
            <div className="hidden lg:block">
              <Image src="/icons/logo.svg" alt="logo" width={70} height={70} />
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
            <Navbar />
          </div>
          <div className="block lg:hidden">
            <RxHamburgerMenu className="text-black text-xl" onClick={onOpen} />
            <Drawer
              isOpen={isOpen}
              placement="right"
              size="full"
              onClose={onClose}
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

        <div className="w-full h-[80%] flex flex-col gap-8 justify-center items-center">
          <p className="md:text-[100px] text-[50px] xl:text-[150px] font-butterfly-kids animate-pulse">
            Chronicles Of Forever
          </p>

          <div className="w-fit h-fit text-black  hover:scale-150  hover:text-white px-9 cursor-pointer hover:bg-[#7F9B2D] py-2 bg-white rounded-lg ease-in-out duration-500">
            <p className="  ">RSVP</p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit p-12">
        <div className="w-full flex items-center mb-8 justify-center">
          <p className="lg:text-[50px] text-[18px] font-bold ">
            Once Upon A Time
          </p>
        </div>

        <div className="flex lg:flex-row flex-col gap-5 lg:gap-0 items-center w-full justify-center relative ">
          <div className="lg:w-[300px] lg:h-[300px] w-[150px] mb-5 lg:mb-0 h-[150px] z-10">
            <div className="lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] rounded-full bg-red-200 truncate z-10 ">
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover lg:w-full lg:h-full"
              />
            </div>
            <p className="lg:text-[30px] text-[20px] font-butterfly-kids text-center">
              A Boy
            </p>
          </div>
          <Image
            src="/icons/line1.svg"
            alt="logo"
            width={500}
            height={300}
            objectFit="cover"
            className="object-cover hidden lg:block mx-[-15px]  animate-pulse "
          />
          <div className="lg:w-[300px] lg:h-[300px] w-[150px] mb-5 lg:mb-0 z-10">
            <div className="lg:w-[300px] lg:h-[300px] w-[150px] h-[150px] rounded-full bg-red-200 truncate ">
              <Image
                src="/images/bride1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="fill"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="lg:text-[30px] font-butterfly-kids text-center">
              Met A Girl
            </p>
          </div>
        </div>
        <Image
          src="/icons/line2.svg"
          alt="logo"
          width={500}
          height={100}
          objectFit="cover"
          className="object-cover hidden lg:block ml-[39%] mt-[-60px] animate-pulse "
        />
        <div className="lg:ml-[35%] w-full lg:w-fit lg:block flex flex-col gap-2 justify-center items-center">
          <div className="lg:w-[400px] lg:h-[400px] w-[200px] h-[200px] rounded-full bg-red-200 truncate z-10  ">
            <Image
              src="/images/couple2.jpeg"
              alt="logo"
              width={400}
              height={400}
              // objectFit="cover"
              className=" w-full h-full  "
            />
          </div>
          <p className="lg:text-[30px] font-butterfly-kids text-center ">
            And They Fell In Love
          </p>
        </div>

        <div className="w-full ">
          <p className="lg:text-[50px] text-[20px] text-center font-bold mb-1 mt-12 ">
            Come Dance With Us...
          </p>
          <p className="text-[30px] text-center font-butterfly-kids ">
            On The 29th Of July
          </p>
          <div className="w-full flex flex-col items-center justify-center ">
            <div className="flex items-center gap-5">
              <p className="lg:text-[100px] font-bold text-[#7F9B2D]  ">
                {" "}
                {days} :
              </p>
              <p className="lg:text-[100px] font-bold text-[#7F9B2D]  ">
                {" "}
                {hours} :
              </p>
              <p className="lg:text-[100px] font-bold text-[#7F9B2D]  ">
                {" "}
                {minutes} :
              </p>
              <p className="lg:text-[100px] font-bold text-[#7F9B2D]  ">
                {" "}
                {seconds}
              </p>
            </div>
            <div className="flex items-center lg:gap-[7rem]">
              <p className="  "> days</p>
              <p className="  ">hours</p>
              <p className="  ">minutes</p>
              <p className="  ">seconds </p>
            </div>
            <p className="text-[30px] text-center font-butterfly-kids my-5 ">
              At The Queens Park Event Center
            </p>
            <p className="text-[18px] lg:w-[40%] text-center font-semibold ">
              Water Corporation Drive/Trinity Avenue, Off Ligali Ayorinde
              Street, Victoria Island, Lagos
            </p>
          </div>
          <div className="w-full flex justify-center  items-center mt-12">
            <div className="flex flex-row items-center gap-5 justify-center w-[70%] my-12">
              <div
                className={
                  first
                    ? "w-[100%] h-[80px] lg:h-[300px] rounded-xl z-10 truncate lg:mb-12 mb-2 cursor-pointer mx-[-20px] ease-in-out duration-500 drop-shadow-xl"
                    : "w-[70%] h-[80px] lg:h-[300px] rounded-xl truncate mx-[-20px] cursor-pointer  ease-in-out duration-500"
                }
                onClick={() => {
                  setFirst(true);
                  setSecond(false);
                  setThird(false);
                }}
              >
                <Image
                  src="/images/couple2.jpeg"
                  alt="logo"
                  width={200}
                  height={1}
                  // objectFit="cover"
                  className="object-cover  w-full "
                />
              </div>
              <div
                className={
                  second
                    ? "w-[100%] h-[80px] lg:h-[300px] rounded-xl z-10 truncate lg:mb-12 mb-2 cursor-pointer mx-[-20px] ease-in-out duration-500 drop-shadow-xl"
                    : "w-[70%] h-[80px] lg:h-[300px] rounded-xl cursor-pointer  truncate mx-[-20px] ease-in-out duration-500"
                }
                onClick={() => {
                  setSecond(true);
                  setFirst(false);
                  setThird(false);
                }}
              >
                <Image
                  src="/images/couple3.jpeg"
                  alt="logo"
                  width={200}
                  height={1}
                  // objectFit="cover"
                  className="object-cover  w-full drop-shadow-md"
                />
              </div>
              <div
                className={
                  third
                    ? "w-[100%] h-[80px] lg:h-[300px] rounded-xl z-10 truncate lg:mb-12 mb-2 cursor-pointer mx-[-20px] ease-in-out duration-500 drop-shadow-xl"
                    : "w-[70%] h-[80px] lg:h-[300px] rounded-xl truncate mx-[-20px] cursor-pointer  ease-in-out duration-500"
                }
                onClick={() => {
                  setSecond(false);
                  setFirst(false);
                  setThird(true);
                }}
              >
                <Image
                  src="/images/couple4.jpeg"
                  alt="logo"
                  width={200}
                  height={1}
                  // objectFit="cover"
                  className="object-cover  w-full "
                />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-center items-center">
            <div className="w-fit h-fit text-white  hover:scale-150  hover:text-white px-9 cursor-pointer hover:bg-[#7F9B2D] py-2 bg-black rounded-lg ease-in-out duration-500">
              <p className="font-semibold  ">RSVP</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
