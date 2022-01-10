import "./App.css";
import IconComponent from "./components/IconComponent";
import { IconContext } from "react-icons";




function App() {
  return (
    <div className="App">
      <IconContext.Provider
        value={{ color: "blue", size:'80px' , className: "example-class-name"  }}
      >
        <IconComponent />
      </IconContext.Provider>
    </div>
  );
}

export default App;
