import { useEffect, useState } from "react";

export const Form = () => {
  // e.preventDefault()\
  const [nameval, setName] = useState("");
  const [showname  , setshowname] = useState([]);
  function handlename (namedata) {
    // console.log(namedata);
    setName(namedata);
    
  }
function submitform() {
    let oldname = JSON.parse(localStorage.getItem("name")) || [] // old array
    console.log(nameval);
    let newname = oldname.push(nameval)
    localStorage.setItem("name", JSON.stringify(oldname))
    console.log(newname);
    setshowname(oldname);
    setName("")

}
    useEffect(()=>{
        let oldname = JSON.parse(localStorage.getItem("name")) || []
        setshowname(oldname);
    },[] )

return(
    <>
    <form action="" >
    <input type="text" placeholder="name" value={nameval}  onChange={(e)=>handlename(e.target.value)} />
    <button type="button" onClick={submitform} >Submit</button>
    </form>
    {showname && (
        showname?.map((name,key)=>(
            <p key={key}>name:{name}</p>
        ))
    )}
    </>
)
};
