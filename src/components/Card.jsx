import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export const Card = ({ contact }) => {

    return (
        <div className="card" >
            <div className="row g-0">
                <div className="col-md-4  justify-content-center align-items-center">
                    <img className="w-100 h-100 object-fit-cover" src="https://media.biobiochile.cl/wp-content/uploads/2017/02/captura-de-pantalla-de-2017-02-01-155150-e1485975198440-730x350.png" />
                </div>
                <div className="col-md-6 col-8">
                    <div className="p-2 text-start">
                        <h5 className="card-title">Name: {contact.name}</h5>
                        <p className="card-text"><i className="bi bi-geo-alt-fill"></i>Address: {contact.address}</p>
                        <p className="card-text"><i className="bi bi-telephone-fill"></i>Phone: {contact.phone}</p>
                        <p className="card-text"><i className="bi bi-envelope-fill"></i>Email: {contact.email}</p>
                    </div>
                </div>
                <div className="col-md-2 col-4  fs-5 align-content-center">
                    <div className="d-flex justify-content-around ">
                        <Link to={`/edit-contact/${contact.id}`}>
                            <i className="fa-solid fa-pencil"></i>
                        </Link>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#contact_${contact.id}`}>
                            <i className="fa-solid fa-trash"></i>
                        </button>

                    </div>
                </div>
            </div>
            <Modal id={contact.id} />
        </div>
    )
}