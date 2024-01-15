import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleOverlayClick = () => {
    onClose();
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); 
  };

  return ReactDOM.createPortal(
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10"
      onClick={handleOverlayClick}
    >
      <div 
        className="p-5 rounded-lg max-w-4xl w-11/12 h-auto relative"
        onClick={handleModalClick} 
      >
        {children}
        {/* <button
          onClick={onClose}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute top-2 right-2"
          style={{ zIndex: 20 }}
        >
          Close
        </button> */}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
