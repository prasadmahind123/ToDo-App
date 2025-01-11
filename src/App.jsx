import { useState } from 'react'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';

import './App.css'

function App() {
  const [toList, setToList] = useState([])

  const toDoTask = (event) => {

    event.preventDefault()
    let task = event.target.toName.value;
    if(task.trim() === ''){
      toast.error('Task is empty')
      return
    }
    if(!toList.some(existingTask => existingTask.toLowerCase() === task.toLowerCase())){
      setToList([...toList, task])
      toast.success('Task  added successfully!')
      event.target.toName.value = ''
    }
    else{
      toast.warning('Task is already in the list')
      event.target.toName.value = ''
    }
  }

  return (
    <>
      <ToastContainer />
      <div className="App" onSubmit={toDoTask}>
        <form>
          <input type="text" name='toName' placeholder='Enter Your Task ' />
          <button>save</button>
        </form>
      </div>
      <div className="content">
        <h2>Task List</h2>
        <ul>
          {
            toList.map((task, index) => (
              <CreateTaskList key = {index} task = {task} index = {index} toList = {toList} setToList = {setToList} />
              )
            )
          }
          
      </ul>
      </div>
   
    </>
  )
}

export default App

 function CreateTaskList({ task, index , toList ,setToList}){
  const removeTask = () => {
      let newList = toList.filter((v,i) => i != index) 
      setToList(newList)
  }
 
  return(
    <>
       <li key={index}>{index+1} . {task}  <span onClick={removeTask}> &times; </span></li>
    </>
  )
}
