function ResuableBtn({btnValue,stateData,bgColor,btnColor}) {
    



    return(
        <>
         <div className={`${bgColor}`}>
<h1>heloo</h1>
        <button onClick={btnValue} className={`${btnColor}`}>Chenge Theme</button>
         </div>
        </>
    )

}

export default ResuableBtn