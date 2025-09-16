import type React from "react";
import Modal from "../Ui/Modal";
import { useNavigate } from "react-router";
import EventForm from "./Form";
const NewItem: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <Modal onClose={() => navigate("../")}>
        <EventForm method="post" text="Add New Item"/>
    </Modal>
  );
};

export default NewItem;
