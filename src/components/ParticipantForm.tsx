import { useEffect, useState } from "react";

export default function ParticipantForm({ handleSave, participant }) {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [club, setClub] = useState("");
  const [disciplines, setDisciplines] = useState([]);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (participant) {
      setName(participant.name);
      setGender(participant.gender);
      setDateOfBirth(participant.dateOfBirth);
      setClub(participant.club);
      setDisciplines(participant.disciplines);
      setIsUpdate(true);
    }
  }, [participant]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !gender || !dateOfBirth || !club || !disciplines.length) {
      alert("Please fill in all fields");
      return;
    }

    const participantToSave = {
      name,
      gender,
      dateOfBirth,
      club,
      disciplines,
    };

    handleSave(participantToSave);

    if (!isUpdate) {
      setName("");
      setGender("");
      setDateOfBirth("");
      setClub("");
      setDisciplines([]);
    }
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
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
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
        <label>
          Club:
          <input type="text" value={club} onChange={(e) => setClub(e.target.value)} />
        </label>
        <br />
        <label>
          Disciplines:
          <select value={disciplines} onChange={(e) => setDisciplines(e.target.value)}>
            <option value="Running">Running</option>
            <option value="Throwing">Throwing</option>
            <option value="Decathlon">Decathlon</option>
          </select>
        </label>
        <button type="submit">{isUpdate ? "Save Changes" : "Create"}</button>
      </form>
    </div>
  );
}
