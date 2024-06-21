import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Participant, getParticipantById } from "../service/apiFacade";
import calculateAge from "../components/CalculateAge";
import DeleteButton from "../components/DeleteButton";

export default function ParticipantPage() {
  const { id } = useParams<{ id: string }>();
  const [participant, setParticipant] = useState<Participant | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchParticipantDetails = async () => {
      try {
        const data = await getParticipantById(Number(id));
        setParticipant(data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch participant details");
        setIsLoading(false);
      }
    };

    fetchParticipantDetails();
  }, [id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!participant) return <div>Participant not found</div>;

  return (
    <div>
      <h1>Participant Details</h1>
      <div>Name: {participant.name}</div>
      <div>Club: {participant.club}</div>
      <div>Age: {participant.dateOfBirth ? calculateAge(participant.dateOfBirth) : "Unknown"}</div>
      <div>Disciplines: {participant.disciplines.map((d) => d.name).join(", ")}</div>{" "}
      <DeleteButton Participant={participant} />
      <button type="button" onClick={() => navigate(`/participants/${participant.id}/edit`)}>
        Edit
      </button>{" "}
    </div>
  );
}
