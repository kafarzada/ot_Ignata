import React, { ChangeEvent } from 'react'
import s from './Range.module.css'


type RangePropsType = {
    minValue: number
    maxValue: number
    currentValue: number
    changeSoundValue: (value: number) => void
}

const RangeTemporary = (props: RangePropsType) => {

     const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
         props.changeSoundValue(Number(e.currentTarget.value))
     }
    return (
        <>
        <span>{props.currentValue}</span>
        <input type="range" onChange={onChangeHandler} className={s.range} value={props.currentValue} min={props.minValue} max={props.maxValue}/>
        </>
    )
}

const Range = React.memo(RangeTemporary)
export default Range