import React, { createContext, useState  } from "react"
export const SendContext = createContext();
export default function ContextProv(props) {
  const[data,setData] = useState([])
  return(
  <>
    <SendContext.Provider value={[data,setData]}>
{props.children}
      </SendContext.Provider>
</>
  )
}
