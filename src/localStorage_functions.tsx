 export function saveState(key: string, state: string) { // метод для сохранения текста введенного в инпут
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}

 export function restore(key: string):string { // восстановление текста из памяти
    const stateAsString = localStorage.getItem(key);
    let result:string = '';
    if(stateAsString !== null) {
        result = JSON.parse(stateAsString)
    }

    return result;
}