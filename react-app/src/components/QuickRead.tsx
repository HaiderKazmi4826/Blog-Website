import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { generalStyles, sectionStyle, sectionTitle } from "../constants/styles";
import { quickRead } from "../constants/data";
import { TbSquareRotated } from "react-icons/tb";

const QuickRead = () => {
  return (
    <section className={sectionStyle}>
      <div className={`${generalStyles.container}`}>
        <h2 className="section-title" data-text="quick read">
          Quick read
        </h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            850: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {quickRead.map((item, index) => {
            const{url, date, time, title} = item;
            return (
              <SwiperSlide key={index} className="relative rounded-sm">
                <img src={url} alt="" className="w-full h-full object-cover" />
                <div className="px-[10px] pt-[10px] pb-[20px] bg-transparent-dark-color absolute w-full left-[0] bottom-[0]">
                  <div className="flex items-center text-xsm gap-[22px] mb-[5px]">
                    <span>{date}</span>
                    <span>
                      <TbSquareRotated
                        fill="white"
                        size={10}
                        className="text-light-color"
                      />
                    </span>
                    <span>{time}</span>
                  </div>
                  <h3 className="text-light-color text-md font-bold">
                    {title}
                  </h3>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default QuickRead;
