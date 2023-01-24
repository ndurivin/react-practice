import React from 'react'

function ContactCard(props) {

    const {id, name, email} = props.contact;
  return (
    <div>
        <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col py-2">
          <div class="card">
           <div class="card-body">
              <h5 class="card-title">{name}</h5>
              <p class="card-text">{email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard;