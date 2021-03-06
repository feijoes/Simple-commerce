import React from "react";
import '../static/css/Popup.css'


const Popup = props => {
const open_close = () => {props.set(!props.name)}
  return (
    <div onClick={open_close}>
      {props.button}
      {props.name && <div className="popup-box">
        <div className="box">
          <span className="close-icon" onClick={open_close}>x</span>
          <div>
          {props.content}
          </div>
        </div>
      </div>}
    </div>
  );
};
 
export default Popup;