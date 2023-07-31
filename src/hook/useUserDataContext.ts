import { useContext } from "react"
import { userDataContext } from "../Context/UserDataProvider"
const useUserDataContext=()=>{
    return useContext(userDataContext)
}

export default useUserDataContext