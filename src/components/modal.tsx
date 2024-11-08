import "./modal.css"
type Props = {
    ModalTitle: string;
    ModalText: string;
    ModalImage: string;
    closeModal?: React.MouseEventHandler<HTMLButtonElement>;
}

const Modal = ({ ModalTitle, ModalText, ModalImage, closeModal }: Props) => {
    return (
        <div className="modalContainer">
                <div className="modal">
                <button onClick={closeModal} className="closeButton">close</button>
                    <img className="modalImg" src={ModalImage} />
                    <h2 className="modalTitle">{ModalTitle}</h2>
                    <p className="modalText"> {ModalText}</p>
                </div>
            </div>
    )
}

export default Modal