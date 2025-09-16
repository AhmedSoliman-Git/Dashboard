import EventForm from "./Form";
import type React from "react";
import Modal from "../Ui/Modal";
import { useLoaderData, useNavigate } from "react-router";
const EditItem: React.FC<{}> = () => {
  const navigate = useNavigate();
  const {event} = useLoaderData()
  return (
    <Modal onClose={() => navigate("../")}>
      <EventForm method="patch" event={event} text="Edit Existing Item" />
    </Modal>
  );
};
export default EditItem;
