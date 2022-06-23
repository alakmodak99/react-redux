
import { ADDTodo, DECCount, INCCount,ADDTODOLoading,
     ADDTODOSuccess,GETTODOLoading,GETTODOSuccess,DeleteTODO } from "./action-types"

const init={
    count :0,
    todos :{
        loading:false,
        error:false,
        data:[]
    }
}
export const counterReducer=(store=init,{type,payload})=>{
  switch (type) {
      case INCCount :
          return {...store, count:store.count + payload}
      case DECCount :
          return {...store, count:store.count - payload}
      case ADDTodo :
          return {...store, todos:[...store.todos,payload]} 
      case ADDTODOLoading:
          return {...store, todos:{...store.todos, loading:true}}  
     case ADDTODOSuccess:
        return {...store, todos:{...store.todos, loading:false}}      
        case GETTODOLoading:
            return {...store, todos:{...store.todos, loading:true}}  
       case GETTODOSuccess:
          return {...store, todos:{...store.todos, loading:false, data:payload}} 
          case DeleteTODO :
              return {...store, todos:{...store.todos, todos:[store.todos.data.splice(store.todos.data.index,1)]}}
     default :
          return {...store}
  }
}