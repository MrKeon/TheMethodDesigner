import { useState } from "react";
import Modal from "react-bootstrap/Modal";

interface IPortfolioModalProps {
    children: JSX.Element[] | JSX.Element
}

export default function PortfolioModal(props: IPortfolioModalProps) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    return (
        <>
            <Modal show={show} onHide={handleClose} onClick={handleOpen}>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        </>
    );
}