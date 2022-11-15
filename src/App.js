import logo from "./logo.svg";
import "./App.css";
import SkillList from "./SkillList";
import NewSkillForm from "./NewSkillForm";

function App() {
  return (
    <div className="App">
      <h1> React Dev Skills </h1>
      <SkillList />
<hr></hr>
<NewSkillForm />
    </div>
  );
}

export default App;
