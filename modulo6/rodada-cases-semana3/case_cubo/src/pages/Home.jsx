import DataText from "../components/DataText/DataText"
import Header from "../components/Header/Header"
import Title from "../components/Title/Title"
import { DataContainer } from "./styled"
import Graphic  from "../components/Graphic/Graphic"

const Home = () => {

    return (
        <div>
            <Header />
            <Title />
            <DataContainer>
                <DataText />
                <Graphic />
            </DataContainer>
        </div>
    )
}

export default Home 