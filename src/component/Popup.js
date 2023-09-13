import React from "react";
import {useState} from "react";
import "./Popup.css";

function Popup(props) {
    const {editInput,onSaveEdit,onClose} =props
    const [readyToEditText,setEditedText]=useState(editInput)
    
    const handleInputChange=(event)=>{
        setEditedText(event.target.value)
    }
    const handleSave=()=>{
        onSaveEdit(readyToEditText)
       
        

    }
    const handleClose = () => {
        onClose(); // Call the onClose callback to close the popup.
      };

    return props.trigger ? (
        <div className="popup">
            <div className="inner-popup">
                <p>Edit your response</p>
                <input type="text" value={readyToEditText} onChange={handleInputChange}/>
                <button className="close-btn" onClick={handleClose} >close</button>
                <button className="ok-btn" onClick={handleSave}>Ok</button>
                {props.children}
            </div>
        </div>
    ) : ""
}

export default Popup;
