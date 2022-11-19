import "./NewSkillForm.css";
import {useState} from "react";


export default function NewSkillForm({addSkill}) {
   const[formSkill, setFormSkill]=useState({
       name: "",
       level: ""
   })  

    function handleAddSkill(event){
        event.preventDefault()        
        setFormSkill({
            name: "",
            level: ""
        })
        const newSkill = formSkill;
        addSkill(newSkill);
    }

    const handleSkillChange = (event)=> { 
        const newFormSkill = {...formSkill, [event.target.name]:event.target.value}
        setFormSkill(newFormSkill)
        console.log('huh:  ', formSkill)
    }

    return (
        <form onSubmit={handleAddSkill} className="NewSkillForm">
            <label>Skill </label>
            <input value={formSkill.name} name="name" onChange={handleSkillChange} placeholder="New Skill"></input>
            <label>Level </label>
           <select value={formSkill.level} name="level"  onChange={handleSkillChange} >
               <option value={1}>1</option>
               <option value={2}>2</option>
               <option value={3}>3</option>
               <option value={4}>4</option>
               <option value={5}>5</option>
           </select>
            <button type='submit'>ADD SKILL</button>
        </form>              
    );
  }