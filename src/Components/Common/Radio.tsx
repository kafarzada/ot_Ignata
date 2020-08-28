import React from 'react';

type PropsType = {
    value: string
    radioValues: Array<string>
    name: string
    onChange:(value: string) => void
}


const RadioTemporary = (props: PropsType) => {

    

    const radioInputs = props.radioValues.map((item,index) => {
        
        const onClickInputHandler = () => {props.onChange(item)}

        return  (<div>
                 <input type={"radio"} name={props.name} value={item} key={index} onClick={onClickInputHandler}/>
                 <span>{item}</span>
                </div>
        )
    })

    return (
        <div>
            {radioInputs}
        </div>
    )
}

const Radio = React.memo(RadioTemporary)
export default Radio