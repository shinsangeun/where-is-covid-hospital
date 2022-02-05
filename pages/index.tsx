import type { NextPage } from 'next'
import Kakaomap from "../component/map/Kakaomap";
import Menu from "../component/common/menu/Menu";
import Header from "../component/common/header/Header";
import Footer from "../component/common/footer/Footer";

const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <Menu/>
            <Kakaomap/>
            <Footer/>
        </>
    )
}

export default Home
