import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ContactCard from "../component/ContactCard.jsx";
import { Context } from "../store/appContext.js";

const Contact = () => {
  const { store } = useContext(Context);
  console.log(store);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-end">
            <Link to="/add-contact" className="btn btn-success mt-3 mb-3">
              Add new contact
            </Link>
          </div>
          {store.contacts.map((contact) => {
            return <ContactCard key={contact.id} contact={contact} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Contact;
