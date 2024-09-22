
import './App.css';
import Avatar from '@mui/material/Avatar';
import Picture from './picture.png';
// import Achievements from './Achievements.js';
// import Education from './Education.js';
// import Experience from './Experience.js';
// import Skills from './Skills.js';


function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', paddingTop: "4vh"}}>
      <Avatar alt="Misha" src={Picture} sx={{ width: 150, height: 150 }}/>
      </div>
      <div className="Name">
        <h1>Misha Aisyah binti Mohd Mokhdhari</h1>
      </div>
      
    </div>
  );
}

export default App;
