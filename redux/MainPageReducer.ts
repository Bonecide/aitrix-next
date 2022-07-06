import { MainPageApi } from "../API/Api";
import { ToastBig } from "../Components/Assets/Toast";

const SETTECHNOLOGYLIST = "SETTECHNOLOGYLIST";
const SETSERVICESLIST = "SETSERVICESLIST";
const SETREVIEWSLIST = "SETREVIEWSLIST";
const ISLOADING = "ISLOADING";

type ServiceItemType ={
    id: string,
    imgUrl: string,
    name: string,
    description: string,
}
type TechnologyItemType={
    id: string,
    name: string,
    description: string,
    imgUrl: string,
}
type ReviewItemType = {
    id: string,
    name: string,
    text: string,
    rating: number,
    whoIs: string,
    imgUrl: string,
}
type ProjectItemType={
    id: string,
    name: string,
    text: string,
    imgUrl: string,
}
const initialState = {
    servicesList:[
        {id: "123", name: "Web-разработка", description: "Разработаем привлекательный digital-портрет вашей компании.", imgUrl: "h"},
        {id: "1234", name: "Web-разработка", description: "Разработаем привлекательный digital-портрет вашей компании.", imgUrl: "h"},
        {id: "12345", name: "Web-разработка", description: "Разработаем привлекательный digital-портрет вашей компании.", imgUrl: "h"},
    ] as Array <ServiceItemType>,
    technologyList:[
        {id: "123", name: "React", description: "JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.", imgUrl: "https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"},
        {id: "1234", name: "React", description: "JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.", imgUrl: "https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"},
        {id: "12345", name: "React", description: "JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.", imgUrl: "https://pluspng.com/img-png/react-logo-png-img-react-logo-png-react-js-logo-png-transparent-png-1142x1027.png"},
    ] as Array <TechnologyItemType>,
    reviewsList:[
        {id: "123", name: "Кирилл Иванов", text: "Огромное спасибо студии Aitrix за сделаный сайт. Я и моя команда осталась довольна. Еще хочу поблагорить за SEO оптмизицацию нашего сайта, клиентов увеличелось в 20 раз после вашего продвижения. Спасибо еще раз.", rating: 4, whoIs: "Landing Page", imgUrl:"https://images11.graziamagazine.ru/upload/img_cache/98b/98b8bfccb35d5b9389e2cd225c9f5ace_cropped_1332x882.jpg"},
        {id: "1234", name: "Кирилл Иванов", text: "Огромное спасибо студии Aitrix за сделаный сайт. Я и моя команда осталась довольна. Еще хочу поблагорить за SEO оптмизицацию нашего сайта, клиентов увеличелось в 20 раз после вашего продвижения. Спасибо еще раз.", rating: 4, whoIs: "Landing Page", imgUrl:"https://images11.graziamagazine.ru/upload/img_cache/98b/98b8bfccb35d5b9389e2cd225c9f5ace_cropped_1332x882.jpg"},
        {id: "12345", name: "Кирилл Иванов", text: "Огромное спасибо студии Aitrix за сделаный сайт. Я и моя команда осталась довольна. Еще хочу поблагорить за SEO оптмизицацию нашего сайта, клиентов увеличелось в 20 раз после вашего продвижения. Спасибо еще раз.", rating: 4, whoIs: "Landing Page", imgUrl:"https://images11.graziamagazine.ru/upload/img_cache/98b/98b8bfccb35d5b9389e2cd225c9f5ace_cropped_1332x882.jpg"},
    ] as Array <ReviewItemType>,
    projectsList: [
        {id: "1", name: "Grand-milk.ru", text: "Landing Page для фермерского хозяйства, занимающегося производством собственной молочной продукции.", imgUrl: "https://s3-alpha-sig.figma.com/img/8f26/917c/b816cd8d3fedacd448b82fde5c5241c0?Expires=1652659200&Signature=LK01Q9GaSb0Ar4mTGsQ~12DMHB4ydag0WkNMM9wOtRAZFUFJLCL-bhzL-YBZU1Z1reUISVwS7LzrQvm7Gi8LLOAbYPXc-Psge3p1Ii4cTL58OURdpKN8GqYeBgst1cyUUw9I1ReSPMk7dDUV5b6T6yv2hDh8VV6RKSafHU9tpOpsszLXRkkp2sx-vX2ideMNeOL1E6j6Ef-jFBP0rfKe3ZBn~y3Pork-eSj3qivhUUejv-He74J-doWE2JwWp0hcnAa9SySxYE7gDbhOY6IVZTcy8Xta-btu-IAsNFLYnV4KzzktE9ASbKse0PEKTOT-qJJhfVVHabY6sf1~phkiTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" },
        {id: "2", name: "Grand-milk.ru", text: "Landing Page для фермерского хозяйства, занимающегося производством собственной молочной продукции.", imgUrl: "https://s3-alpha-sig.figma.com/img/8f26/917c/b816cd8d3fedacd448b82fde5c5241c0?Expires=1652659200&Signature=LK01Q9GaSb0Ar4mTGsQ~12DMHB4ydag0WkNMM9wOtRAZFUFJLCL-bhzL-YBZU1Z1reUISVwS7LzrQvm7Gi8LLOAbYPXc-Psge3p1Ii4cTL58OURdpKN8GqYeBgst1cyUUw9I1ReSPMk7dDUV5b6T6yv2hDh8VV6RKSafHU9tpOpsszLXRkkp2sx-vX2ideMNeOL1E6j6Ef-jFBP0rfKe3ZBn~y3Pork-eSj3qivhUUejv-He74J-doWE2JwWp0hcnAa9SySxYE7gDbhOY6IVZTcy8Xta-btu-IAsNFLYnV4KzzktE9ASbKse0PEKTOT-qJJhfVVHabY6sf1~phkiTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" },
        {id: "3", name: "Grand-milk.ru", text: "Landing Page для фермерского хозяйства, занимающегося производством собственной молочной продукции.", imgUrl: "https://s3-alpha-sig.figma.com/img/8f26/917c/b816cd8d3fedacd448b82fde5c5241c0?Expires=1652659200&Signature=LK01Q9GaSb0Ar4mTGsQ~12DMHB4ydag0WkNMM9wOtRAZFUFJLCL-bhzL-YBZU1Z1reUISVwS7LzrQvm7Gi8LLOAbYPXc-Psge3p1Ii4cTL58OURdpKN8GqYeBgst1cyUUw9I1ReSPMk7dDUV5b6T6yv2hDh8VV6RKSafHU9tpOpsszLXRkkp2sx-vX2ideMNeOL1E6j6Ef-jFBP0rfKe3ZBn~y3Pork-eSj3qivhUUejv-He74J-doWE2JwWp0hcnAa9SySxYE7gDbhOY6IVZTcy8Xta-btu-IAsNFLYnV4KzzktE9ASbKse0PEKTOT-qJJhfVVHabY6sf1~phkiTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" },
        {id: "4", name: "Grand-milk.ru", text: "Landing Page для фермерского хозяйства, занимающегося производством собственной молочной продукции.", imgUrl: "https://s3-alpha-sig.figma.com/img/8f26/917c/b816cd8d3fedacd448b82fde5c5241c0?Expires=1652659200&Signature=LK01Q9GaSb0Ar4mTGsQ~12DMHB4ydag0WkNMM9wOtRAZFUFJLCL-bhzL-YBZU1Z1reUISVwS7LzrQvm7Gi8LLOAbYPXc-Psge3p1Ii4cTL58OURdpKN8GqYeBgst1cyUUw9I1ReSPMk7dDUV5b6T6yv2hDh8VV6RKSafHU9tpOpsszLXRkkp2sx-vX2ideMNeOL1E6j6Ef-jFBP0rfKe3ZBn~y3Pork-eSj3qivhUUejv-He74J-doWE2JwWp0hcnAa9SySxYE7gDbhOY6IVZTcy8Xta-btu-IAsNFLYnV4KzzktE9ASbKse0PEKTOT-qJJhfVVHabY6sf1~phkiTg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" },
    ] as Array<ProjectItemType>,
    isLoading: false as boolean,
}
export type MainPageInitialStateType = typeof initialState;

const MainPageReducer = (state = initialState, action:any) :MainPageInitialStateType =>{
    switch (action.type){
        case SETSERVICESLIST:{
            return{ ...state, servicesList: action.servList}
        }
        case SETTECHNOLOGYLIST:{
            return{ ...state, technologyList: action.techList}
        }
        case SETREVIEWSLIST:{
            return{ ...state, reviewsList: action.revList}
        }
        case ISLOADING:{
            return{ ...state, isLoading: action.answer}
        }
        default:{
            return state
        }
    }
}
type setServicesListACType = { type: typeof SETSERVICESLIST, servList: Array<any>}
export const setServicesListAC = (servList: Array<any>): setServicesListACType =>({type: SETSERVICESLIST, servList})

type setTechnologyListACType = { type: typeof SETTECHNOLOGYLIST, techList: Array<any>}
export const setTechnologyListAC = (techList: Array<any>): setTechnologyListACType =>({type: SETTECHNOLOGYLIST, techList})

type setReviewsListACType = { type: typeof SETREVIEWSLIST, revList: Array<any>}
export const setReviewsListAC = (revList: Array<any>): setReviewsListACType =>({type: SETREVIEWSLIST, revList})

type isLoadingACType = { type: typeof ISLOADING, answer: boolean}
export const isLoadingAC = (answer: boolean): isLoadingACType =>({type: ISLOADING, answer})

export const getServicesListTC = () => {
    return async(dispatch: any) =>{
        let response = await MainPageApi.getServicesList()
        dispatch(setServicesListAC(response.data))
    }
}

export const getTechnologyListTC = () => {
    return async(dispatch: any) =>{
        let response = await MainPageApi.getTecnologyList()
        dispatch(setTechnologyListAC(response.data))
    }
}

export const getReviewsListTC = () => {
    return async(dispatch: any) =>{
        let response = await MainPageApi.getReviewsList()
        dispatch(setReviewsListAC(response.data))
    }
}
export const sendOrderDataTC = (orderData:object) => {
    return async(dispatch: any) =>{
        dispatch(isLoadingAC(true))
        try{
            await MainPageApi.sendOrderData(orderData).then((response:any)=>{
                response.data.status === "success" 
                ? ToastBig.fire({ icon: "success", html: `Сообщение успешно отправлено` })
                : ToastBig.fire({ icon: "error", html: `${response.errors}` })
            })
            dispatch(isLoadingAC(false))
        } catch(error){
            dispatch(isLoadingAC(false))
            let response = {
                status: "error",
                errors: '',
            }
            // @ts-ignore
            for (let [key, value] of Object.entries(error.response.data)) {
                response.errors += `Поле: ${key}\n </br> Ошибка: ${value}\n `
            }
            ToastBig.fire({ icon: "error", html: `${response.errors}` })
        }      
    }
}
export default MainPageReducer