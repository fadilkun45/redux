

const taskReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD DATA' : 
            return [...state, action.payload]
        case 'REMOVE DATA' :
            return state.filter((data) => data.id !== action.payload)
        case 'GET DATA' :
            return action.payload
        default : 
            return state
    }
}

export default taskReducer;

