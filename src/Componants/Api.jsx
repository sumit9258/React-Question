import { useEffect, useState } from "react"

function Api() {
    
    const [data,setData]=useState([])
    const [error,setError]=useState(null)

    const HandleApi=async()=>{
        try {
            let res=await fetch("https://jsonplaceholder.typicode.com/peosts")
            let newData=await res.json()
            if (!res.ok) {
                throw new Error("my server is busy")
            }
setData(newData)
console.log(newData);

setError(null)

        } catch (error) {
            setError("failed to fetch Api Error")
            console.log(error);
            
        }
    }

    useEffect(()=>{
        HandleApi()
    },[])


return(
    <>

{error&& <p>{error} </p>}

    {data.map((ele,i)=>(
        <div>
            <p>{ele.title}</p>
        </div>
    ))}
    
    </>
)


}

export default Api