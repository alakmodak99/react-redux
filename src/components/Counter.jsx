import { IncCount,DecCount } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';
export const Counter=()=>{
    const count =useSelector((store)=>store.count)
    const dispatch = useDispatch()
    console.log('Counter Rendering')
    return (
      <div className="App">
    Count : {count} <br />
    <button onClick={()=>{
        dispatch(IncCount(1))
    }}>Add 1</button>
    <button onClick={()=>{
        dispatch(DecCount(1))
    }}>Sub 1</button>
      </div>
    ); 
}