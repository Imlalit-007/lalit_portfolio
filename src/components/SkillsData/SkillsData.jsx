import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoJavascript,
  IoLogoReact,
  IoLogoGithub
} from "react-icons/io5";
import { SiReactrouter, SiTailwindcss } from "react-icons/si";

function SkillsData() {
  const skills = [
    {
      id: 1,
      name: <IoLogoHtml5 />,
      num: "85%"
    },
    {
      id: 2,
      name: <IoLogoCss3 />,
      num: "85%"
    },
    {
      id: 3,
      name: <IoLogoJavascript />,
      num: "80%"
    },
    {
      id: 4,
      name: <SiTailwindcss />,
      num: "75%"
    },
    {
      id: 5,
      name: <IoLogoReact />,
      num: "65%"
    },
    {
      id: 6,
      name: <SiReactrouter />,
      num: "60%"
    },
    {
      id: 7,
      name: <IoLogoGithub />,
      num: "70%"
    }
  ];

  return (
    <>
      {skills.map(skill => (
        <div className='icon'>
          {skill.name}
          <span>
            <span style={{ width: `${skill.num}` }}></span>
          </span>
          <p>{skill.num}</p>
        </div>
      ))}
    </>
  );
}

export default SkillsData;
