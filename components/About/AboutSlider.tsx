"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import styles from './About.module.css';

export default function AboutSlider({ images }: { images: any[] }) {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={16}
      slidesPerView={2}
      loop={true} 
      speed={6000} 
      autoplay={{
        delay: 0, 
        disableOnInteraction: false, 
        pauseOnMouseEnter: false,
        stopOnLastSlide: false,
      }}
      allowTouchMove={true} 
      breakpoints={{
        768: { slidesPerView: 3 },
      }}
      className={styles.swiperContainer}
    >
      {images.map((item: any, index: number) => (
        <SwiperSlide key={index} className={styles.slide}>
          <img src={item.image} alt="xSchool" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}