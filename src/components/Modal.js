import React from "react";

function Modal() {
  return (
    <div className="container">
      <center>
        <p>Are you sure?</p>
        <button className="btn btn-danger m-2">Cancel</button>
        <button className="btn btn-success">Confirm</button>
      </center>
    </div>
  );
}

export default Modal;
