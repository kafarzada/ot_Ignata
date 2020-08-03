import React from 'react';

type optionType = {
    id: string;
    value: string
}

type SelectType = {
    value: string
    values: Array<optionType>
    onChange: (value: string) => void
}

const Select = (props: SelectType) => {
    const options = props.values.map((item, index) => {

         return <option key={index}
                        value={item.id}
                        onClick={() => alert('asd')}
                        >{item.value}</option> 
    })
    return (
        <select value={props.value}>
            {options}
        </select>
    )
}

export default Select;