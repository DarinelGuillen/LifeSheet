import {data} from '../data/data.js'

import "../../assets/style/CAbout.css"
function CAbout() {
    return (
        <>
        <div id='About'>
        <a name="About"></a>
          <p className='PText'>{data.information.about}</p>
        </div>
        </>
      );
}

export default CAbout;