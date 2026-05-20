import { useState } from "react";
import "./../../Light Dark Mode/src/index.css";

function App() {
  const [theme, setTheme] = useState("true");

  const handleThemeChange = () => {
    setTheme(prev=>!prev)
  };

  return (
    <div id="container" className={theme ? 'light' : 'dark'} >
      <button className="btn" onClick={handleThemeChange}>
        Change Color
      </button>
       
      
    </div>
  );
}

export default App;
