import React from 'react'
import { connect } from 'react-redux'
import { addTask } from '../js/action/AddTasksaction'

//user add task
const mapDispatchToProps = (dispatch)=>{
return{userAddTask:(theTask)=> dispatch(addTask(theTask))      } 
}

const mapStateToProps = (state)=>{
  return { tasksLength : state.tasks.length }
}

const ShowBlock =()=> {
  const x = document.getElementById("addTask");
(x.style.display === "none")?x.style.display = "block":x.style.display = "none"
} 



const Addtask = (props) => {

  const AddaNewTask = (tasksLength)=>{
    const target= document.getElementById('textbox_id').value
    const taskToSubmit = { tasks :[{id:tasksLength,description:target,isDone:false}]}
  return taskToSubmit
  }
  return (
    <div>
        <button style={{backgroundColor:'#d1a170',border: 'dashed',color: 'white' , borderColor:'#6673D8',margin:'7px'}}  onClick={()=>ShowBlock()}>Add New Task</button>
        <div id='addTask' style={{display:'none'}}>
          <input size='80' maxLength='50' id='textbox_id' placeholder='Type a new Task'  /><button onClick={()=>props.userAddTask(AddaNewTask(props.tasksLength))}>Add+</button>
        </div>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Addtask)