import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AddTodo,AddTODOLoading,AddTODOSuccess, GetTODOLoading,
     GetTODOSuccess,DeleteTODOSuccess } from "../redux/action"


export const Todos=()=>{
    const {loading, data, error} =useSelector((store)=>store.todos)
    const dispatch =useDispatch()
    const [state, setState]=useState('')
    useEffect(()=>{
        getData()
    },[])
    const getData =()=>{
        dispatch(GetTODOLoading())
        axios.get('http://localhost:3001/todos').then(({data})=>{
        dispatch(GetTODOSuccess(data))
        })
    }
    console.log('Todo Rendering')
    return loading ?('Loading...'
    ):
     (
       
        <div>
            <input onChange={(e)=>setState(e.target.value)} type="text" />
           {/* { console.log(document.getElementById("toDo").value)} */}
            <button onClick={()=>{
        //    dispatch(AddTodo({id:Date.now(),title:state,status:false}))
        dispatch(AddTODOLoading())
        axios.post("http://localhost:3001/todos",{
        title:state,
        status:false}).then((data)=>{
            dispatch(AddTODOSuccess(data)) 
            getData()
        }).catch(()=>{
         //   dispatch(error)
        })
            }}>Add Todo</button>
            <div>
                {data.map((e)=>(
                    <>
                    <div key={e.id}>{e.title}</div>
                    <button onClick={()=>{
                        console.log(e.id)
           dispatch(DeleteTODOSuccess(e.id))
                    }}>Delete</button>
                    </>
                ))}
            </div>
        </div>
    )
}