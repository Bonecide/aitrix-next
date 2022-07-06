import React, { FC } from 'react'
import { connect, useSelector } from 'react-redux'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import s from "../MainPage.module.css";
import "swiper/css/navigation";
import { AppStateType } from '../../../redux/store';

export const Reviews:FC = (props) => {
    const reviewsList = useSelector((state:AppStateType) => state.mainPageData.reviewsList)
    const swiper = useSwiper()
  return (
    <div className="container">
    <div className="row">
      <div className="col-xs-12 col-lg-6">
        <div className={s.reviews__info}>
          <div className={s.reviews__subtext}>Отзывы</div>
          <div className={s.reviews__text}>Отзывы наших клиентов</div>
        </div>
      </div>
      <div className="col-xs-12 col-lg-6">
        <div className={s.reviews__container}>
        {reviewsList.length >= 1 ? <Swiper  slidesPerView={1} className={s.projects__list}> 
        <div className={s.reviews__btns}>
            <span><i className="fa-solid fa-chevron-left"></i></span>
            <span><i className="fa-solid fa-chevron-right"></i></span>
          </div>
          {reviewsList.map(r=>{
            return(
              <SwiperSlide className={s.slide} key={r.id}>
              <div className={s.review}>
                <div className={s.review__info}>
                  <div className={s.review__img} style={{backgroundImage:`url(${r.imgUrl || 'https://isobarscience.com/wp-content/uploads/2020/09/default-profile-picture1.jpg'})`}}>
                    
                  </div>
                  <div className={s.review__author}>
                    <h5>{r.name}</h5>
                    <p>{r.whoIs}</p>
                  </div>
                </div>
                <div className={s.review__text}>{r.text}</div>
              </div>
            </SwiperSlide>
            )
          }) 
        }
        </Swiper>
        : <div className={s.none_content}>
              Контент отсутствует{" "}
                <i className="fa-solid fa-circle-exclamation"></i>
              </div>
               }
        </div>
      </div>
    </div>
  </div>
  )
}