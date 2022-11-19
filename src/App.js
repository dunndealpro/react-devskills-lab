import {useState} from "react";

import "./App.css";
import "./SkillListItem.css";
// import "./NewSkillForm.css";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";


// import SkillListItem from "./SkillListItem";

// const skills = ['flamingo', 'Baby Penguin', 'ostrich', 'ptero']

// const skills = [
//   { name: "HTML", level: 5 },
//   { name: "CSS", level: 3 },
//   { name: "JavaScript", level: 4 },
//   { name: "Python", level: 2 },  
// ];



function App() {
  const [skills, setSkills] = useState([
    { name: "HTML", level: 5 },
    { name: "CSS", level: 3 },
    { name: "JavaScript", level: 4 },
    { name: "Python", level: 2 },  
  ]);

function addSkill(skill){
  setSkills([...skills, skill])
}



return (
    <div className="App">
      <h1> React Dev Skills </h1>
      <SkillList skills={skills} />
      {/* <ul>
        {skills.map(skill =>(
          <SkillListItem skill={skill}/>
          ))}
      </ul> */}
<hr/>
<NewSkillForm addSkill={addSkill} />
    </div>
  );
}

export default App;
