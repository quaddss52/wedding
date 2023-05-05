import NavbarLight from "@/components/NavbarLight";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { MdKeyboardBackspace } from "react-icons/md";

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
  return (
    <>
      <div className="p-12">
        <div className="flex w-full justify-center items-center md:mt-5">
          <Image src="/icons/logoLight.svg" alt="logo" width={70} height={70} />
        </div>

        <NavbarLight />
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
