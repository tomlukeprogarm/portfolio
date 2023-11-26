import "./index.css";
import EducationList from "./components/EducationList";

const Experience = () => {
  return (
    <>
      <article className="experience">
        <h2 className="header-experience">EXPERIENCE</h2>
        </article>
        <p className="experience-para">
          While my direct experience in the tech industry is currently limited,
          my ongoing coursework has immersed me in a dynamic learning
          environment. Engaging in daily exercises and collaborative team
          projects, I've been challenged to apply my skills independently
          through various assessments. Recognizing that my journey in tech is in
          its early stages, I am enthusiastic and driven to delve deeper,
          continuously expanding my knowledge and skills.
        </p>
      

      <article className="education">
        <h2 className="header-education">EDUCATION</h2>
        <div className="education-list">
          <EducationList />
        </div>
      </article>
    </>
  );
};
export default Experience;
