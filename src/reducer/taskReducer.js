const taskReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD DATA' : 
            return [...state, {name: action.payload, id: Math.random()}]
        case 'REMOVE DATA' :
            return state.filter((data) => data.id !== action.payload)
        default : 
            return state
    }
}

export default taskReducer;