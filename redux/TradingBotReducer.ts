const INITIALIZINGDEVICE = "INITIALIZINGDEVICE";

//Transaction History
type TransactionHistoryItemType={
    id: string,
    date: string,
    text: string,
    type: "replenishment" | "withdrawal" | "transfer" | "info",
    summ: number,
    status: "success" | "waiting" | "error" | "rejected",
}
type TransactionHistoryType={
    activeCount: number,
    list: Array<TransactionHistoryItemType>
}
//Levels Data
type LevelsDataType={
    currentLevel: number,
    currentDeposit:number,
    nextLevelDeposit: number,
}
//User Data
type UserDataType={
    userId: string,
    userName: string,
    userNickname: string,
    userCity: string,
    userDayOnSite: string,
    userBirthday: string,
    userPhone: string,
    userTelegram: string,
    userImgUrl: string,
    userEmail: string,
}
//Finance Data
type FinanceDataType = {
    currentBalance: number,
    todayProfit: number,
    monthProfit: number,
    allProfit: number,
    allDeposit: number,
    lastDeposit: number,
    percentOnDeposit: number,
}
//Partners Data
type PartnersListType={
    id: string,
    name: string,
    profit: number,
    percentProfit: number,
}
type PartnersDataType={
    allPartners: number,
    newPartnersToday: number,
    partnerPercent: number,
    partnersAllProfit: number
    partnersMonthProfit: number
    referalLink: string,
    partnersList: Array<PartnersListType>
}
//Initial State
export type TradingBotInitialStateType ={
    device: string,
    UserDataType: UserDataType
    levelsData: LevelsDataType,
    financeData: FinanceDataType,
    partnersData: PartnersDataType,
    transactionHistory: TransactionHistoryType,
}

const initialState = {
    device: "Mobile",
    userData: {
        userId: "#12345678",
        userName: "Кирилл Евгеньевич",
        userNickname: "Youfavorite",
        userEmail: "batureevich@yandex.ru",
        userCity: "Челябинск",
        userDayOnSite: "392",
        userBirthday: "02.01.2002",
        userPhone: "+7(902) 616-72-72",
        userTelegram: "@youfavorite",
        userImgUrl: "https://baturevich.ru/images/hw/user_img_man.jpg",
    },
    financeData:{
        currentBalance: 20500,
        todayProfit: 1200,
        monthProfit: 15000,
        allProfit: 39000,
        allDeposit: 50000,
        lastDeposit: 4000,
        percentOnDeposit: 5,
    },
    partnersData:{
        allPartners: 10,
        newPartnersToday: 1,
        newPartnersPerMonth: 4,
        partnerPercent: 5,
        partnersAllProfit: 20000,
        partnersMonthProfit: 3000,
        referalLink: "https://aitrix.online/tradingBot/registr?friend=12345678",
        partnersList:[
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
            {id: "#12345678", name: "Ирина П.", profit: 1500, percentProfit: 0.01},
        ]
    },
    levelsData:{
        currentLevel: 6,
        currentDeposit: 50000,
        nextLevelDeposit: 67000,
    },
    transactionHistory:{
        activeCount: 0,
        list:[
            {id: "1", date: "12.01.2022 в 21:00", 
                text: "Торговый бот Aitrix", type: "replenishment", summ: 1000, status: "waiting"},
            {id: "2", date: "12.01.2022 в 21:00", 
                text: "Торговый бот Aitrix", type: "withdrawal", summ: 200, status: "success"},
            {id: "3", date: "12.01.2022 в 21:00", 
                text: "Торговый бот Aitrix", type: "transfer", summ: 1500, status: "error"},
            {id: "4", date: "12.01.2022 в 21:00", 
                text: "Qiwi | Rub", type: "withdrawal", summ: 90500, status: "rejected"},
        ]
    },
}
const tradingBotReducer = (state = initialState, action:any) :TradingBotInitialStateType =>{
    switch (action.type){
        case INITIALIZINGDEVICE:{
            console.log("БОТ: Инициализация - успешно");
            return{ ...state, device: action.deviceType}
        }
        default:{
            return state
        }
    }
}

type InitializingDeviceType = { type: typeof INITIALIZINGDEVICE, deviceType: string}
export const initializingDeviceAC = (deviceType: string): InitializingDeviceType =>({type: INITIALIZINGDEVICE, deviceType})

export const initializeTC = () => (dispatch:any)=>{
    if(window.innerWidth < 768){
        dispatch(initializingDeviceAC("mobile"))
    }else{
        dispatch(initializingDeviceAC("PC"))
    }
}
export default tradingBotReducer