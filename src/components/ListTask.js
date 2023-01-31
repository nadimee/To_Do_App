import React, { useState } from 'react'
import { connect } from 'react-redux'
import { FilterTasksDoneAction } from '../js/action/FilterTasksDoneAction'
import FiltredTasksStillAction from '../js/action/FiltredTasksStillAction'
import { addTask } from '../js/action/AddTasksaction'
import Addtask from './Addtask'


const mapStateToProps = state => {
  return {
      tasks: state.tasks
     
  }
}


const mapDispatchToProps = (dispatch)=>{

  return{   filterTasksByDone : (filtred)=>dispatch(FilterTasksDoneAction(filtred)),
            filterTasksByStill : (filtred)=>dispatch(FiltredTasksStillAction(filtred)),
            addTasks :  (tasks)=>dispatch(addTask(tasks))                                                                         }
}

const ListTask = (props) => {
  let [backUstate,setBackUstate]= useState({tasks : props.tasks})



const onEditClick =(elmId)=>{
  let theDescription =document.getElementById('d'+elmId);
  let newDesc =  prompt('Type a new task')
  theDescription.innerHTML=newDesc

}


  return (
    <div>
    <div>
    <Addtask />
      {
          (<div>
            <button style={{backgroundColor:'#d1a170',border: 'dashed',color: 'white' ,borderColor:'#6673D8' ,marginRight:'10px'}}   onClick={()=>{
              setBackUstate(backUstate)
              props.addTasks( backUstate )
  props.filterTasksByDone({ tasks : backUstate.tasks.filter(e=>e.isDone!==false) })

                            }}>Done</button>
            <button style={{backgroundColor:'#d1a170',border: 'dashed',color: 'white', borderColor:'#6673D8' ,marginLeft:'7px'}}  onClick={()=>{
              setBackUstate(backUstate)
              props.addTasks( backUstate )
  props.filterTasksByStill({ tasks :backUstate.tasks.filter(e=>e.isDone===false) })

                             }}>Still Not</button>
          </div >)
        }
    </div>
    <div  style={{display:'flex',flexWrap:'wrap' , marginLeft:'25%'}} >
      

        
       {props.tasks.map((task,i) => <div key={i}  id={task.id}  style={{width:'30%',height:'300px',backgroundColor:'white', margin:'2%',fontFamily:'Verdana'}}  >
                <h1 style={{fontSize:'20px',color:'#3768A3'}}>{task.id.toString()}</h1>
                <p style={{fontSize:'25px',color:'#2B2A33',marginTop:'20%',textAlign:'center'}} id={'d'+task.id} >{task.description}</p>               
                <button style={{backgroundColor:'#d1a170',border: 'dashed',color: 'white'}}  onClick={()=>onEditClick(task.id)}  >edit.../</button>  
                <h1 style={{fontSize:'15px',marginTop:'20%', color:(task.isDone===true)?'green':'red'}}>{(task.isDone===true)?"Task is Done" : "To do" }</h1>
            </div>)
        }


    </div>
    </div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(ListTask)