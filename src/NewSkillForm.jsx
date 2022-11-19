import "./NewSkillForm.css";
import {useState} from "react";


export default function NewSkillForm({addSkill}) {
    // Application logic, etc. goes here

//    const [newSkill, setNewSkill] = useState('')
//    const [newLevel, setNewLevel] = useState('')

   const[formSkill, setFormSkill]=useState({
       name: "",
       level: ""
   })

   

    function handleAddSkill(event){
        event.preventDefault()
        console.log("anything?")
        console.log(formSkill)
        
        setFormSkill({
            name: "",
            level: ""
        })
        const newSkill = formSkill;
        addSkill(newSkill);
        
        
        // {setSkills}([newSkill, ...{skills}])
        // const addSkill = {...SkillList, formSkill}
        // setSkills(addSkill)
        // setSkills({...skills, formSkill})
        // addSkill(newSkill);
        // const newSkill = document.querySelector('#skill-input').value
        // if(newSkill.length > 0 && newLevel > 0){ 
        //     console.log('submit click')
        //     setNewSkill('')
        //     setNewLevel('')
        //     console.log('Skill: ', newSkill)
        //     console.log('Level: ',newLevel)
        //     const skillToAdd = { name: newSkill, level: newLevel}
        //     console.log("Skill to Add: ", skillToAdd)
        // }
        // setSkills([newSkill, ...skills])
    }

    // function addSkill(skill){
    //     setSkills([...skills, skill])
    //   }

    const handleSkillChange = (event)=> {        
        console.log(event.target.name)
        const newFormSkill = {...formSkill, [event.target.name]:event.target.value}
        console.log("NEWFORM", newFormSkill)
        setFormSkill(newFormSkill)
        console.log('huh:  ', formSkill)
    }

    // const handleLevelChange = (event)=> {        
    //     console.log('level: ', event.target.value)
    //     setNewLevel(event.target.value)
    // }

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