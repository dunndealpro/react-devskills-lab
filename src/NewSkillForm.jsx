

export default function NewSkillForm() {
    // Application logic, etc. goes here
    return (
        <form>
            <label>Skill </label><input type="text" name="skill"></input>
            <label>Level </label>
           <select>
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
           </select>
            <button>ADD SKILL</button>
        </form>
        

      
    );
  }