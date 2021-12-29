import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BattlePage from "./Page/Battle/BattlePage.jsx";
import RankingPage from "./Page/Ranking/RankingPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<RankingPage />} />
        <Route path="/battle" element={<BattlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
