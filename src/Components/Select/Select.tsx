import React, { useState } from 'react';
import s from './Select.module.css';

type SelectPropsType = {
    list: Array<string>
    selectvalue: string
    onChange: (value: string) => void
    active: boolean
    setActiveList: (value: boolean) => void
}

const Select = (props: SelectPropsType) => {
    const onClickListHandler = () => {
        props.setActiveList(!props.active)
}
    const selectItemHandler = (value:string) => {
        props.setActiveList(false)
        props.onChange(value)
    }
    const listOptions = props.list.map((item, index) => {
        return (
            <Option 
                key={index}
                value={item}
                selectHandler={selectItemHandler}
            />
        )
    })


    let listStype  = {
         display: props.active ? 'block' : 'none'
    }

    return (
        <div>
           <input type="text" value={props.selectvalue}/>
           <button onClick={onClickListHandler}>list</button>
           <div style={listStype}>
                {listOptions}
           </div>
        </div>
    )
}

type OptionPropsType = {
    value: string
    selectHandler: (value:string) => void
}
const Option = (props: OptionPropsType) => {
    return (
        <div className={s.option} onClick={() => props.selectHandler(props.value) }>{props.value}</div>
    )
}


export default Select;