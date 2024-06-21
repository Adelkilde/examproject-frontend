import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getParticipantById, editParticipant, Participant } from "../service/apiFacade";
import ParticipantForm from "../components/ParticipantForm";

export default function ParticipantEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [participant, setParticipant] = useState<Participant | null>(null);

  useEffect(() => {
    const fetchParticipant = async () => {
      if (id) {
        try {
          const fetchedParticipant = await getParticipantById(Number(id));
          setParticipant(fetchedParticipant);
        } catch (error) {
          console.error("Failed to fetch participant:", error);
        }
      }
    };

    fetchParticipant();
  }, [id]);

  const handleSave = async (editedParticipant: Participant) => {
    try {
      await editParticipant(Number(id), editedParticipant);
      navigate("/participants"); // Adjust the path as necessary
    } catch (error) {
      console.error("Failed to edit participant:", error);
    }
  };

  return (
    <div>
      <h1>Edit Participant</h1>
    </div>
  );
}
