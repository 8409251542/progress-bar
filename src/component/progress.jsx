
import { useEffect, useState } from "react";
import "../App.css"

// eslint-disable-next-line react/prop-types
const PrograssBar=({newValue=0})=>{
    const [percent, setPercent]= useState(newValue);
    useEffect(()=>{
        setPercent(Math.min(100,Math.max(newValue,0)));
    },[newValue])
    return(
        <div className="progress">
            <span style={{color:percent>49?"white":"black"}}>{percent.toFixed()}%</span>
            <div className="green" style={{width:`${percent}%`}}/>
        </div>
    )
}

export default PrograssBar;