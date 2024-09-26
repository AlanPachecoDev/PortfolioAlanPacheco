import logo from './logo.svg';
import './Styles/App.css';
import './Styles/ProjectsStyle.css';
import LeftBar  from './Components/LeftBar';
import FrontPage from "./Components/FrontPage";
import ProjectsSection from "./Components/ProjectsSection"
import TechnologiesSection from "./Components/TechnologiesSection"
import Bubbles from "./Components/Bubbles";
function App() {
  return (
    <div className="App">
      <LeftBar></LeftBar>
      <FrontPage></FrontPage>
      <ProjectsSection></ProjectsSection>
      <TechnologiesSection></TechnologiesSection>
      <Bubbles></Bubbles>
    </div>
  );
}

export default App;
