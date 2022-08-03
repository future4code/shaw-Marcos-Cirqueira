import { useRequestData } from "../hooks/useRequestData"
import { GlobalContext } from "../constants/GlobalContext"

const GlobalState = ({children}) => {
    const [users, requestUsers] = useRequestData([], "https://casecubo.herokuapp.com/user/getallusers")

    const states = { users }
    const requests = { requestUsers }

    return (
        <GlobalContext.Provider value={{ states, requests }}>
            {children}
        </GlobalContext.Provider>
    )

}

export default GlobalState 