import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ParticipantsPage from "./pages/ParticipantsPage";
import DisciplinesPage from "./pages/DisciplinesPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  return (
    <>
      <main>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/disciplines" element={<DisciplinesPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/participants" element={<ParticipantsPage />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
