import s from './AboutTextCard.module.scss';
import { ImPointRight } from 'react-icons/im';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        Hi, I am{' '}
        <span className={s.purple}>Rutuja Ghogare </span>
        a {/* from <span className={s.purple}> Northeastern, University.</span> */}
        {/* <br /> */}
        Software engineer with expertise in Full-Stack Development{' '}
        {/* <br /> */}
        
        <br />
        <br />
        I have a Bachelor's degree in Computer Science and
        <br />
        Master's degree in Information Systems from Northeastern University, Boston.
        <br />
        <br />
        I believe that you should <span className={s.purple}> never stop growing</span> and that's what I strive to do, I have a passion for technology and a desire to always push the limits of what is possible. I am excited to see where my career takes me and am always open to new opportunities.🙂
      <br />
      <br />
      Apart from Professional skills, some other activities that I love to do!
      </p>

      <ul>
        <li className={s.aboutActivity}>
          <ImPointRight /> Baking
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Dancing
        </li>
        <li className={s.aboutActivity}>
          <ImPointRight /> Travelling
        </li>
      </ul>
    </div>
  );
};

export default AboutTextCard;
