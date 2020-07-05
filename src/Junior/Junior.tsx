import React, { useState } from 'react';
import Editable from '../Components/Common/Editable';
import ButtonNya from '../Components/ButtonNya/ButtonNya';
import { restore, saveState } from '../localStorage_functions';

function Junior() {
    
    let [editMode, setEditMode] = useState<boolean>(false)
    let [inputValue, setInputValue] = useState<string>('span');
    
    const onClickSaveHandler= () => { saveState("test",  inputValue) }
    const onClickRestoreHandler = ()=> { setInputValue(restore("test")) }

    
    return (
        <div>
            <Editable editMode={editMode} setEditMode={setEditMode} inputValue={inputValue} setInputValue={setInputValue}/>
            <ButtonNya onClick={onClickSaveHandler} >save</ButtonNya>
            <ButtonNya onClick={onClickRestoreHandler} >restore</ButtonNya>
        </div>
    )
}

export default Junior;