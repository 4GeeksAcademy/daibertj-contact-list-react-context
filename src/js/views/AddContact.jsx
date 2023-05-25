import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const initialState = {
  full_name: "",
  email: "",
  agenda_slug: "daibert_agenda",
  address: "",
  phone: "",
};

const Addcontact = () => {
  const [newContact, setNewContact] = useState(initialState);
  const { actions } = useContext(Context);
  const { id } = useParams();
  console.log(id);
  const addNewContact = (event) => {
    event.preventDefault();
    if (id == undefined) {
      actions.addContacts(newContact);
    } else {
      actions.updateContact(newContact, id);
    }
  };
  const handleContact = (event) => {
    setNewContact({ ...newContact, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Add contact</h1>
          <div className="col-12">
            <form>
              <div className="form-group">
                <label>Fullname</label>
                <input
                  type="text"
                  name="full_name"
                  value={newContact.full_name}
                  onChange={(event) => handleContact(event)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={newContact.email}
                  onChange={(event) => handleContact(event)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Adress</label>
                <input
                  type="text"
                  name="address"
                  value={newContact.address}
                  onChange={(event) => handleContact(event)}
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={newContact.phone}
                  onChange={(event) => handleContact(event)}
                  className="form-control"
                />
              </div>
              <button
                onClick={addNewContact}
                className="btn btn-primary w-100 mt-2"
              >
                Save
              </button>
            </form>
            <Link to="/">or get back contacts</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Addcontact;
