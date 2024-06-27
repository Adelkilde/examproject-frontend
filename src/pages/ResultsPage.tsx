import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Result } from "../services/entities";

export default function ResultsPage() {
  const [results, setResults] = useState<Result[]>([]);
  const navigate = useNavigate();

  const fetchResults = async () => {
    try {
      const response = await fetch("http://localhost:8080/results");
      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  useEffect(() => {
    fetchResults();
  }, []);

  return (
    <div>
      <h1>Results</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            {result.participant.name} - {result.discipline.name} - {result.resultValue}
            <br />
            Date: {new Date(result.date).toLocaleDateString()}
            <br />
            <br />
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => navigate("/results/new")}>
        Add New Result
      </button>
    </div>
  );
}
