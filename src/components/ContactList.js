import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  // console.log(props)

  const renderList = props.contacts.map((contact) => {
    return (
        <ContactCard contact={contact}/>
    );
  });

  return (
    <div className="container py-4">
      <h3>Contact List</h3>
      {renderList}
    </div>
  );
}

export default ContactList;
