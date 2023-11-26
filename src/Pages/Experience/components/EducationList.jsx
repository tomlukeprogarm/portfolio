const EducationList = () => {
  const educationData = [
    {
      university: "Boolean Careers 2023-2024",
      degree: "Full Stack Development Course:",
      description:
        "A full-time 6-month coding academy focusing on full-stack development. Learned how to turn user requirements into quality software. This included a 4-week team development project working with the rest of my class on an existing codebase. This let us practice Kanban and agile with stand-ups and retros as well as best practice around branching, merge conflicts, and pull requests.",
    },
    {
      university: "University of the Highlands and Islands 2018-2022",
      degree: "Popular Music:",
      description:
        "Proficient in diverse guitar styles (rock, jazz, blues), with expertise in acoustic and electric techniques. Sound grounding in music theory, complemented by hands-on experience in ensemble playing, arranging, and band leadership. Skilled in industry-standard Digital Audio Workstations (DAWs) such as Pro Tools and Logic Pro for music production, recording, editing, and mixing. Notable projects include leading a student-formed band, producing a varied music portfolio, and conducting research on innovative guitar techniques for contemporary music. Active engagement in music festivals, workshops, and tutoring beginners in guitar fundamentals demonstrate a dedication to musical excellence and collaboration.",
    },
  ];
  return (
    <ul className="education-list">
      {educationData.map ((edu, index) =>(
        <li className="edu-list-item" key={index}>
        <h4 className="uni-name">{edu.university}</h4>
        <p className="degree">{edu.degree}</p>
        <p className="description">{edu.description}</p>
      </li>
      ))}
      
    </ul>
  );
};
export default EducationList;
