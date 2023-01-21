import '../../assets/style/AsideLeft.css'

function Aside() {
    return (
        <>
        <div id="asideLeftFather" className="TestGlass">
            <ul id="listLeftAsideChild">
                <li><a href="#About">About</a></li>
                <li><a href='#Skills'>Skills</a></li>
            <li><a href='#Idioms'>Idioms</a></li>
            <li><a href='#Contact'>Contact</a></li>
            </ul>
        </div>
        </>
      );
}

export default Aside;