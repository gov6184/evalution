import React,{useState}  from "react"
const Click=(props)=>{
    const [count,newCount]=useState(0);
    const increase=()=>{
        console.log("govind")
     newCount(count+1);
     console.log(count);     
    }
    const decrease=()=>{
        newCount(count-1)
    }
    const double=()=>{
        let val=count*2;
        newCount(val);
    }
    return (
      
     <div>
         <h1  col={count%2==0?true:false} count={count} >{count}</h1>
         <button onClick={increase}>{props.info}increase</button> 
         <button onClick={decrease}>decrease</button>
         <button onClick={double}>double</button>
     </div>   
    )
}
export default Click 
