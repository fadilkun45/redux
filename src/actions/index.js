import { getData,postData,deleteData } from "../Api/Api";

export const fetchData = () => async (dispatch) => {
    const response = await getData()
    dispatch({type: 'GET DATA',payload: response})
}

export const addData = (payload) => async (dispatch) => {
    const response = await postData({name: payload, id: Math.random()})
    dispatch({type: 'ADD DATA',payload: response.data})
    console.log(response.data)
}

export const removeData = (payload) => async (dispatch) => {
    const response = await deleteData(payload)
    dispatch({type: 'REMOVE DATA',payload})
}



