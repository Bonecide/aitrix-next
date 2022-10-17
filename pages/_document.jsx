import { Html, Head, Main, NextScript } from 'next/document';
export default function Document() {
    return (
      <Html lang='ru'>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10995628847"></script>
        <script dangerouslySetInnerHTML = {{
          __html : `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments)}
          gtag('js', new Date());
          gtag('config', 'AW-10995628847');
          gtag('event', 'conversion', {'send_to': 'AW-10995628847/uLiUCJix1OIDEK_2j_so'});`
        }}/>
       
        
<script 
   dangerouslySetInnerHTML = {{
    __html : `
    (function (m, e, t, r, i, k, a) {
      m[i] = m[i] || function () {
          (m[i].a = m[i].a || []).push(arguments)
      };
      m[i].l = 1 * new Date();
      k = e.createElement(t), a = e.getElementsByTagName(t)[0], k.async = 1, k.src = r, a.parentNode.insertBefore(k, a)
  })
  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

  ym(89906460, "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true
  });
    `
   }}/>
<noscript>
    <div><img src="https://mc.yandex.ru/watch/89906460" style={{'position':'absolute', 'left':'-9999px'}} alt=""/></div>
</noscript>

        </body>
      </Html>
    )
  }