import { deleteParticipant } from "../service/apiFacade";

const DeleteButton = ({ id, onSuccess }) => {
  const handleDelete = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this participant?");
    if (isConfirmed) {
      deleteParticipant(id)
        .then(() => {
          console.log("Participant deleted successfully");
          onSuccess();
        })
        .catch((error) => {
          console.error("Failed to delete participant:", error);
        });
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteButton;
