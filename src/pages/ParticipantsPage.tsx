import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState([]);
  const navigate = useNavigate();

  const fetchParticipants = async () => {
    const response = await fetch("http://localhost:8080/participants");
    const data = await response.json();
    setParticipants(data);
  };

  useEffect(() => {
    console.log("Fetching Participants");
    fetchParticipants();
  }, []);

  return (
    <div>
      <h1>All Participants</h1>
      <button type="button" onClick={() => navigate(`/participants/new`)}>
        Create Participant
      </button>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id}>
            <Link to={`/participants/${participant.id}`}>{participant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
