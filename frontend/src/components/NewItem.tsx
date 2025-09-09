import type React from "react";
import Modal from "../Ui/Modal";
import { useNavigate } from "react-router";

const NewItem: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Modal onClose={() => navigate("../")}>
      <div>hello childrens </div>
    </Modal>
  );
};

export default NewItem;
