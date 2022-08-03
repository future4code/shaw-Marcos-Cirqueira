import { useContext } from "react"
import { TableDataContainer } from "./styled"
import { GlobalContext } from "../../constants/GlobalContext"

const DataText = () => {

    const { states } = useContext(GlobalContext)

    const users = states.users
    return (
        <TableDataContainer>
            <thead>
                <tr>
                    <th></th>
                    <th className="names">Name</th>
                    <th className="names">Last Name</th>
                    <th className="participations">Participation</th>
                </tr>
            </thead>
            {
                users && users.users && users.users.map((user, index) => {
                    return (
                        <tbody key={user.id}>
                            <tr>
                                <td className="numbers">{index + 1}</td>
                                <td className="names">{user.first_name}</td>
                                <td className="names">{user.last_name}</td>
                                <td className="participations">{user.participation}%</td>
                            </tr>
                        </tbody>
                    )
                })
            }
        </TableDataContainer>
    )
}

export default DataText 