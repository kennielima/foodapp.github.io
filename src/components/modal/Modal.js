import { Fragment } from 'react';
import classes from './Modal.module.css';
// import { ReactDOM } from 'react-dom';
import { createPortal } from 'react-dom';

const Backdrop = (props) => {
    return <div className={classes.backdrop} onClick={props.onClose}/>
};
const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            {props.children}
        </div>
    )
};

const portal = document.getElementById('overlays');

const Modal = (props) => {
    return (
        <Fragment>
            {createPortal(<Backdrop onClose={props.onClose}/>, portal)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portal)}
        </Fragment>
    );
}

export default Modal;