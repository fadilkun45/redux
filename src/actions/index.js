
export const addData = (payload) => {

    return {
        type: 'ADD DATA',
         payload
    }
}

export const removeData = (payload) => {
    console.log(payload)
    return {
        type: 'REMOVE DATA',
        payload
    }
}

