import React from "react";
import happycutomer from "../../assets/happycutomer.jpg";



export default function CustomerPicture({className=""}) {
    return (
         <div className={`h-32 w-32 rounded-full overflow-hidden  border-2 border-secondary ${className}`}>
            <img src={happycutomer} alt="cuts" className="h-full w-full  object-cover"/>
          </div>
    )
}