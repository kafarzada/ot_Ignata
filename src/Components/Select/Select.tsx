import React, { useState } from 'react';
import s from './Select.module.css';

type SelectPropsType = {
    value: Array<string>
}

const Select = (props: SelectPropsType) => {
    console.log('selected rendered');
    
    let [activeList, setActiveList ] = useState<boolean>(false)
    let [value, setValue] = useState<string>(props.value[0]);
    const onClickListHandler = () => {
        setActiveList(true)
    }
    const selectItemHandler = (value:string) => {
        setActiveList(false)
        setValue(value)
    }


    const listOptions = props.value.map(item => {
        return (
            <Option 
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
           <input type="text" value={value}/>
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