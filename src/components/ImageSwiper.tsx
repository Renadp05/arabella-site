"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageSwiper() {
  const images = [
    "/slide2.jpg",
    "/slide4.jpg",
    "/slide5.jpg",
    "/slide6.jpg",
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-10">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        spaceBetween={20}
        slidesPerView={1}
        className="rounded-xl shadow-lg"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src={src}
                alt={`Slide ${idx + 1}`}
                fill
                priority={idx === 0}
                className="object-cover rounded-xl"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
