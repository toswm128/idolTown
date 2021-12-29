import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BattlePage from "./Page/Battle/BattlePage.jsx";
import MainPage from "./Page/Main/MainPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/battle" element={<BattlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
