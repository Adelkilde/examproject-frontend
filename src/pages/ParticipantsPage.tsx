import { useEffect, useState } from "react";
import { Participant } from "../interfaces/participant";
// import { getParticipants } from "../services/api";

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState<Participant[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/participants")
      .then((response) => response.json())
      .then((data) => setParticipants(data));
  }, []);

  return (
    <div>
      <h1>Participants</h1>
      <ul>
        {participants.map((participant) => (
          <li key={participant.id}>{participant.name}</li>
        ))}
      </ul>
    </div>
  );
}
