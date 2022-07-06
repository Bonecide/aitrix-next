import React, { FC } from 'react'
import s from "../MainPage.module.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation } from "swiper";
import "swiper/css/navigation";
import { useSelector } from 'react-redux';
import { AppStateType } from '../../../redux/store';

export const ProjectsSlider: FC= (props) => {
  const projectsList = useSelector((state: AppStateType)=>state.mainPageData.projectsList)
  return (
    <div className="container">
    <div className="row">
      <div className="col-12">
        <div className={s.projects__subtitle}>Портфолио</div>
        <div className={s.projects__title}>Завершенные проекты</div>
        <p className={s.projects__offer}>Реализуем проекты, позволяющие ускорить бизнес наших клиентов`</p>
      </div>
    </div>
    <div className="row">
      <div className="col-12">
      <Swiper modules={[Navigation]} navigation={true} 
      breakpoints={{
        340: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }} className={s.projects__list}>
        {projectsList.map(p => {
          return(
            <SwiperSlide className={s.slide} key={p.id}>
            <div className={s.project}>
              <div className={s.project__img}>
                <img src={p.imgUrl} alt="review_img"/>
              </div>
              <div className={s.project__name}>{p.name}</div>
              <div className={s.project__description}>{p.text}</div>
            </div>
          </SwiperSlide>
          )
        })}
        </Swiper>
      </div>
    </div>
  </div>
  )
}
