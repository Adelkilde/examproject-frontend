import { useNavigate } from "react-router-dom";
import { addParticipant } from "../service/apiFacade";
import ParticipantForm from "../components/ParticipantForm"; // Adjust the import path as necessary

export default function CreateParticipantPage() {
  const navigate = useNavigate();

  const handleCreateParticipant = async (participant) => {
    try {
      const newParticipant = await addParticipant(participant);
      console.log("Participant created:", newParticipant);
      navigate("/participants"); // Adjust the path as necessary
    } catch (error) {
      console.error("Failed to create participant:", error);
    }
  };

  return (
    <div>
      <h1>Create Participant</h1>
      <ParticipantForm handleSave={handleCreateParticipant} />
    </div>
  );
}
