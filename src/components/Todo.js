import { useState } from "react";
import Modal from "./Modal";

function Todo(props) {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }


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
      { modalIsOpen ? <Modal /> : null }
    </div>
      </center>
    </div>
  );
}

export default Todo;
