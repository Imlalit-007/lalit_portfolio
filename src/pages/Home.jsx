import "../styles/Home.css";
import { IoDownload, IoLogoGithub, IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdCloudDownload } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className='home'>
      <div className='text'>
        <p>Hi!</p>
        <h1>i'm lalit</h1>
        <h3>
          A <span>Frontend Developer</span>
          <br />
          based in India.
        </h3>
        <p>
          I'm a frontend developer passionate about merging design and code.
          Proficient in HTML, CSS, JavaScript, and React, I create immersive
          digital experiences, prioritizing user-friendly interfaces and dynamic
          web applications for impact.
        </p>
        <div className='socials'>
          <NavLink to='#'>
            <FaXTwitter />
          </NavLink>
          <NavLink to='#'>
            <IoLogoInstagram />
          </NavLink>
          <NavLink to='#'>
            <IoLogoGithub />
          </NavLink>
        </div>
        <a
          className='resume-file'
          href='src/assets/Lalit Kumar Resume.pdf'
          download
        >
          <IoMdCloudDownload className='resume-icon' />
          Resume
        </a>
      </div>
    </div>
  );
}

export default Home;
