import { useState, useEffect } from "react";
import { Participant, getAllParticipants } from "../service/apiFacade";
import { Link } from "react-router-dom";

export default function ParticipantsPage() {
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [filteredParticipants, setFilteredParticipants] = useState<Participant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const data = await getAllParticipants();
        setParticipants(data);
        setFilteredParticipants(data);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to fetch participants");
        setIsLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  useEffect(() => {
    const filtered = participants.filter((participant) =>
      participant.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredParticipants(filtered);
  }, [searchTerm, participants]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Participants</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul className="vertical-list">
        {filteredParticipants.map((participant) => (
          <li key={participant.id}>
            <Link to={`/participants/${participant.id}`}>{participant.name}</Link>
            {` - ${participant.disciplines.map((d) => d.name).join(", ")}`}
          </li>
        ))}
      </ul>
    </div>
  );
}
