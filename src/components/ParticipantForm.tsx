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
      setDateOfBirth(participant.dateOfBirth);
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
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </label>
        <br />
      </form>
    </div>
  );
}
