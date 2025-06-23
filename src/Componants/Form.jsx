import { useState } from "react"

function Form() {
    
    const [data,setData]=useState("")

    const HandleSubmit=(e)=>{
e.preventDefault();
console.log(data);

    }

    return(
        <>

        <form onSubmit={HandleSubmit}>
            <input className="bordered" type="text" onChange={(e)=> setData(e.target.value)} />
            <button type="submit">submit</button>
        </form>
        
        </>
    )

}

export default Form