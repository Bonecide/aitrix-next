import type { AppProps } from 'next/app'
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useDispatch } from 'react-redux';
import { useEffect, FC } from 'react';
import { initializeTC } from './../redux/TradingBotReducer';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Head from 'next/head'
export default function MyApp({ Component, pageProps }: AppProps) {

  

  return (
    <Provider store ={store}>
      <Head>
      <meta charSet="utf-8"/>
      <link rel="icon" href="%PUBLIC_URL%/favicon.ico"  />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#fff" />
      <meta name="keywords" content="Сайт под ключ, веб студия, Aitrix, Айтрикс, разработка сайтов, сайт под ключ, современный сайт заказать, студия разработки " />
      <meta name="description" content="Веб-студия Aitrix разрабатывает сайты и веб приложения. Создаем сайты любой сложности (корпоративные, интернет-магазины или Landing Page), множество разработанных проектов."/>
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      <title>Aitrix - Новый виток технологий</title>
      <meta property="og:title" content="Веб-студия Aitrix"/>
      <meta property="og:description" content="Веб-студия Aitrix разрабатывает сайты и веб приложения. Создаем сайты любой сложности (корпоративные, интернет-магазины или Landing Page), множество разработанных проектов."/>
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Веб-студия Aitrix"/>
      <meta property="og:url" content="https://aitrix.online/" />
      <meta property="og:image" content="%PUBLIC_URL%/prev_img.jpg"/>
      <meta property="og:image:width" content="560"/>
      <meta property="og:image:height" content="321"/>
      </Head>
        <Component {...pageProps} />
    </Provider>
  
  )
}