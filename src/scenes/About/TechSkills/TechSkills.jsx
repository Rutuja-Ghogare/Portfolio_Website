import s from './TechSkills.module.scss';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiSass,
  DiPython,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiPostgresql,
  DiJira,
  DiBootstrap,
  DiDjango,
  DiVisualstudio,
  DiJava,
} from 'react-icons/di';
import {
  SiTypescript,
  SiRedux,
  //SiSocketdotio,
  SiAmazonaws,
  SiVercel,
} from 'react-icons/si';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        {/* <p>JavaScript</p> */}
        <DiJavascript1 />
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
      </li>
      <li className={s.techIcon}>
        <DiNodejs />
      </li>
      <li className={s.techIcon}>
        <DiReact />
      </li>
      <li className={s.techIcon}>
        <DiMongodb />
      </li>
      <li className={s.techIcon}>
        <DiSass />
      </li>
      <li className={s.techIcon}>
        <SiAmazonaws />
      </li>
      <li className={s.techIcon}>
        <SiRedux />
      </li>
      {/* <li className={s.techIcon}>
        <SiSocketdotio />
      </li> */}
      <li className={s.techIcon}>
        <DiGit />
      </li>
      <li className={s.techIcon}>
        <DiPython />
      </li>
      <li className={s.techIcon}>
        <DiHtml5 />
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
      </li>
      <li className={s.techIcon}>
        <DiMysql />
      </li>
      <li className={s.techIcon}>
        <DiPostgresql />
      </li>
      <li className={s.techIcon}>
        <DiJira />
      </li>
      <li className={s.techIcon}>
        <DiBootstrap />
      </li>
      <li className={s.techIcon}>
        <DiDjango />
      </li>
      <li className={s.techIcon}>
        <DiVisualstudio />
      </li>
      <li className={s.techIcon}>
        <DiJava />
      </li>
      <li className={s.techIcon}>
        <SiVercel />
      </li>
    </ul>
  );
};

export default TechSkills;
