const INITIALIZING = "INITIALIZING";
const INITIALIZINGDEVICE = "INITIALIZINGDEVICE";


const initialState = {
    initializing: false as boolean,
}
export type AppDataInitialStateType = typeof initialState;
// @ts-ignore
const appReducer = (state = initialState, action:any) :InitialStateType =>{
    switch (action.type){
        case INITIALIZING:{
            console.log("Инициализация - успешно");
            return{ ...state, initializing: true}
        }
        default:{
            return state
        }
    }
}
type InitializingAC = { type: typeof INITIALIZING,}
export const initializingAC = ():InitializingAC =>({type: INITIALIZING})

type InitializingDeviceType = { type: typeof INITIALIZINGDEVICE, device_type: string}
export const initializingDeviceAC = (device_type: string): InitializingDeviceType =>({type: INITIALIZINGDEVICE, device_type})

export const initializeTC = () => (dispatch:any)=>{
    if(window.innerWidth < 768){
        dispatch(initializingDeviceAC("mobile"))
    }else{
        dispatch(initializingDeviceAC("PC"))
    }
    dispatch(initializingAC())
}
export default appReducer