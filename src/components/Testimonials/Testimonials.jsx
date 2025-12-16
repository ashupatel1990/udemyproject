'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <div>
        <section className='testimonial-block bg-slate-100'>
            <div className="container">
                <div className="testimonial-main bg-surface lg:pt-20 sm:pt-16 pt-10 lg:pb-12 pb-8 justify-center items-center flex rounded-2xl">
                    <div className="content sm:w-2/3 w-[85%]">
                        <h3 className="heading3 text-center">Trusted By Professionals</h3>
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            speed={400}
                            modules={[Pagination, Autoplay, Navigation]}
                            className='h-full relative lg:mt-10 mt-7'
                            autoplay={{
                                delay: 4000
                            }}
                        >

                            <SwiperSlide className='lg:pb-24 pb-20'>
                                <div className="text-2xl font-normal text-center">
                                    {String.raw`"`}Working with this agency has been a game-changer for our business. Their team is knowledgeable, responsive and always goes the extra mile.{String.raw`"`}
                                </div>
                                <div className='text-button text-center mt-5'>
                                    Maverik // Ex-CTo, Ascent Web Services
                                </div>
                            </SwiperSlide>
        
                            <SwiperSlide className='lg:pb-24 pb-20'>
                                <div className="text-2xl font-normal text-center">
                                    {String.raw`"`}Working with this agency has been a game-changer for our business. Their team is knowledgeable, responsive and always goes the extra mile. {String.raw`"`}
                                </div>
                                <div className='text-button text-center mt-5'>
                                    Maverik // Ex-CTo, Ascent Web Services
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
export default Testimonials;