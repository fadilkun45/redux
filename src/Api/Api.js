import axios from 'axios'

export const getData = () => axios.get('http://localhost:4500/data').then((res) => res.data)
export const postData = (payload) => axios.post('http://localhost:4500/data',payload)
export const deleteData = (payload) => axios.delete('http://localhost:4500/data/' + payload)