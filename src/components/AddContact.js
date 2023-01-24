import React from "react";

function AddContact() {
  return (
    <div className="container">
      <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label" />
          <input
            type="text"
            name="name"
            class="form-control"
            id="exampleInputName"
            placeholder="Enter Name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label" />
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Enter Email Address"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default AddContact;
