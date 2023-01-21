import D from '../../assets/img/d.png'
import menuD from '../../assets/img/menu.png'
import {data} from '../data/data.js'
import '../../assets/style/Header.css'
function Header() {
    //let menu=document.querySelector('#menu-icon')
    const handlerClick = (e) => {
    let navbar  =document.querySelector('.navbar')
        e.target.classList.toggle('bx-x');
        navbar.classList.toggle('open');
        
    }
    return ( 
        <header >
            
            
                <a href="#" className="LogoD">
                {/* <img  id="D"src={D} alt="Logo de la pagina SPA Single page aplication" /> */}
            <span id='nickname' > {data.personal.nickname} </span> 
            </a>
            <ul className="navbar">
            <li><a href='#About'>About</a></li>
            <li><a href='#Skills'>Skills</a></li>
            <li><a href='#Idioms'>Idioms</a></li>
            <li><a href='#Contact'>Contact</a></li>
            </ul>
            <div className='main' id="menu-icon" onClick={handlerClick}>
                <a href="#"><img id="D"src={menuD} alt="Foto DE MENU" /></a>
            </div>
            
        </header>
     );
}

export default Header;