import axios from "axios"
import { useContext } from "react"
import { useForm } from "../../hooks/userForm"
import { Button, FormContainer, HeaderContainer, Input } from "./styled"
import { GlobalContext } from "../../constants/GlobalContext"

const Header = () => {

    const { requests } = useContext(GlobalContext)

    const initialForm = {
        name: "",
        lastName: "",
        participation: ""
    }

    const sendForm = (event) => {
        event.preventDefault()

        const { first_name, last_name, participation } = form
        const body = {
            first_name,
            last_name,
            participation
        }

        axios
            .post("https://casecubo.herokuapp.com/user/createuser", body)
            .then((res) => {
                clear()
                requests.requestUsers()
                alert(res.data)               
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
    }

    const [form, onChange, clear] = useForm(initialForm)

    const maskOnlyNumber = (string) => {
        return string.replace(/[^0-9]/g, '')
    }

    return (
        <HeaderContainer>
            <FormContainer onSubmit={sendForm}>
                <Input name="first_name"
                    placeholder="Name"
                    value={form.first_name}
                    onChange={onChange} />
                <Input name="last_name"
                    placeholder="Last Name"
                    value={form.last_name}
                    onChange={onChange} />
                <Input name="participation"
                    placeholder="Participation"
                    value={form.participation}
                     onChange={(event) => onChange(event, maskOnlyNumber)}/>
                <Button type="submit">
                    SEND
                </Button>
            </FormContainer>
        </HeaderContainer>
    )
}

export default Header 