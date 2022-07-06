import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useDispatch } from 'react-redux';
import { useEffect, FC } from 'react';
import { initializeTC } from './../redux/TradingBotReducer';
import { Provider } from 'react-redux';
import store from '../redux/store';
export default function MyApp({ Component, pageProps }: AppProps) {

  

  return (
    <Provider store ={store}>
        <Component {...pageProps} />
    </Provider>
  
  )
}