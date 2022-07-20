import React from 'react'
import  './Modal.css'
import Add from '../Add/Add';
import View from '../View/View';

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
        {type === 'Add'
             ?  <Add setActive={setActive}/>
             : <View/>
        }
        
    
        </div>
      </div>
    );
  };
  
  export default Modal;
