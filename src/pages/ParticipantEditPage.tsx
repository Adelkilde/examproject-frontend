import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ParticipantForm from "../components/ParticipantForm";

export default function ParticipantEditPage() {
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

  async function handleEditParticipant(editedParticipant) {
    const response = await fetch(`http://localhost:8080/participants/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedParticipant),
    });
    if (response.ok) {
      navigate(`/participants/${id}`);
    } else {
      alert("Failed to edit person");
    }
  }

  if (!participant) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Edit participant</h1>
      <ParticipantForm handleSave={handleEditParticipant} participant={participant} />
    </div>
  );
}
