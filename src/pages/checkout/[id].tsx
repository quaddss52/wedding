import NavbarLight from "@/components/NavbarLight";
import { Input } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdKeyboardBackspace } from "react-icons/md";

function checkout() {
  const router = useRouter();
  const { id } = router.query;
  const [fullName, setFullName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [cardNo, setCardNo] = useState<number>();
  return (
    <div className="p-12">
      <div className="flex w-full justify-center items-center md:mt-5">
        <Image src="/icons/logoLight.svg" alt="logo" width={70} height={70} />
      </div>
      <NavbarLight />

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
