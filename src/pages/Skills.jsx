import "../styles/Skills.css";
import SkillsData from "../components/SkillsData/SkillsData";

function Skills() {
  return (
    <div className='skills'>
      <div className='skills-heading'>
        <h4>My Tech</h4>
        <h1>Skills</h1>
      </div>
      <div className='skills-info'>
        <SkillsData />
      </div>
    </div>
  );
}

export default Skills;
