import React from "react";
import ContactCard from "./ContactCard";

function ContactList(props) {
  // console.log(props)

  const renderList = props.contacts.map((contact, index) => {
    return (
        <ContactCard contact={contact} key={index}/>
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
