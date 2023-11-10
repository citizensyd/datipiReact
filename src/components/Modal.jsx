import React from "react";
import { ModalStyles } from "./Modal.styles";
/**
 * Modal component that can be opened or closed based on the `isOpen` prop.
 *
 * @param {Object} props - The component props.
 * @param {boolean} props.isOpen - Determines whether the modal is open or closed.
 * @param {Function} props.onClose - Callback function to close the modal.
 * @param {ReactNode} props.children - The content to be displayed within the modal.
 * @returns {JSX.Element} The Modal component.
 */
const Modal = ({ isModalOpen, onClose, children }) => {
    console.log(isModalOpen);
    return (
      <ModalStyles isModalOpen={isModalOpen}>
        {/* Close button for the modal */}
        <span onClick={onClose}>
          &times;
        </span>
        {children}
      </ModalStyles>
    );
  };

export default Modal;
