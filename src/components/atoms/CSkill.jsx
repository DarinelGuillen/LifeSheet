import {data} from '../data/data.js'
import Adaptability from '../../assets/img/Adaptability.png'
import Collaboration from '../../assets/img/Collaboration.png'
import Communication from '../../assets/img/Communication.png'
import ProblemSolving from '../../assets/img/ProblemSolving.png'
import TimeManagement from '../../assets/img/TimeManagement.png'
import hard from '../../assets/img/hard.png'

import "../../assets/style/CSkill.css"
function CSkill() {
    return (
        <>
        <div id='Skills'>
        <a name="Skills"></a>
        <div className="skillfather">
            <div className="skillchild">
            <img id='iconSkill' src={Adaptability} alt="Soft Skill Icon" />
            <p className='pSkill'>{data.SoftSkills.Adaptability}</p>
            <img id='iconSkill' src={Collaboration} alt="Soft Skill Icon" />
            <p className='pSkill'>{data.SoftSkills.Collaboration}</p>
            <img id='iconSkill' src={Communication} alt="Soft Skill Icon" />
            <p className='pSkill'>{data.SoftSkills.Communication}</p>
            <img id='iconSkill' src={ProblemSolving} alt="Soft Skill Icon" />
            <p className='pSkill'>{data.SoftSkills.ProblemSolving}</p>
            <img id='iconSkill' src={TimeManagement}alt="Soft Skill Icon" />
            <p className='pSkill'>{data.SoftSkills.TimeManagement}</p>
            
            </div>
            <div className="skillchild">
            <img id="iconSkill" src={hard} alt="Hard Skill Icon" />
            <p className='pSkill'>{data.HardSkills.DatabaseManagement}</p>
            <img id="iconSkill" src={hard} alt="Hard Skill Icon" />
            <p className='pSkill'>{data.HardSkills.ProgrammingLanguages}</p>
            <img id="iconSkill" src={hard} alt="Hard Skill Icon" />
            <p className='pSkill'>{data.HardSkills.Softwaredevelopmentmethodologies}</p>
            <img id="iconSkill" src={hard} alt="Hard Skill Icon" />
            <p className='pSkill'>{data.HardSkills.WebDevelopment}</p>
            
            </div>

        </div>
        </div>
        </>
      );
}

export default CSkill;