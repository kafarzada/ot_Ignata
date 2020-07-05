import React, { useState, ChangeEvent } from 'react';


const Editable = () => {
    let [editMode, setEditMode] = useState<boolean>(false);
    let [inputValue, setInputValue] = useState<string>('span');


    
    function saveState(key: string, state: string) { // метод для сохранения текста введенного в инпут
        const stateAsString = JSON.stringify(state);
        localStorage.setItem(key, stateAsString)
    }

    function restore(key: string) { // восстановление текста из памяти
        const stateAsString = localStorage.getItem(key);
        let result:string = '';
        if(stateAsString !== null) {
            result = JSON.parse(stateAsString)
        }

        return result;
    }

    const onEditMode = ()=> {setEditMode(true)}
    const offEditMode = ()=> {setEditMode(false);}
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=> {setInputValue(e.currentTarget.value)}
    const onClickSaveHandler= () => { saveState("test",  inputValue) }
    const onClickRestoreHandler = ()=> { setInputValue(restore("test")) }

    return( 
        <div>
            {
                editMode 
                ? <input
                    onBlur={offEditMode}
                    type={"text"}
                    autoFocus
                    value={inputValue}
                    onChange={(e) => {onChangeHandler(e)}}
                    />
                : <span onDoubleClick={onEditMode}>{inputValue}</span>
            }
            <div>
                <button onClick={onClickSaveHandler}>save</button>
                <button onClick={onClickRestoreHandler}>restore</button>
            </div>
        </div>
    )
}

export default Editable;