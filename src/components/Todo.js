import React from "react";

function Todo(props) {
  function deleteHandler() {}

  return (
    <div>
      <center>
      <div class="card" style={{maxWidth: 600, margin: 10}}>
      <div class="card-body">
        <h3 class="card-title">{props.title}</h3>
        <button  class="btn btn-danger" onClick={deleteHandler}>
          Delete
        </button>
      </div>
    </div>
      </center>
    </div>
  );
}

export default Todo;
