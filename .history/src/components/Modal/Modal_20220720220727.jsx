import React from 'react'
import  './Modal.css'
import Add from '../Add/Add';
import View from '../View/View';

const Modal = function ({data, active, setActive, children, type, typeData}) {


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
             ?  <Add data={data} setActive={setActive} typeData={typeData}/>
             : <View/>
        }
        
    
        </div>
      </div>
    );
  };
  
  export default Modal;
