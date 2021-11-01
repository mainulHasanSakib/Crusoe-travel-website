import { useContext } from "react"
import { AuthContext } from "../Hook/Authprovider"

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;