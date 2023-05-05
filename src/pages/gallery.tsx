import NavbarLight from "@/components/NavbarLight";
import Image from "next/image";
import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";

function gallery() {
  const [imageId, setImageId] = useState<number>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const images = [
    {
      id: 1,

      src: "/images/couple1.jpeg",
    },
    {
      id: 2,

      src: "/images/couple2.jpeg",
    },
    {
      id: 3,

      src: "/images/couple3.jpeg",
    },
    {
      id: 4,

      src: "/images/couple4.jpeg",
    },
    {
      id: 5,

      src: "/images/couple1.jpeg",
    },
    {
      id: 6,

      src: "/images/couple2.jpeg",
    },
    {
      id: 7,

      src: "/images/couple3.jpeg",
    },
    {
      id: 8,

      src: "/images/couple4.jpeg",
    },
    {
      id: 9,

      src: "/images/couple1.jpeg",
    },
    {
      id: 10,

      src: "/images/couple2.jpeg",
    },
    {
      id: 11,

      src: "/images/couple3.jpeg",
    },
    {
      id: 12,

      src: "/images/couple4.jpeg",
    },
    {
      id: 13,

      src: "/images/couple1.jpeg",
    },
    {
      id: 14,

      src: "/images/couple2.jpeg",
    },
    {
      id: 15,

      src: "/images/couple3.jpeg",
    },
    {
      id: 16,

      src: "/images/couple4.jpeg",
    },
    {
      id: 17,

      src: "/images/couple1.jpeg",
    },
    {
      id: 18,

      src: "/images/couple2.jpeg",
    },
    {
      id: 29,

      src: "/images/couple3.jpeg",
    },
    {
      id: 20,

      src: "/images/couple4.jpeg",
    },
    {
      id: 21,

      src: "/images/couple1.jpeg",
    },
    {
      id: 22,

      src: "/images/couple2.jpeg",
    },
    {
      id: 23,

      src: "/images/couple3.jpeg",
    },
    {
      id: 24,

      src: "/images/couple4.jpeg",
    },
  ];
  return (
    <div className="p-12">
      <div className="flex w-full justify-center items-center md:mt-5">
        <Image src="/icons/logoLight.svg" alt="logo" width={70} height={70} />
      </div>

      <NavbarLight />

      <div className="mt-8">
        <div className="grid grid-cols-4 gap-[1rem]">
          {images &&
            images.map((item, index) => (
              <div
                className="w-full h-[250px] rounded-xl truncate cursor-pointer"
                key={index}
                onClick={() => {
                  onOpen();
                  setImageId(item.id);
                }}
              >
                <Image
                  src={item.src}
                  alt="pic"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
        </div>
      </div>
      <div className="w-full flex justify-center items-center mt-12">
        <div className="w-fit h-fit text-white  hover:scale-150  hover:text-white px-9 cursor-pointer hover:bg-[#7F9B2D] py-2 bg-black rounded-lg ease-in-out duration-500">
          <p className="font-semibold  ">RSVP</p>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="h-[80vh] flex justify-center items-center">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
                //   autoWidth={true}
                autoplay={{
                  delay: 1000,
                }}
              >
                <SwiperSlide>
                  <div className="w-[100%] flex justify-center rounded-xl items-center truncate h-[300px] ">
                    <Image
                      src="/images/couple2.jpeg"
                      alt="tedd"
                      width={500}
                      height={800}
                      className=" rounded-[8px]"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full flex justify-center rounded-xl items-center truncate h-[300px] ">
                    <Image
                      src="/images/couple2.jpeg"
                      alt="tedd"
                      width={500}
                      height={800}
                      className=" rounded-[8px]"
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full flex justify-center truncate rounded-xl items-center h-[300px] ">
                    <Image
                      src="/images/couple2.jpeg"
                      alt="tedd"
                      width={500}
                      height={800}
                      className=" rounded-[8px]"
                    />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}

export default gallery;
