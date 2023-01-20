import {Link} from "react-router-dom" 
import Header from "../components/atoms/Header";
import AsideLeft from "../components/molecules/Aside";
import Footer from "../components/atoms/Footer";
import Content from "../components/molecules/Content";
function Home(){
    return(
        <>
            <Header/>
            <AsideLeft/>
            <Content/>
            <Link to="/Registration"><br></br>none</Link>
            <Footer/>
        </>
    )
}
export default Home;