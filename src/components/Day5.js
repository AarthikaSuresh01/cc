import React from 'react'

export default function Listfunction() {
    var fruits=["APPLE","ORANGE","MANGO","GRAPES"]
    var displayfruits=fruits.map(fname=>{return <li>{fname}</li>})/*outside the function */
    const stuinfo=[{id:1,name:"ANU"},{id:2,name:"SHIVANI"},{id:3,name:"ARAVIND"},{id:4,name:"ARJUN"},{id:5,name:"AJAY"},{id:6,name:"NITHISH"}]
  return (
    <div className='day8'>{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    <TryCatch name ="aarthi"></TryCatch>
    </div>
  )
}
function TryCatch(props){
    try{
        if(props.name==="aarthi"){
            throw new Error("INVALID USER")
        }
    }
    catch(error){
        console.log(error)
    }
    //finally{
        //document.write("ALWAYS EXCEUTED")
   // }
    return(
        <>
    <p>{props.name}</p>
        </>
    );
}