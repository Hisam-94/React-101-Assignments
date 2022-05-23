import {useState} from "react"

const Counter =()=>{
    
    const [count,setCount] = useState(0);
  

    let a;
    if(count%2==0){

        a="counter"
    }else{
        a="counter1"
    }
   
    return(
        <div>            
        <h1 className={a}>Counter : {count}</h1>
        <button onClick={()=>{setCount (count + 1)}}>Increment</button>
        <button onClick={()=>{if(count > 0){setCount (count - 1)}}}>Deccrement</button>
        <button onClick={()=>{setCount (count * 2)}}>Double</button>
        </div>
    )
}

export default Counter;