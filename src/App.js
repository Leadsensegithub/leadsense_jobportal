import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from './component/pages/Landingpage';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" name="get" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
