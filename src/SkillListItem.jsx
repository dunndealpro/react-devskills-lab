import "./SkillListItem.css"

export default function SkillListItem({skill}) {
    // Application logic, etc. goes here
    return (            
          <li className="SkillListItem"><div>{skill.name}</div> <div className="level"> LEVEL {skill.level}</div> </li>
    );
  }
  