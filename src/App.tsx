import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ParticipantsPage from "./pages/ParticipantsPage";
import ParticipantPage from "./pages/ParticipantPage";
import ParticipantEditPage from "./pages/ParticipantEditPage";
import ParticipantCreatePage from "./pages/ParticipantCreatePage";
import DisciplinesPage from "./pages/DisciplinesPage";
import ResultsPage from "./pages/ResultsPage";
import "./index.css";

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
            <Route path="/participants/:id" element={<ParticipantPage />} />
            <Route path="/participants/:id/edit" element={<ParticipantEditPage />} />
            <Route path="/participants/new" element={<ParticipantCreatePage />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
