import React,{useState} from 'react'

let Child= (props)=>{
    function changedata(name){
        for(let i=0;i<props.items.length;i++){
            if(props.items[i].name==name){
                let d=[...props.items]
                d.splice(i,1)
                props.set(d)
                break
            }
        }
    }
return (
    <div className='child'>
    <h1>Child Component</h1>
    {props.items.map(element=>(
        <l1>
            {element.name}- {'$'+element.price}
            <button onClick={()=>changedata(element.name)}>Remove</button>
        </l1>
       
    ))}
    </div>
)
}
export default Child