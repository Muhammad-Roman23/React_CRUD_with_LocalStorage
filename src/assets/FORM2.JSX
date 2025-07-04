import { useState } from "react";
import "./form.css";
export const Form = () => {
    function stopsubmit () {
        event.preventDefault();
    }
    
    const [data,setData]=useState()
    console.log(data);
    function handlename (name,value) {
      console.log(name,value);
        setData((prev)=>({
            ...prev,
            [name]:value
        }))
        
    }
    
  return (
    <>
      <form action="" onSubmit={stopsubmit} >
        <input type="text" placeholder="Write your name"  onChange={(e) =>handlename("Name",e.target.value)} />
        <input type="text" placeholder="Write your e-mail" onChange={(e) =>handlename("E-Mail",e.target.value)}/>
        <button type="submit" onClick={()=>console.log(data)}>Submit</button>
      </form>
    </>
  );
};
