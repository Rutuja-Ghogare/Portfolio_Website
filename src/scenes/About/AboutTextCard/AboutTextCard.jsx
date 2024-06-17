import s from './AboutTextCard.module.scss';
// import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi, I am{' '}
        <span className={s.purple}>Rutuja Ghogare </span>
        a {/* from <span className={s.purple}> Northeastern, University.</span> */}
        {/* <br /> */}
passionate and experienced software developer with a <span className={s.purple}>Master of Science in Information Systems </span> from Northeastern University. I have honed my skills in various aspects of software development, including application engineering, data management, and user experience design.
I have a strong background in full-stack web development, with proficiency in a wide range of programming languages and frameworks, including <span className={s.purple}>Java, Python, JavaScript, ReactJS, and NodeJS. </span> I have hands-on experience with modern web development tools and methods, and I am skilled in building responsive and user-friendly web applications.
Throughout my career, I have worked on a variety of projects, ranging from database migration and optimization to the development of microservices-based web applications. I have a proven track record of delivering high-quality software solutions that meet both user and business needs, and I am committed to continuous learning and professional development.
💕 I'm passionate about turning complex challenges into seamless solutions, making technology work smarter and lives easier, and I am excited about the opportunity to contribute to innovative projects that have a real impact.
Feel free to explore my portfolio and connect with me on LinkedIn to learn more about my work and experience.
        {/* <br /> */}
        
        <br />
  
        I believe that you should <span className={s.purple}> never stop growing</span> and that's what I strive to do, I have a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my career takes me and am always open to new opportunities and challenges.🙂
      <br />
      <br />
      {/* Apart from Professional skills, some other activities that I love to do! */}
      </p>

      {/* <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Baking
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Dancing
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul> */}
    </div>
  );
};

export default AboutTextCard;
