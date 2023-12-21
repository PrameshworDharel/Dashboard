import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Navbar";
import Profilepage from "./components/profile";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/profile" element={<Profilepage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
