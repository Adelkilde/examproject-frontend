import { useEffect, useState } from "react";

export default function ParticipantForm({ handleSave, participant }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [club, setClub] = useState("");

  useEffect(() => {
    if (participant) {
      setName(participant.name);
      setGender(participant.gender);
      const formattedDateOfBirth = new Date(participant.dateOfBirth).toISOString().split("T")[0];
      setDateOfBirth(formattedDateOfBirth);
      setClub(participant.club);
    }
  }, [participant]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !gender || !dateOfBirth || !club) {
      alert("Please fill in all fields");
      return;
    }

    const participantToSave = {
      name,
      gender,
      dateOfBirth,
      club,
    };

    handleSave(participantToSave);

    setName("");
    setGender("");
    setDateOfBirth("");
    setClub("");
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Participant's Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select...</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
          </select>
          <br />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </label>
        <br />
        <label>
          Club:
          <input type="text" value={club} onChange={(e) => setClub(e.target.value)} />
        </label>
        <br />
        <button>{participant ? "Update" : "Create"}</button>
      </form>
    </div>
  );
}
