import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DisciplinesPage() {
  const [disciplines, setDisciplines] = useState([]);
  const navigate = useNavigate();

  const fetchDisciplines = async () => {
    const response = await fetch("http://localhost:8080/disciplines");
    const data = await response.json();
    setDisciplines(data);
  };

  useEffect(() => {
    console.log("Fetching Disciplines");
    fetchDisciplines();
  }, []);

  return (
    <div>
      <h1>All Disciplines</h1>
      <ul>
        {disciplines.map((discipline) => (
          <li key={discipline.id}>
            <Link to={`/disciplines/${discipline.id}`}>{discipline.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
