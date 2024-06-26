import { useNavigate } from "react-router-dom";

export default function DeleteButton({ participant }) {
  const navigate = useNavigate();

  async function handleDelete() {
    if (window.confirm(`Are you sure you want to delete "${participant.name}"?`)) {
      try {
        const response = await fetch(`http://localhost:8080/participants/${participant.id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          navigate("/participants");
        } else {
          throw new Error("Failed to delete participant");
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  return <button onClick={handleDelete}>Delete</button>;
}
