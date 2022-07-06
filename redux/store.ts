import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import appReducer from './AppReducer';
import MainPageReducer from './MainPageReducer';
import tradingBotReducer from './TradingBotReducer';
import { TradingBotInitialStateType } from './TradingBotReducer';
import { AppDataInitialStateType } from './AppReducer';
import { MainPageInitialStateType } from './MainPageReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
let rootReducer = combineReducers({
    appData: appReducer, 
    mainPageData: MainPageReducer,
    tradingBotData: tradingBotReducer,
});
export type AppStateType = {
    appData:  AppDataInitialStateType,
    mainPageData: MainPageInitialStateType,
    tradingBotData :TradingBotInitialStateType
};

//@ts-ignore

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
//@ts-ignore

export default store;