import {Link} from "react-router-dom" 
import Header from "../components/atoms/Header";
import ListAsideLeft from "../components/molecules/Aside";
import Footer from "../components/atoms/Footer";
function Home(){
    return(
        <>
            <Header/>
            <ListAsideLeft></ListAsideLeft>
            <Link to="/Login">none</Link>
            <Link to="/Registration">none</Link>
            <Footer/>
        </>
    )
}
export default Home;