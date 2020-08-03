import React  from 'react';
import s from './DateViewer.module.css'
type DateType = {
    date: string
    show: boolean
}

const DateViewer = (props: DateType) => {
  //  return  props.show && <div className={s.date}><span className={s.date_inner}>{props.date}</span></div>

  return (
    <>
        {props.show && <span className={s.date__inner}>{props.date}</span>}
    </>
  )
}


export default DateViewer