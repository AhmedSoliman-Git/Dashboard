import EventForm from "./Form";
import type React from "react";
import Modal from "../Ui/Modal";
import { useLoaderData } from "react-router";
const EditItem: React.FC<{}> = () => {
  const event = useLoaderData()
  return (
    <Modal onClose={() =>console.log("ss")}>
      <EventForm method="patch" event={event.event}  text="Edit Existing Item" />
    </Modal>
  );
};
export default EditItem;
