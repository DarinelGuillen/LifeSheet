import D from '../../assets/img/d.png'
import menuD from '../../assets/img/menu.png'

import '../../assets/style/Header.css'
function Header() {
    // let menu=document.querySelector('#menu-ico')
    // let navbar  =document.querySelector('.navbar')
    // menu.onclick=()=>{
    //     menu.classList.toggle('bx-x');
    //     navbar.classList.toggle('open');
    // }
    return ( 
        <header>
            <div>
                <a href="#" className="LogoD">
                <img  id="D"src={D} alt="Logo de la pagina SPA Single page aplication" />
            <span> Darinel E.G. </span>
            </a>
            </div>
            <ul className="navbar">
            <li><a href='#'>About</a></li>
            <li><a href='#'>None</a></li>
            <li><a href='#'>Work</a></li>
            <li><a href='#'>More</a></li>
            <li><a href='#'><button>HERE</button></a></li>
            </ul>
            <div className='main' id="menu-icon">
                <a href="#"><img id="D"src={menuD} alt="Foto DE MENU" /></a>
            </div>

        </header>
     );
}

export default Header;