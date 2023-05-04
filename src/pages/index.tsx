import Image from "next/image";
import { Inter } from "next/font/google";
import { BiGift } from "react-icons/bi";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [days, setDays] = useState<number>();
  const [hours, setHours] = useState<number>();
  const [minutes, setMinutes] = useState<number>();
  const [seconds, setSeconds] = useState<number>();
  const [first, setFirst] = useState<boolean>(false);
  const [second, setSecond] = useState<boolean>(true);
  const [third, setThird] = useState<boolean>(false);

  const targetDate = new Date("June 29, 2023 00:00:00").getTime();

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
      <div className="h-screen w-screen hero p-12 text-white">
        <div className="flex w-full justify-center items-center md:mt-5">
          <Image src="/icons/logo.svg" alt="logo" width={70} height={70} />
        </div>

        <div className="w-full flex mt-8 justify-center items-center">
          <div className="md:w-[50%] md:flex md:gap-[5rem] md:items-center md:justify-center justify-center">
            <div className="hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]">
              <p className=" ">Home</p>
            </div>
            <div className="hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]">
              <p className="">Gallery</p>
            </div>
            <div className="hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]">
              <p className="">Gifting</p>
            </div>
            <div className="hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]">
              <p className="">RSVP</p>
            </div>
            <div className="hover:text-[#7F9B2D] ease-in-out duration-500 cursor-pointer text-[18px]">
              <BiGift className="text-xl" />
            </div>
          </div>
        </div>

        <div className="w-full h-[80%] flex flex-col gap-8 justify-center items-center">
          <p className="text-[150px] font-butterfly-kids animate-pulse">
            Chronicles Of Forever
          </p>

          <div className="w-fit h-fit text-black  hover:scale-150  hover:text-white px-9 cursor-pointer hover:bg-[#7F9B2D] py-2 bg-white rounded-lg ease-in-out duration-500">
            <p className="  ">RSVP</p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit p-12">
        <div className="w-full flex items-center justify-center">
          <p className="text-[50px] font-bold ">Once Upon A Time</p>
        </div>

        <div className="flex lg:flex-row flex-col items-center w-full justify-center ">
          <div className="lg:w-[300px] lg:h-[300px] z-10">
            <div className="lg:w-[300px] lg:h-[300px] rounded-full bg-red-200 truncate z-10 ">
              <Image
                src="/images/groom1.jpeg"
                alt="logo"
                width={300}
                height={300}
                // objectFit="cover"
                className="object-cover w-full h-full"
              />
            </div>
            <p className="lg:text-[30px] font-butterfly-kids text-center">
              A Boy
            </p>
          </div>
          <Image
            src="/icons/line1.svg"
            alt="logo"
            width={500}
            height={300}
            objectFit="cover"
            className="object-cover mx-[-15px]  animate-pulse "
          />
          <div className="lg:w-[300px] lg:h-[300px z-10">
            <div className="lg:w-[300px] lg:h-[300px] rounded-full bg-red-200 truncate ">
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
          className="object-cover ml-[39%] mt-[-60px] animate-pulse "
        />
        <div className="lg:ml-[35%] lg:w-[400px] lg:h-[400px]">
          <div className="lg:w-[400px] lg:h-[400px] rounded-full bg-red-200 truncate z-10  ">
            <Image
              src="/images/couple1.jpeg"
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
          <p className="text-[50px] text-center font-bold mb-1 mt-12 ">
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
            <div className="lg:flex lg:flex-row lg:items-center gap-5 lg:justify-center lg:w-[70%] my-12">
              <div
                className={
                  first
                    ? "w-[50%] h-[300px] rounded-xl z-10 truncate mb-12 cursor-pointer mx-[-20px] ease-in-out duration-500 drop-shadow-xl"
                    : "w-[25%] h-[300px] rounded-xl truncate mx-[-20px] cursor-pointer  ease-in-out duration-500"
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
                    ? "w-[50%] h-[300px] rounded-xl z-10 truncate mb-12 mx-[-20px] cursor-pointer  ease-in-out duration-500 drop-shadow-md"
                    : "w-[25%] h-[300px] rounded-xl cursor-pointer  truncate mx-[-20px] ease-in-out duration-500"
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
                    ? "w-[50%] h-[300px] rounded-xl z-10 truncate mb-12 cursor-pointer  mx-[-20px] ease-in-out duration-500 drop-shadow-xl"
                    : "w-[25%] h-[300px] rounded-xl truncate mx-[-20px] cursor-pointer  ease-in-out duration-500"
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
