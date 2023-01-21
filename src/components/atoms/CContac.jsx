import {data} from '../data/data.js'
import outlook from '../../assets/img/outlook.png';
import linkedin from '../../assets/img/linkedin.png';
import github from '../../assets/img/github.png';
import phone from '../../assets/img/phone.png';

import "../../assets/style/CContact.css"
function CContact() {
    return (
        <>
       
        <div className='contactFather'>
            <div className="contactChild">
        <p className='ContactPP'><img className='iconContact' src={outlook} alt="" />{data.contacto.outlook}</p>
        </div>
        <div className="contactChild">
        <p className='ContactPP'><img className='iconContact' src={linkedin} alt="" />{data.contacto.linkedin}</p>
        </div>
        <div className="contactChild">
        <p className='ContactPP'><img className='iconContact' src={github} alt="" />{data.contacto.github}</p>
        </div>
        <div className="contactChild">
        <p className='ContactPP'><img className='iconContact' src={phone} alt="" />{data.contacto.cellphone}</p>
            </div>
        </div>
        </>
      );
}

export default CContact;