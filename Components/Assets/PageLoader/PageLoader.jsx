import React from 'react'
import s from './PageLoader.module.css'
export const PageLoader = (props) => {
  return (
    <div className={s.wrapper}>
       <div className={s.loader}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default PageLoader