import { deleteParticipant } from "../service/apiFacade";

const DeleteButton = ({ id, onSuccess }) => {
  const handleDelete = async () => {
    try {
      await deleteParticipant(id);
      onSuccess(); // Callback function to perform an action after deletion (e.g., refresh the list)
    } catch (error) {
      console.error("Failed to delete participant:", error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
