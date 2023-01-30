
import { connect } from 'react-redux'
import { addTask } from '../js/action/AddTasksaction'

//developer add Task
const mapDispatchToProps = dispatch => {
  return {
      addTasks: (theTask) => {dispatch(addTask(theTask))}
  }
}
const Task = (props) => {
 


  props.addTasks({ tasks :[{id:5,description:'Tuesday - Go to gym again',isDone:false},
  {id:6,description:'Sunday - Go to cinema',isDone:false},
  {id:7,description:'saturday - By a new book ',isDone:false}
]})


              return (
                <div>
            
                </div>
              )
}

export default connect(null,mapDispatchToProps)(Task)