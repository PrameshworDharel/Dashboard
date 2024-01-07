import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Navbar";
import Profilepage from "./components/profile";
import Formpage from "./components/forms";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/profile" element={<Profilepage />}></Route>
          <Route path="/forms" element={<Formpage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
