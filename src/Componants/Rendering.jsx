import { useState } from "react"

function Rendering() {
    
    const [data,setData]=useState(false)

    const HandleToogle=()=>{
        setData(!data)
    }

    return(
        <>
{data? "Welcome":"Please log in"}
        <button onClick={HandleToogle}>Toogle</button>
        
        </>
    )

}

export default Rendering