import {data} from '../data/data.js'
import Spanish from '../../assets/img/Spanish.png'
import English from '../../assets/img/English.png'
import Japanese from '../../assets/img/Japanese.png'
import "../../assets/style/CIdioms.css"

function CIdioms() {
    return (
        <>
        <div className="container">
            <a name="Idioms"></a>
        {/* {data.idioms.map(itemIdiom=>(
                <div className="child">{data.idioms}</div>
            ))
            } */}
            <div className="child">
                <div className='child'><img id="iconSkill" src={Spanish} alt="Flags Idiom" />
                </div>
                {data.idioms.Spanish}</div>
            <div className="child">
                <div className='child'><img id="iconSkill" src={English} alt="Flags Idiom" />
                </div>
                {data.idioms.English}</div>
            <div className="child">
                <div className='child'><img id="iconSkill" src={Japanese} alt="Flags Idiom" />
                </div>
                {data.idioms.Japanese}</div>
        </div>
        </>
      );
}

export default CIdioms;