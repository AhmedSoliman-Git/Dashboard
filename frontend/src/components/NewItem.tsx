import { useNavigate } from "react-router-dom";

import Modal from "../Ui/Modal";
import EventForm from "./Form";
function NewItem() {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm method="post" text="Add New Item" />
    </Modal>
  );
}

export default NewItem;
