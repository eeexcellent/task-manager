import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button.jsx";

const ModalTwoOptions = forwardRef(function ModalTwoOptions({ children, buttonCaption1, buttonCaption2, onClick1, onClick2 }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="w-1/4 backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button onClick={onClick1}>{buttonCaption1}</Button>
        <Button onClick={onClick2}>{buttonCaption2}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default ModalTwoOptions;
