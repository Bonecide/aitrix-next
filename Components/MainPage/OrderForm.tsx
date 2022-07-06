import React, { FC, useState } from 'react'
import s from '../../styles/MainPage.module.css'
import { ToastBig } from '../Assets/Toast.js'
import { useDispatch, useSelector } from 'react-redux'
import { AppStateType } from '../../redux/store'
import { sendOrderDataTC } from '../../redux/MainPageReducer'
import Image from "next/future/image";
import contact_img from "../../img/contact_img.png";

type PropsType = {}
export const OrderForm: FC<PropsType> = (props) => {
    const [serviceType, setServiceType] = useState('')
    const [userName, setUsername] = useState('')
    const [userEmail, setuserEmail] = useState('')
    const [userText, setUserText] = useState('')
    const [service, setService] = useState("")
    const [inputSelectIsActive, setInputSelectIsActive] = useState(false)
    const [hiddenInput, setHiddenInput] = useState("")
    const [policyIsActive, setPolicyIsActive] = useState(false)
    const togglePolicyIsActive = () =>{
        policyIsActive ? setPolicyIsActive(false) : setPolicyIsActive(true)
}
    const toggleInputSelectIsActive = ()=>{
        inputSelectIsActive ? setInputSelectIsActive(false) : setInputSelectIsActive(true)
    }
    const changeServiceType = (serviceType)=>{
        setServiceType(serviceType)
        toggleInputSelectIsActive()
    }
    const dispatch = useDispatch()
    const servicesList = useSelector((state: AppStateType) => state.mainPageData.servicesList)
    const sendOrder = () => {
        let orderData = {
            serviceType: serviceType || "Другой вопрос",
            name: userName,
            email: userEmail,
            message: userText,
            company: 1,
        }
        if(policyIsActive){
            if (userName) {
                if (userEmail) {
                    if (userText) {
                        if(!hiddenInput){
                            dispatch(sendOrderDataTC(orderData))
                        }else{
                            ToastBig.fire({ icon: "error", html: `Вы Робот` })
                        }
                    } else {
                        ToastBig.fire({ icon: "info", html: `Вы не описали проект` })
                    }
                } else {
                    ToastBig.fire({ icon: "info", html: `Вы не указали Email` })
                }
            } else {
                ToastBig.fire({ icon: "info", html: `Вы не указали Имя` })
            }
        }else{
            ToastBig.fire({ icon: "info", html: `Вы не приняли соглашение` })
        }
    }
    return (
        <div className={s.contact__content}>
            <Image layout="raw" src={contact_img} alt="contact_img" className={s.contact__img} />
            <div className={s.contact__form}>
                <h5 className={s.contact__title}>Наши контакты</h5>
                <p>Оставьте свою контактную информацию, и мы с радостью свяжемся с вами!</p>
                <div className={s.form}>
                    <div className={s.form__block}>
                        <div className={s.select}>
                            <span className={s.select__title} onClick={()=>toggleInputSelectIsActive()}>
                                {serviceType || "Выберите услугу " }<i className={`${inputSelectIsActive && s.active_modal} fa-solid fa-chevron-down`}></i>
                            </span>
                            {inputSelectIsActive && <div className={`${s.select__modal}  animate__animated animate__fadeIn`}>
                                <ul>
                                    {servicesList.map(service =>{
                                        return(
                                            <li key={service.id} onClick={()=>changeServiceType(service.name)}>{service.name}</li>
                                        )
                                    })}
                                    <li onClick={()=>changeServiceType("Другой вопрос")}>Другой вопрос</li>
                                </ul>
                            </div>}
                        </div>
                    </div>
                    <div className={s.form__block}>
                        <input type="text" placeholder='Ваше имя' value={userName}
                            onChange={(e) => { setUsername(e.currentTarget.value) }} />
                        <i className="fa-solid fa-user"></i>
                    </div>
                    <div className={s.form__block}>
                        <input type="text" placeholder='Ваша почта' value={userEmail}
                            onChange={(e) => { setuserEmail(e.currentTarget.value) }} />
                        <i className="fa-solid fa-envelope"></i>
                    </div>
                    <input type="text" className={"d-none"} value={hiddenInput} onChange={(e)=>setHiddenInput(e.currentTarget.value)} />
                    <div className={s.form__block}>
                        <textarea name="message" placeholder='Расскажите немного о проекте'
                            value={userText} onChange={(e) => { setUserText(e.currentTarget.value) }}>
                        </textarea>
                        <i className="fa-solid fa-list-check"></i>
                    </div>
                    <div className={s.policy}>
                        <p>Поставьте галочку, чтобы дать свое согласие на обработку ваших персональных данных, в соответствии с ФЗ №152-ФЗ «О персональных данных»</p>
                        <span className={policyIsActive && s.checked} onClick={()=>togglePolicyIsActive()}></span>
                    </div>
                    <span className={s.form__btn} onClick={() => sendOrder()}>Отправить<i className="fa-regular fa-paper-plane"></i></span>
                </div>
            </div>
            <div className={s.contact__info}>
                <div className={s.contact__list}>
                    <a href="tel:+996 507 49-60-44"><i className="fa-solid fa-phone"></i>+996 507 49-60-44</a>
                    <a href="tel:+79147531027"><i className="fa-solid fa-phone"></i>+7 (914) 753-10-27</a>
                    {/* <li><i className="fa-solid fa-location-dot"></i>Улица пушкина дом колотушкина</li> */}
                    <a href="mailto:support@aitrix.online"><i className="fa-solid fa-at"></i>support@aitrix.online</a>
                </div>
            </div>
        </div>
    )
}