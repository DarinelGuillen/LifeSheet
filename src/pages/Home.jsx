
import Header from "../components/atoms/Header";
import AsideLeft from "../components/molecules/Aside";
import Footer from "../components/atoms/Footer";
import Content from "../components/molecules/Content";
function Home(){
    return(
        <>
            <Header/>
            <AsideLeft/>
            <a name="Contact"></a>
            <Content/>
            
        </>
    )
}
export default Home;