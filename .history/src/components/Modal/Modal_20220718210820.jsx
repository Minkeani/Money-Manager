import React from 'react'
import  './Modal.css'

const Modal = function ({ active, setActive, children, type}) {
    return (
      <div
        className={active ? "modal active" : "modal"}
        onClick={() => setActive(false)}
      >
        <div
          className="modal__content"
          onClick={(e) => e.stopPropagation()}
        >
        {type}
        </div>
      </div>
    );
  };
  
  export default Modal;
