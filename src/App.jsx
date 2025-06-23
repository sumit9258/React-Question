import { useState } from "react"
import Rendering from "./Componants/Rendering"
import PropsMethod from "./Componants/PropsMethod"
import Form from "./Componants/Form"
import Api from "./Componants/Api"
import ResuableBtn from "./Componants/ResuableBtn"

function App() {

  const [btnData,setBtnData]=useState("dark")

  const HandleProps=()=>{
    alert("succesfully")
  }


  const HandleBtn=()=>{

    setBtnData(btnData=="dark"?"light":"dark")

  }


    return(
      <>
      <Rendering/>
      <PropsMethod data={HandleProps} />
      
      <ResuableBtn  btnValue={HandleBtn}
       bgColor={btnData === "dark" ? "bg-gray-800" : "bg-yellow-300"}
  btnColor={btnData === "dark" ? "bg-green-600" : "bg-red-600"}
      />
<Form />
<Api />

      </>
    )
  
}

export default App