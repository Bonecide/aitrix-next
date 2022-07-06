import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import s from "../styles/MainPage.module.css";
import  AppStateType  from "../redux/store";
import { Reviews }  from "../Components/MainPage/ReviewsSlider/ReviewsSlider";
import { ProjectsSlider }  from "../Components/MainPage/ProjectsSlider/ProjectsSlider";
import  { getServicesListTC, getTechnologyListTC, getReviewsListTC }  from "../redux/MainPageReducer";
import { OrderForm }  from "../Components/MainPage/OrderForm";
import PageLoader from "../Components/Assets/PageLoader/PageLoader";
import Link from "next/link";
import Image from "next/future/image";
//IMG
import logo_img from "../img/logo.png";
import offer_img from "../img/offer_img.png";
import offer_img_clip from "../img/offer__img_clip.png";
import offer_img_clip2 from "../img/offer__img_clip2.png";
import about_img from "../img/about_img.png";
import dev_img from "../img/dev_img.png";
import advantage_img from "../img/advantage_img.png";
import advantage_img2 from "../img/advantage_img2.png";
import advantage_img3 from "../img/advantage_img3.png";
import advantage_item from "../img/adv_item.svg";
import stages_clip_img_1 from "../img/stages_clipp3.png";
import stages_clip_img_2 from "../img/stages_clipp2.png";



type PropsType = {};

export default function MainPage() {
 
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getServicesListTC());
    dispatch(getTechnologyListTC());
    dispatch(getReviewsListTC());
  }, []);
 
  const mainPageData = useSelector((state: AppStateType) => state.mainPageData);
  return (
    <>
      {mainPageData.isLoading && <PageLoader />}
      <section className={s.offer} id="#main">
      
        <Image layout="raw" src={offer_img_clip} className={`${s.offer__img_clip} ${s.left}  `} alt="offer__clipping" />
        <Image layout="raw" src={offer_img_clip2} className={`${s.offer__img_clip} ${s.right}  `} alt="offer__clipping" />
        <div className={`${s.offer__container} container`}>
          <div className="row">
            <div className="col-12">
              <header className={`${s.header}`}>
                <div className={s.header__logo}>
                  <Image layout="raw"  src={logo_img} alt="logo_img" />
                </div>
                <ul className={s.header__nav}>
                  <Link href={"#about"}>
                    <a>
                    <span>О нас</span>
                    </a>
                    </Link>
                  <Link href={"#services"}>
                    <a>
                    <span>Услуги</span>
                    </a>
                  </Link>
                  <Link href={"#advantage"}>
                    <a>
                    <span>Преимущества</span>
                    </a>
                  </Link>
                  <Link href={"#stages"}>
                    <a>
                    <span>Этапы Работы</span>
                    </a>
                  </Link>
                  <Link href={"#contact"}>
                    <a>
                    <span>Контакты</span>
                    </a>
                  </Link>
                </ul>
              </header>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className={`${s.offer__text} `}>
                <h2>
                  Студия <br /> Web-разработки
                </h2>
              </div>
            </div>
            <div className="col-6">
              <Image layout="raw" src={offer_img} alt="offer_img" className={`${s.offer__img} `} />
            </div>
          </div>
        </div>
      </section>
      <section className={s.about} id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-lg-6  ">
              <div className={s.about__img}>
                <Image layout="raw" src={about_img} alt="about_img" />
              </div>
            </div>
            <div className="col-xs-12 col-lg-6">
              <div className={`${s.section__titles}  `}>
                <div className={s.subtitle}>О нас</div>
                <h3 className={s.title}>Почему Aitrix?</h3>
              </div>
              <p className={`${s.about__text}  `}>
                Мы специализируемся на создании эффективных инструментов
                иготовых проектов для электронной коммерции и присутствия
                винтернете. Мы уже долгое время сотрудничаем с малым бизнесом
                вРоссии и СНГ и прекрасно понимаем нужды наших
                клиентов,предоставляем надежные решения для повышения прибыли
                вашегобизнеса или стартаппа.
              </p>
              <div className={`${s.about__list}  `}>
                <div className={s.item}>
                  <div className={s.item__img}>
                    <svg width="35" height="19" viewBox="0 0 35 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12.075 2.1001H8.97493C7.82877 2.10012 6.70027 2.38359 5.68925 2.92546C4.67823 3.46732 3.81585 4.25088 3.17837 5.20681C2.54089 6.16275 2.14797 7.26162 2.03435 8.40622C1.92074 9.55082 2.08993 10.7059 2.52697 11.7692C2.96401 12.8326 3.65543 13.7715 4.54006 14.5029C5.4247 15.2343 6.4753 15.7356 7.59893 15.9625C8.72257 16.1894 9.88461 16.135 10.9823 15.804C12.08 15.473 13.0795 14.8756 13.8923 14.0647C15.1633 12.7969 17.5 9.1001 17.5 9.1001C17.5 9.1001 19.8296 5.41965 21.0898 4.15343C21.9005 3.33881 22.8989 2.73744 23.9966 2.40263C25.0942 2.06781 26.2572 2.00988 27.3825 2.23396C28.5078 2.45805 29.5607 2.95723 30.4478 3.68728C31.3349 4.41734 32.0289 5.35571 32.4682 6.41927C32.9076 7.48283 33.0788 8.63873 32.9666 9.78455C32.8544 10.9304 32.4623 12.0307 31.8251 12.9881C31.1879 13.9456 30.3252 14.7304 29.3135 15.2733C28.3018 15.8161 27.1723 16.1001 26.025 16.1001H22.925" stroke="#0058FF" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className={s.item__body}>
                    <p>Студия полного цикла</p>
                    <span>
                      AITRIX - это студия в которой создают готовый продукт
                      дляповышения продаж и присутствия и интернете.
                    </span>
                  </div>
                </div>
                <div className={s.item}>
                  <div className={s.item__img}>
                    <svg width="36" height="22" viewBox="0 0 36 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.4681 3.93366C27.4573 2.83062 25.011 0.56218 21.5662 0.0453834C20.3006 -0.138038 19.0131 0.242586 17.9994 1.04124C16.9875 0.289836 15.6994 -0.0957103 14.4281 0.0924147C9.945 0.765618 7.12687 4.43132 7.00875 4.58991C6.56752 5.17452 6.69763 5.99648 7.29703 6.42577C7.5282 6.59153 7.80798 6.6808 8.09522 6.68045C8.51181 6.68045 8.92153 6.49588 9.18534 6.1455C9.20818 6.11471 11.446 3.1973 14.8385 2.68761C15.2579 2.63506 15.6811 2.72425 16.0512 2.93277L12.78 6.18132C12.0825 6.85398 11.6494 7.7071 11.6494 8.71335C11.6494 9.67038 12.0325 10.5694 12.7271 11.2448C13.4719 11.9235 14.3944 12.2462 15.3787 12.2462C16.3631 12.2462 17.2879 11.8736 17.9837 11.1967L18.6221 10.576L25.6084 16.094C25.7384 16.1965 25.7578 16.3811 25.6365 16.5298L24.0789 18.4849C23.9752 18.608 23.7836 18.6268 23.6764 18.543L22.4265 17.5209L20.9534 19.0385C20.8215 19.1957 20.6527 19.2334 20.5649 19.2419C20.4717 19.2504 20.3083 19.2487 20.1817 19.1479L18.3587 17.6352L17.4769 18.4368L17.3187 18.5975C16.99 18.9889 16.5261 19.2351 16.0092 19.2865C15.4766 19.331 14.9826 19.1908 14.6311 18.9156L9.57938 14.4719H5.4V3.99929H0V17.9774L3.6 17.9796C4.26038 17.9796 4.81331 17.6129 5.12663 17.0969H8.53762L12.8722 20.9065C13.7081 21.5704 14.7319 21.9204 15.795 21.9204C15.9567 21.9204 16.1202 21.9135 16.2819 21.8964C17.048 21.8195 17.7675 21.5649 18.3896 21.1581L18.4405 21.2026C19.1172 21.7427 19.975 21.9907 20.8419 21.9015C21.5838 21.8263 22.2639 21.517 22.7493 21.0621C23.9356 21.5098 25.3419 21.1902 26.1946 20.1614L27.7522 18.2063C28.7911 16.9583 28.5942 15.1175 27.3109 14.1042L20.5441 8.75792L21.0155 8.29953C21.5429 7.78678 21.5429 6.95586 21.0155 6.44344C20.4882 5.93069 19.634 5.93069 19.1064 6.44344L16.0762 9.38601C15.705 9.75241 15.0581 9.75241 14.6869 9.38601C14.5006 9.20652 14.3986 8.96727 14.3986 8.7128C14.3986 8.45643 14.5005 8.21712 14.6957 8.02757L19.5281 3.23476C19.9675 2.80573 20.5704 2.59218 21.156 2.68624C24.5169 3.19046 26.7922 6.11679 26.8147 6.14741C26.9884 6.37464 27.2233 6.52727 27.4807 6.60548H30.6V16.1813C30.6 17.1476 31.4061 17.934 32.3494 17.934L36 17.9829V3.98835L28.4681 3.93366ZM2.7 16.2329C2.20781 16.2329 1.8 15.8367 1.8 15.3584C1.8 14.873 2.20781 14.484 2.7 14.484C3.19219 14.484 3.6 14.8766 3.6 15.3634C3.6 15.8391 3.19219 16.2329 2.7 16.2329ZM33.3 16.2329C32.8078 16.2329 32.4 15.8367 32.4 15.3584C32.4 14.873 32.8078 14.484 33.3 14.484C33.7922 14.484 34.2 14.8732 34.2 15.3584C34.2 15.8391 33.795 16.2329 33.3 16.2329Z" fill="#0058FF" /></svg>
                  </div>
                  <div className={s.item__body}>
                    <p>Гарантия</p>
                    <span>
                      Мы соблюдаем оговоренные сроки сдачи проектов
                      иподдерживаем наших клиентов в случае форс-мажоров.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.dev} id="services">
        <div className="container">
          <div className="row">
            <div className="col-12  ">
              <div className={`${s.section__titles}`}>
                <div className={s.subtitle}>Услуги</div>
                <h3 className={s.title}>Что мы можем вам предложить?</h3>
              </div>
              <p className={s.dev__info}>
                Весь спектр услуг от аудита сайтов до формиования маркетинговых
                стратегий в сфере промышленности
              </p>
            </div>
            <div className="col-12  ">
              <div className={s.dev__list}>
                {mainPageData.servicesList.length >= 1 ? (
                  mainPageData.servicesList.map((i) => {
                    return (
                      <div className={s.item} key={i.id}>
                        <div className={s.item__info}>
                          <img src={i.imgUrl} alt="dev_img" />
                          <h4>{i.name}</h4>
                        </div>
                        <p className={s.item__content}>{i.description}</p>
                      </div>
                    );
                  })
                ) : (
                  <div className={s.none_content}>
                    Контент отсутствует{" "}
                    <i className="fa-solid fa-circle-exclamation"></i>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {mainPageData.projectsList.length >= 1 && <section className={s.projects}><ProjectsSlider/></section>} */}
      <section className={s.advantage} id="advantage">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-7  ">
              <div className={`${s.section__titles} ${s.advantage__titles}`}>
                <div className={s.subtitle}>Особенности</div>
                <h3 className={`${s.title} ${s.advantage__title}`}>Наши премущества</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className={s.advantage__list}>
              <div className={`${s.advantage__item} ${s.developing}`}>
                <div className={`${s.advantage__info}  `}>
                  <div className={s.advantage__subtitle}>Создаём сайты любой сложности</div>
                  <p className={s.developing__text}>
                    Для нас нет границ, мы сделаем сайт любой сложности. Мы не
                    зависим от шаблонов и их ограничений.
                  </p>
                  <p className={s.developing__text}>
                    А самое главное, мы создадим красивую визуальную упаковку для
                    вашего бизнеса, которая точно будет продавать.
                  </p>
                  <p className={s.developing__text}>Сегодня, как никогда раньше, нужно выделяться в
                    высоко-конкурентном рынке интернета. И визуальная упаковка
                    поможет вам в этом</p>
                  <div className={s.developing__list}>
                    <div className={s.item}>
                      <div className={s.item__info}>
                        <p>Красивый дизайн</p>
                      </div>
                    </div>
                    <div className={s.item}>
                      <div className={s.item__info}>
                        <p>Продуманный интерфейс</p>
                      </div>
                    </div>
                    <div className={s.item}>
                      <div className={s.item__info}>
                        <p>Оптимизированный код</p>
                      </div>
                    </div>
                    <div className={s.item}>
                      <div className={s.item__info}>
                        <p>Точки захвата внимания</p>
                      </div>
                    </div>
                    <div className={s.item}>
                      <div className={s.item__info}>
                        <p>Лидогенерация</p>
                      </div>
                    </div>
                    <div className={s.item}>
                      <div className={s.item__info}>
                        <p>Высокая посещаемость</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${s.advantage__img}  `}>
                  <Image src={advantage_img} alt="advantage_img" className={s.advantage_img} />
                </div>
              </div>
              <div className={`${s.advantage__item} ${s.marketing}`}>
                <div className={`${s.advantage__img}  `}>
                  <Image src={advantage_img2} alt="advantage_img" className={s.advantage_img} />
                </div>
                <div className={`${s.advantage__info}  `}>
                  <div className={s.advantage__subtitle}>Эффективно продвигаем и привлекаем клиентов на ваш сайт</div>
                  <div className={s.marketing__text}>
                    <div className={s.marketing__img}>
                      <svg width="37" height="40" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18 6.5V12H23C23.9889 12 24.9556 11.6774 25.7778 11.0731C26.6001 10.4687 27.241 9.60975 27.6194 8.60476C27.9978 7.59977 28.0968 6.4939 27.9039 5.42701C27.711 4.36011 27.2348 3.3801 26.5355 2.61092C25.8363 1.84173 24.9454 1.3179 23.9754 1.10568C23.0055 0.893465 22.0002 1.00238 21.0866 1.41866C20.173 1.83495 19.3921 2.5399 18.8427 3.44437C18.2932 4.34884 18 5.4122 18 6.5V6.5ZM18 6.5V12H13C12.0111 12 11.0444 11.6774 10.2222 11.0731C9.3999 10.4687 8.75904 9.60975 8.3806 8.60476C8.00217 7.59977 7.90315 6.4939 8.09608 5.42701C8.289 4.36011 8.76521 3.3801 9.46447 2.61092C10.1637 1.84173 11.0546 1.3179 12.0245 1.10568C12.9945 0.893465 13.9998 1.00238 14.9134 1.41866C15.827 1.83495 16.6079 2.5399 17.1573 3.44437C17.7068 4.34884 18 5.4122 18 6.5V6.5Z" stroke="#0058FF" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" />
                        <path d="M33.0833 12H3.91667C2.30584 12 1 13.2792 1 14.8571V19.1429C1 20.7208 2.30584 22 3.91667 22H33.0833C34.6942 22 36 20.7208 36 19.1429V14.8571C36 13.2792 34.6942 12 33.0833 12Z" stroke="#0058FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M18.5 12V39M33 21.9474V34.7368C33 35.8675 32.5417 36.9519 31.7259 37.7513C30.9101 38.5508 29.8037 39 28.65 39H8.35C7.19631 39 6.08987 38.5508 5.27409 37.7513C4.4583 36.9519 4 35.8675 4 34.7368V21.9474H33Z" stroke="#0058FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className={s.marketing__info}>
                      <p>Качественное упакуем ваше предложение</p>
                      <span>Качественная упаковка играет большую роль о принятии решения в вашупользу. Мы знаем, как привлечь внимание к вашему продукту.</span>
                    </div>
                  </div>
                  <div className={s.marketing__text}>
                    <div className={s.marketing__img}>
                      <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17.2941 7.5C15.9836 7.5 14.7268 8.02678 13.8002 8.96447C12.8735 9.90215 12.3529 11.1739 12.3529 12.5C12.3529 13.8261 12.8735 15.0979 13.8002 16.0355C14.7268 16.9732 15.9836 17.5 17.2941 17.5C18.6046 17.5 19.8614 16.9732 20.7881 16.0355C21.7147 15.0979 22.2353 13.8261 22.2353 12.5C22.2353 11.1739 21.7147 9.90215 20.7881 8.96447C19.8614 8.02678 18.6046 7.5 17.2941 7.5ZM14.8235 12.5C14.8235 11.837 15.0838 11.2011 15.5471 10.7322C16.0105 10.2634 16.6389 10 17.2941 10C17.9494 10 18.5778 10.2634 19.0411 10.7322C19.5044 11.2011 19.7647 11.837 19.7647 12.5C19.7647 13.163 19.5044 13.7989 19.0411 14.2678C18.5778 14.7366 17.9494 15 17.2941 15C16.6389 15 16.0105 14.7366 15.5471 14.2678C15.0838 13.7989 14.8235 13.163 14.8235 12.5ZM0 3.75C0 2.75544 0.39044 1.80161 1.08543 1.09835C1.78042 0.395088 2.72302 0 3.70588 0H30.8824C31.8652 0 32.8078 0.395088 33.5028 1.09835C34.1978 1.80161 34.5882 2.75544 34.5882 3.75V12.5H32.1176V10H29.6471C28.3366 10 27.0798 9.47322 26.1531 8.53553C25.2265 7.59785 24.7059 6.32608 24.7059 5V2.5H9.88235V5C9.88235 6.32608 9.36177 7.59785 8.43512 8.53553C7.50847 9.47322 6.25166 10 4.94118 10H2.47059V15H4.94118C6.25166 15 7.50847 15.5268 8.43512 16.4645C9.36177 17.4021 9.88235 18.6739 9.88235 20V22.5H22.2353V25H3.70588C2.72302 25 1.78042 24.6049 1.08543 23.9017C0.39044 23.1984 0 22.2446 0 21.25V3.75ZM3.70588 2.5C3.37826 2.5 3.06406 2.6317 2.8324 2.86612C2.60074 3.10054 2.47059 3.41848 2.47059 3.75V7.5H4.94118C5.59642 7.5 6.22482 7.23661 6.68815 6.76777C7.15147 6.29893 7.41176 5.66304 7.41176 5V2.5H3.70588ZM30.8824 2.5H27.1765V5C27.1765 5.66304 27.4368 6.29893 27.9001 6.76777C28.3634 7.23661 28.9918 7.5 29.6471 7.5H32.1176V3.75C32.1176 3.41848 31.9875 3.10054 31.7558 2.86612C31.5242 2.6317 31.21 2.5 30.8824 2.5ZM3.70588 22.5H7.41176V20C7.41176 19.337 7.15147 18.7011 6.68815 18.2322C6.22482 17.7634 5.59642 17.5 4.94118 17.5H2.47059V21.25C2.47059 21.5815 2.60074 21.8995 2.8324 22.1339C3.06406 22.3683 3.37826 22.5 3.70588 22.5ZM37.0588 12.5V5.2125C37.7817 5.47111 38.4074 5.9502 38.8499 6.58377C39.2924 7.21734 39.5298 7.97418 39.5294 8.75V12.5H37.0588ZM22.2353 27.5V30H8.64706C7.88037 30.0004 7.13243 29.7602 6.50632 29.3124C5.8802 28.8647 5.40674 28.2314 5.15118 27.5H22.2353ZM28.4118 15C27.4289 15 26.4863 15.3951 25.7913 16.0983C25.0963 16.8016 24.7059 17.7554 24.7059 18.75V36.25C24.7059 37.2446 25.0963 38.1984 25.7913 38.9016C26.4863 39.6049 27.4289 40 28.4118 40H38.2941C39.277 40 40.2196 39.6049 40.9146 38.9016C41.6096 38.1984 42 37.2446 42 36.25V18.75C42 17.7554 41.6096 16.8016 40.9146 16.0983C40.2196 15.3951 39.277 15 38.2941 15H28.4118ZM28.4118 25H30.8824C31.21 25 31.5242 25.1317 31.7558 25.3661C31.9875 25.6005 32.1176 25.9185 32.1176 26.25C32.1176 26.5815 31.9875 26.8995 31.7558 27.1339C31.5242 27.3683 31.21 27.5 30.8824 27.5H28.4118C28.0841 27.5 27.7699 27.3683 27.5383 27.1339C27.3066 26.8995 27.1765 26.5815 27.1765 26.25C27.1765 25.9185 27.3066 25.6005 27.5383 25.3661C27.7699 25.1317 28.0841 25 28.4118 25ZM35.8235 25H38.2941C38.6217 25 38.9359 25.1317 39.1676 25.3661C39.3993 25.6005 39.5294 25.9185 39.5294 26.25C39.5294 26.5815 39.3993 26.8995 39.1676 27.1339C38.9359 27.3683 38.6217 27.5 38.2941 27.5H35.8235C35.4959 27.5 35.1817 27.3683 34.95 27.1339C34.7184 26.8995 34.5882 26.5815 34.5882 26.25C34.5882 25.9185 34.7184 25.6005 34.95 25.3661C35.1817 25.1317 35.4959 25 35.8235 25ZM28.4118 30H30.8824C31.21 30 31.5242 30.1317 31.7558 30.3661C31.9875 30.6005 32.1176 30.9185 32.1176 31.25C32.1176 31.5815 31.9875 31.8995 31.7558 32.1339C31.5242 32.3683 31.21 32.5 30.8824 32.5H28.4118C28.0841 32.5 27.7699 32.3683 27.5383 32.1339C27.3066 31.8995 27.1765 31.5815 27.1765 31.25C27.1765 30.9185 27.3066 30.6005 27.5383 30.3661C27.7699 30.1317 28.0841 30 28.4118 30ZM35.8235 30H38.2941C38.6217 30 38.9359 30.1317 39.1676 30.3661C39.3993 30.6005 39.5294 30.9185 39.5294 31.25C39.5294 31.5815 39.3993 31.8995 39.1676 32.1339C38.9359 32.3683 38.6217 32.5 38.2941 32.5H35.8235C35.4959 32.5 35.1817 32.3683 34.95 32.1339C34.7184 31.8995 34.5882 31.5815 34.5882 31.25C34.5882 30.9185 34.7184 30.6005 34.95 30.3661C35.1817 30.1317 35.4959 30 35.8235 30ZM28.4118 35H30.8824C31.21 35 31.5242 35.1317 31.7558 35.3661C31.9875 35.6005 32.1176 35.9185 32.1176 36.25C32.1176 36.5815 31.9875 36.8995 31.7558 37.1339C31.5242 37.3683 31.21 37.5 30.8824 37.5H28.4118C28.0841 37.5 27.7699 37.3683 27.5383 37.1339C27.3066 36.8995 27.1765 36.5815 27.1765 36.25C27.1765 35.9185 27.3066 35.6005 27.5383 35.3661C27.7699 35.1317 28.0841 35 28.4118 35ZM35.8235 35H38.2941C38.6217 35 38.9359 35.1317 39.1676 35.3661C39.3993 35.6005 39.5294 35.9185 39.5294 36.25C39.5294 36.5815 39.3993 36.8995 39.1676 37.1339C38.9359 37.3683 38.6217 37.5 38.2941 37.5H35.8235C35.4959 37.5 35.1817 37.3683 34.95 37.1339C34.7184 36.8995 34.5882 36.5815 34.5882 36.25C34.5882 35.9185 34.7184 35.6005 34.95 35.3661C35.1817 35.1317 35.4959 35 35.8235 35ZM27.1765 18.75C27.1765 18.4185 27.3066 18.1005 27.5383 17.8661C27.7699 17.6317 28.0841 17.5 28.4118 17.5H38.2941C38.6217 17.5 38.9359 17.6317 39.1676 17.8661C39.3993 18.1005 39.5294 18.4185 39.5294 18.75V21.25C39.5294 21.5815 39.3993 21.8995 39.1676 22.1339C38.9359 22.3683 38.6217 22.5 38.2941 22.5H28.4118C28.0841 22.5 27.7699 22.3683 27.5383 22.1339C27.3066 21.8995 27.1765 21.5815 27.1765 21.25V18.75Z" fill="#0058FF" />
                      </svg>
                    </div>
                    <div className={s.marketing__info}>
                      <p>Мы экономим бюджет</p>
                      <span>На первых этапах специалист постоянно мониторит рекламную компанию. Отслеживает неэффективные объявления и отключает их, чтобы они несливали бюджет.</span>
                    </div>
                  </div>
                  <div className={s.marketing__text}>
                  <div className={s.marketing__img}>
                    <svg width="26" height="41" viewBox="0 0 26 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.9817 0H3.64833C1.63167 0 0 1.55833 0 3.575V36.575C0 38.5917 1.63167 40.3333 3.64833 40.3333H21.9817C23.9983 40.3333 25.6483 38.5917 25.6483 36.575V3.575C25.6483 1.55833 23.9983 0 21.9817 0ZM21.9817 37.1666H3.64833V4.16663H21.9817V37.1666ZM14.2817 22.44V25.6483L20.1483 20.1667L14.2817 14.7033V17.82C8.58 18.6083 6.30667 22.5133 5.48167 26.4367C7.51667 23.6867 10.2117 22.44 14.2817 22.44Z" fill="#0058FF" />
                    </svg>
                    </div>
                    <div className={s.marketing__info}>
                      <p>Используем мобильный трафик на 100%</p>
                      <span>Поднимаем отдачу от сайта минимум в 2 раза. Вы больше не будете терять мобильный трафик.</span>
                    </div>
                  </div>
                  <div className={s.marketing__text}>
                  <div className={s.marketing__img}>
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.5 22.01C9.7144 22.2393 8.95648 22.5545 8.24 22.95L8.5 27.48L3.94 27.24C3.54453 27.9565 3.22929 28.7144 3 29.5L6.37 32.55L3 35.55C3.22569 36.3369 3.54109 37.0952 3.94 37.81L8.5 37.63L8.27 42.17C8.98677 42.5623 9.74471 42.8742 10.53 43.1L13.58 39.73L16.58 43.1C17.3666 42.8778 18.1249 42.5658 18.84 42.17L18.61 37.63L23.15 37.86C23.5458 37.1449 23.8578 36.3866 24.08 35.6L20.71 32.6L24.08 29.55C23.8609 28.7479 23.5523 27.9731 23.16 27.24L18.62 27.47L18.85 22.94C18.1352 22.5411 17.3769 22.2257 16.59 22L13.59 25.37L10.5 22.01Z" stroke="#0058FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M13.5498 36.52C15.7369 36.52 17.5098 34.747 17.5098 32.56C17.5098 30.3729 15.7369 28.6 13.5498 28.6C11.3628 28.6 9.58984 30.3729 9.58984 32.56C9.58984 34.747 11.3628 36.52 13.5498 36.52Z" stroke="#0058FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M29.9102 7.14001C29.1212 7.36441 28.3598 7.67635 27.6402 8.07001L27.8802 12.61L23.3402 12.38C22.9444 13.0951 22.6323 13.8535 22.4102 14.64L25.7702 17.64L22.4102 20.69C22.6324 21.4925 22.9444 22.2674 23.3402 23L27.8802 22.77L27.6402 27.3C28.3593 27.6971 29.1208 28.0124 29.9102 28.24L32.9102 24.87L35.9102 28.24C36.6958 28.0107 37.4537 27.6955 38.1702 27.3L38.0002 22.76L42.5302 22.99C42.9256 22.2735 43.2409 21.5156 43.4702 20.73L40.1002 17.68L43.4702 14.68C43.2445 13.8931 42.9291 13.1348 42.5302 12.42L38.0002 12.61L38.2302 8.07001C37.5232 7.67907 36.7754 7.36719 36.0002 7.14001L33.0002 10.51L29.9102 7.14001Z" stroke="#0058FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M32.9502 21.64C35.1373 21.64 36.9102 19.867 36.9102 17.68C36.9102 15.4929 35.1373 13.72 32.9502 13.72C30.7632 13.72 28.9902 15.4929 28.9902 17.68C28.9902 19.867 30.7632 21.64 32.9502 21.64Z" stroke="#0058FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    </div>
                    <div className={s.marketing__info}>
                      <p>Автоматическая оптимизация</p>
                      <span>Снижаем стоимость заявки в 1,5 - 3 раза. Используем полный список\инструментов оптимизации.</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={`${s.advantage__item} ${s.support}`}>
                <div className={`${s.support__info}  `}>
                  <h3 className={s.support__title}>Поддержка ваших проектов в любой ситуации</h3>
                  <p>После создания сайта мы не бросаем вас на произвол судьбы.</p>
                  <p>Мы продолжаем следить за проектом.</p>
                  <p>При необходимости даем рекомендации и помогаем достичь нужного эффекта от правильно разработанного сайта.</p>
                </div>
                <div className={`${s.advantage__img}  `}>
                  <Image src={advantage_img3} alt="support_img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.tech} id="#features">
        <div className="container">
          <div className="row">
            <div className="col-12  ">
            <div className={`${s.section__titles} ${s.advantage__titles}`}>
                <div className={s.subtitle}>Особенности</div>
                <h3 className={`${s.title} ${s.advantage__title}`}>Технологии которые мы используем</h3>
              </div>
            </div>
            <div className="col-12  ">
              <div className={s.tech__list}>
                {mainPageData.technologyList.length >= 1 ? (
                  mainPageData.technologyList.map((t) => {
                    return (
                      <div className={s.tech__item} key={t.id}>
                        <div className={s.tech__img} style={{backgroundImage:`url(${t.imgUrl})`}}></div>
                        <div className={s.tech__info}>
                          <h5>{t.name}</h5>
                          <p>{t.description}</p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className={s.none_content}>
                    Контент отсутствует{" "}
                    <i className="fa-solid fa-circle-exclamation"></i>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={s.stages} id="stages">
        {/* <img
          src={stages_clip_img_1}
          alt="stages_clip_img_1"
          className={`${s.stages__clipp_img} ${s.stages__clipp_img_1}`}
        />
        <img
          src={stages_clip_img_2}
          alt="stages_clip_img_2"
          className={`${s.stages__clipp_img} ${s.stages__clipp_img_2}`}
        /> */}
        <div className="container">
          <div className="row">
            <div className="col-12  ">
              <h3 className={s.stages__title}>Этапы работ</h3>
              <p className={s.stages__text}>
                Раздел, в котором поэтапно показано, как происходит создание
                вашего Web проекта.
              </p>
            </div>
            <div className="col-xs-12 col-lg-7 m-auto">
              <div className={`${s.stages__list}`}>
                <div className={`${s.item}  `}>
                  <div className={s.item__number}>1</div>
                  <div className={s.item__body}>
                    <div className={s.item__title}>Обсуждение проекта</div>
                    <p className={s.item__text}>
                      Свяжемся с вами, обсудим проект и выслушаем ваши пожелания
                    </p>
                  </div>
                </div>
                <div className={`${s.item}  `}>
                  <div className={s.item__number}>2</div>
                  <div className={s.item__body}>
                    <div className={s.item__title}>Заключение договора</div>
                    <p className={s.item__text}>
                      Заключим с Вами договор и составим техническое задание
                    </p>
                  </div>
                </div>
                <div className={`${s.item}  `}>
                  <div className={s.item__number}>3</div>
                  <div className={s.item__body}>
                    <div className={s.item__title}>Создаем дизайн</div>
                    <p className={s.item__text}>
                      Создадим примерный макет Вашего будущего проектав формате Html
                    </p>
                  </div>
                </div>
                <div className={`${s.item}  `}>
                  <div className={s.item__number}>4</div>
                  <div className={s.item__body}>
                    <div className={s.item__title}>Front-end разработка</div>
                    <p className={s.item__text}>
                      Основная часть работы – воплощение всего придуманного в жизнь
                    </p>
                  </div>
                </div>
                <div className={`${s.item}  `}>
                  <div className={s.item__number}>5</div>
                  <div className={s.item__body}>
                    <div className={s.item__title}>Посадка на CMS</div>
                    <p className={s.item__text}>
                      Настроим CMS-систему, чтобы Вы сами могли менять контент на Вашем сайте
                    </p>
                  </div>
                </div>
                <div className={`${s.item}  `}>
                  <div className={s.item__number}>6</div>
                  <div className={s.item__body}>
                    <div className={s.item__title}>Полное тестирование</div>
                    <p className={s.item__text}>
                      Проверяем готовую работу на наличие ошибок и багов
                    </p>
                  </div>
                </div>
                <div className={`${s.item}  `}>
                  <div className={s.item__number}>7</div>
                  <div className={s.item__body}>
                    <div className={s.item__title}>Запуск проекта</div>
                    <p className={s.item__text}>
                      Готово! Отдаем Вам Ваш новенький сайт и остаёмся с Вами на тех.поддержке на месяц
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className={s.reviews}>
        <Reviews />
      </section> */}
      <section className={`${s.contact}  `} id="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
            </div>
            <div className="col-xs-12 col-lg-8 m-auto">
              <OrderForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
