import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {addData,removeData,fetchData} from './actions/index'

function App() {
  let dispatch = useDispatch()
  let taskData = useSelector(state => state.task)
  let [task,setTask] = useState("")
  



  useEffect(() => {
    console.log(taskData)

    setInterval(() => {  dispatch(fetchData())
    },2000)
  },[])

  return (


    <div>
      <h1>Belajar Redux </h1>

      <Fragment>
      {
        taskData?.map((value) => (
          <div style={{marginBottom: "10px"}}>{value?.name} <button style={{ marginLeft: "20px"}} onClick={() => {dispatch(removeData(value.id))}}>remove</button> </div>
        ))
      }
      </Fragment>

      <input type="text" placeholder="masukan task" onChange={(e) => {setTask(e.target.value)}} />
      <button onClick={() => {dispatch(addData(task))}}>tambah</button>
    </div>
  );
}

export default App;
