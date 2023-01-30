
import ADD_TASKS, { FILTRED_TASKS_STILL } from "../constants/constants"
import { FILTER_TASKS_DONE } from "../constants/constants"


const initialState = {
  tasks : [{id:0,description:'Monday -  Go to work at 8:00',isDone:true},
  {id:1,description:'Monday - Go to gym at 17:00',isDone:true},
  {id:2,description:'Monday - Eat at 19:30',isDone:true},
  {id:3,description:'Monday - Go out at 20:00',isDone:false},
  {id:4,description:'Tuesday - Do home work at 21:00',isDone:false}
 ]
}

const reducer = (state = initialState,action) => {

    switch (action.type) {

        case ADD_TASKS:      
       return {tasks:[...state.tasks,...action.payload.tasks]}

       case FILTER_TASKS_DONE:      
       return {tasks:[...action.payload.tasks]}
              

              case FILTRED_TASKS_STILL:       
              return {tasks:[...action.payload.tasks]}
                                 
          
      default:
        return state
        }
}


export default reducer