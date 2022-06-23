
import { INCCount,DECCount, ADDTodo, ADDTODOLoading,
     ADDTODOSuccess,GETTODOLoading,GETTODOSuccess,DeleteTODO } from "./action-types";

export const IncCount =(payload)=>({
    type:INCCount,
    payload
})
export const DecCount =(payload)=>({ 
    type:DECCount,
    payload
})
export const AddTodo=(payload)=>({
    type:ADDTodo,
    payload
})
export const AddTODOLoading=()=>({
    type:ADDTODOLoading
})
export const AddTODOSuccess=(payload)=>({
    type:ADDTODOSuccess,
    payload
})
export const GetTODOLoading=()=>({
    type:GETTODOLoading
})
export const GetTODOSuccess=(payload)=>({
    type:GETTODOSuccess,
    payload
})
export const DeleteTODOSuccess=()=>({
     type:DeleteTODO,
  
})
/* 
it is returning the object 
const x=()=>{
    return x**2
}
same in es6
const x=()=>({
    x**2
})
Both are Same
*/