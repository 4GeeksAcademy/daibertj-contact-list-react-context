import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { contact } = props;
  const { actions } = useContext(Context);
  return (
    <div className="col-12 d-flex justify-content-between border">
      <div className="d-flex flex-row">
        <img src="https://i.pravatar.cc/200" className="rounded-circle ms-1 mt-1" alt="fullname" />
        <div className="d-flex align-items-start flex-column justify-content-start ms-3 mt-3">
          <h3>{contact.full_name}</h3>
          <p><i class="fa-sharp fa-solid fa-location-dot me-2"></i>{contact.address}</p>
          <p><i class="fa-solid fa-phone me-2"></i>{contact.phone}</p>
          <p><i class="fa-sharp fa-regular fa-envelope me-2"></i>{contact.email}</p>
        </div>
      </div>

      <div>
        <Link to={`/add-contact/${contact.id}`}>
          <i className="fa-solid fa-pencil link-dark m-3"></i>
        </Link>

        <i
          onClick={() => actions.deleteContact(contact.id)}
          className="fa-solid fa-trash m-3"
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
