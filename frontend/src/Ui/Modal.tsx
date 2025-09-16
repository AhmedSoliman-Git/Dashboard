import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";
import classes from "./modal.module.css";
const Modal: React.FC<{ children: ReactNode; onClose: () => void }> = (
  props
) => {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current! as HTMLDialogElement;
    if (modal) {
      modal.showModal();
    }
    return () => {
      modal.close();
    };
  }, []);

  return createPortal(
    <dialog className={classes.modal} ref={dialog}>
      {props.children}
    </dialog>,
    document.getElementById("modal")!
  );
};
export default Modal;
