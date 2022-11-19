
import SkillListItem from "./SkillListItem";

export default function SkillList({skills}) {
    // Application logic, etc. goes here
  
    return (
      <ul>
      {skills.map(skill =>(
        <SkillListItem key={skill}  skill={skill}/>
        ))}
    </ul>
    );
  }

  // {skills.map(skill => <SkillListItem skill={skill}/>)}
  