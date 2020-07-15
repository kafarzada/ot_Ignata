import React, { useState } from 'react';
import s from './Select.module.css';

type SelectPropsType = {
    list: Array<string>
    selectvalue: string
    onChange: (value: string) => void
}

const Select = (props: SelectPropsType) => {
    console.log('selected rendered');
    
    let [activeList, setActiveList ] = useState<boolean>(false)
    const onClickListHandler = () => {
        setActiveList(true)
    }
    const selectItemHandler = (value:string) => {
        setActiveList(false)
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
         display: activeList ? 'block' : 'none'
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