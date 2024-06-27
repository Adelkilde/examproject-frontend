import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CalculateAge from "../components/CalculateAge";
import "../index.css";

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState([]);
  const [filteredParticipants, setFilteredParticipants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchParticipants = async () => {
    const response = await fetch("http://localhost:8080/participants");
    const data = await response.json();
    setParticipants(data);
    setFilteredParticipants(data);
  };

  useEffect(() => {
    console.log("Fetching Participants");
    fetchParticipants();
  }, []);

  useEffect(() => {
    const filtered = participants.filter((participant) =>
      participant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredParticipants(filtered);
  }, [searchTerm, participants]);

  return (
    <div className="container">
      <div className="header">
        <h1>All Participants</h1>
        <div className="search-create-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="button" onClick={() => navigate(`/participants/new`)}>
            Create Participant
          </button>
        </div>
      </div>
      <ul className="participants-list">
        {filteredParticipants.map((participant) => (
          <li key={participant.id} className="participant-item">
            <Link to={`/participants/${participant.id}`}>{participant.name}</Link>
            <p>Gender: {participant.gender}</p>
            <p>
              Age: <CalculateAge dateOfBirth={participant.dateOfBirth} />
            </p>
            <p>Club: {participant.club}</p>
            <div>
              <h4>Disciplines:</h4>
              <ul>
                {participant.disciplines.map((discipline) => (
                  <li key={discipline.id}>{discipline.name}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
