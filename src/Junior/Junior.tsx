import React, { useState } from 'react';
import Editable from '../Components/Common/Editable';
import ButtonNya from '../Components/ButtonNya/ButtonNya';
import { restore, saveState } from '../localStorage_functions';
import Select from '../Components/Select/Select';
import Radio from '../Components/Common/Radio';

function Junior() {
    
    let [editMode, setEditMode] = useState<boolean>(false)
    let [inputValue, setInputValue] = useState<string>('span');
    
    const onClickSaveHandler= () => { saveState("test",  inputValue) }
    const onClickRestoreHandler = ()=> { setInputValue(restore("test")) }

    // ДЗ N7 (begin) SELECT
    let [selectValue, setSelectValue] = useState<string>('')
    const fruits = [ // для компонента select
        "apple",
        "oranges",
        "pears"
    ]
    const OnChangeSelecthandler = (value:string) => {
        setSelectValue(value)
    }
    // (end)



    // ДЗ N7 (begin) RADIO
    let [radioValue, setRadioValue] = useState<string>('');
    const onChangeRadiovalue = (value: string) => {setRadioValue(value)}
    const gender =['male', 'female']
    // (end)
    return (
        <div>
            <Editable editMode={editMode} setEditMode={setEditMode} inputValue={inputValue} setInputValue={setInputValue}/>
            <ButtonNya onClick={onClickSaveHandler} >save</ButtonNya>
            <ButtonNya onClick={onClickRestoreHandler} >restore</ButtonNya>
            <Select list={fruits} selectvalue={selectValue} onChange={OnChangeSelecthandler}/>
            <Radio value={radioValue} radioValues={gender} name={"gender"} onChange={onChangeRadiovalue}/>
        </div>
    )
}

export default Junior;