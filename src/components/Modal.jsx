import useGlobalReducer from "../hooks/useGlobalReducer";
import { deleteContact } from "../services/serviceAPI";

export const Modal = (props) => {
    const {store, dispatch} =useGlobalReducer()
    
    const handleDelete = async () => {
        deleteContact(props.id, dispatch)
    }

    return (
        <>
            <i className="bi bi-trash-fill" data-bs-toggle="modal" data-bs-target="#exampleModal"></i>
            <div
                className="modal fade"
                id={`contact_${props.id}`}
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Eliminar contacto
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">¿Seguro que deseas eliminar este contacto? id: {props.id}</div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cancelar
                            </button>
                            <button type="button" data-bs-dismiss="modal" className="btn btn-danger" onClick={handleDelete}>
                                Eliminar Contacto
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};