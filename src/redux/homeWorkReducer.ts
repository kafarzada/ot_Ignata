

export const hwReducer = (state:Array<{id: string, name: string, age: number}>, action: {type: string, payload:any}) => {
    switch (action.type) {
        case 'SORT':    
            const sort = ()  => {
                return state.sort(function(a,b) {
                    if(a.name > b.name){
                        return 1;
                    }
                    if(a.name < b.name) {
                        return -1;
                    }
                    return 0;
                })
            };

            if(action.payload === "down") {
                return sort().reverse();
            }
            return sort()
        
        case "CHECK":
            return state.filter(item => item.age >= action.payload);
        default:
            return state;
    }
}
