import Home from "./Pages/Home.js"
import ModeChoice from "./Pages/ModeChoice.js"
import { Route, Routes } from "react-router-dom";

function App() {
  return (

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page2" element={<ModeChoice />} />
        </Routes>
      

  );
}

export default App;
  