import { useEffect, useState } from "react";
import PrograssBar from "./component/progress"

function App() {
  const [value,setValue]=useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setValue((val)=>val+1)
    },200)
  },[])
  return (
    <>
      <h6 className="font-extrabold">Progress Bar</h6>
      <PrograssBar newValue={value}/>
    </>
  )
}

export default App
