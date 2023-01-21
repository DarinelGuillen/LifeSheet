import mainImg from '../../assets/img/dari.jpg'
import CAbout from '../atoms/CAbout';
import CContact from '../atoms/CContac';
import CSkill from '../atoms/CSkill';
import CIdioms from '../atoms/CIdioms';
import Foto from '../atoms/CFoto';
import '../../assets/style/Content.css'

function Content() {
    return (
        <>
        <div id="section">
        <div id="Content">
          <div id="topSection">
            <CContact/>
          </div>
        <Foto/>
        <CAbout/>
        <CSkill />
        <CIdioms/>
        </div>
        </div>
        </>
      );
}

export default Content;