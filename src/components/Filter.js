import React from "react";
import data from '../data';
const Filter = props => {
  return (
    <div className="col">
        <button type="button" onClick={() => {props.value !== "all"? props.set(data.filter(arr => arr['type'] === props.value)): props.set(data)}} className="btn btn-outline-secondary">{props.name}</button>
    </div>
  );
};
 
export default Filter;