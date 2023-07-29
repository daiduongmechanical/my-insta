import { useContext } from "react"
import { StatusLoginContext } from "../Context/LoginProvider"
const useLoginContext=()=>{
    return (useContext(StatusLoginContext))
}

export default useLoginContext;