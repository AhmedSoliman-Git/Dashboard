import { useEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

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
    <dialog className="modal" ref={dialog} onClose={props.onClose}>
      {props.children}
    </dialog>,
    document.getElementById("modal")!
  );
};
export default Modal;
