import React from 'react'
import  './Modal.css'

const Modal = function ({ active, setActive, children }) {
    return (
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div
          className="modal__content"
          onClick={(e) => e.stopPropagation()}
        ></div>
      </div>
    );
  };
  
  export default Modal;
