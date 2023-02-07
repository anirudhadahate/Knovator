import Timer from "./Timer";
import Adddata from "./Adddata";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Timer />} />
        <Route path="/Adddata" exact element={<Adddata />} />
      </Routes>
    </Router>
  );
};

export default App;
