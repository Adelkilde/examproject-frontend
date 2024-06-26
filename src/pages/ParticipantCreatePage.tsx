import { useNavigate } from "react-router-dom";
import ParticipantForm from "../components/ParticipantForm";

export default function ParticipantCreatePage() {
  const navigate = useNavigate();

  async function handleCreateParticipant(newParticipant) {
    try {
      const response = await fetch(`http://localhost:8080/participants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newParticipant),
      });
      if (response.ok) {
        navigate(`/participants`);
      } else {
        const errorMessage = await response.text();
        console.error(`Failed to create participant: ${response.status} - ${errorMessage}`);
        throw new Error(`Failed to create participant: ${response.status} - ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <div>
      <h1>Create participant</h1>
      <ParticipantForm handleSave={handleCreateParticipant} />
    </div>
  );
}
