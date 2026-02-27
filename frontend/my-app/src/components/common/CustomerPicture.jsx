import React, { Children } from "react";
// import happycutomer from "../../assets/happycustomer1.jpg";



export default function CustomerPicture({className="", src}) {
    return (
         <div className={`h-32 w-32 rounded-full overflow-hidden  border-2 border-secondary ${className}`}>
            <img src={src} alt="cuts" className="h-full w-full  object-cover"/>
          </div>
    )
}