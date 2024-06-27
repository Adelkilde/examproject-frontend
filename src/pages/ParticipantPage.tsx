import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import CalculateAge from "../components/CalculateAge";

export default function ParticipantPage() {
  const { id } = useParams();
  const [participant, setParticipant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchParticipant() {
      try {
        const response = await fetch(`http://localhost:8080/participants/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setParticipant(data);
      } catch (error) {
        console.error("Error fetching participant", error);
      }
    }

    fetchParticipant();
  }, [id]);

  if (!participant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{participant.name}</h1>
      <p>Gender: {participant.gender}</p>
      <p>
        Age: <CalculateAge dateOfBirth={participant.dateOfBirth} />
      </p>
      <p>Club: {participant.club}</p>
      <DeleteButton participant={participant} />
      <button type="button" onClick={() => navigate(`/participants/${participant.id}/edit`)}>
        Edit
      </button>
    </div>
  );
}
