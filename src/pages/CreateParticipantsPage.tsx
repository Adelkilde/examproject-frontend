import { Participant } from "../interfaces/participant";
import { useNavigate } from "react-router-dom";

export default function CreateParticipantsPage() {
  const navigate = useNavigate();

  async function handleCreateParticipant(newParticipant: Participant) {
    const response = await fetch("http://localhost:8080/participants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newParticipant),
    });
    if (response.ok) {
      navigate("/participants");
    } else {
      console.error("Failed to create participant");
    }
  }

  return (
    <div>
      <h1>Create Participant</h1>
    </div>
  );
}
