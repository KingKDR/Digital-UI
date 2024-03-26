import { useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Toastmsg({ show, message, onClose }) {
 const [showToast, setShowToast] = useState(show);
 const [time, setTime] = useState('');

 useEffect(() => {
    setShowToast(show);
 }, [show]);

 useEffect(() => {
    if (showToast) {
      setTime(new Date().toLocaleTimeString());
    }
 }, [showToast]);
 
 const handleClose = () => {
    setShowToast(false);
    if (onClose) onClose();
 };

 return (
    <>

       

  
        <ToastContainer
          className="p-3"
          position={'top-center'}
          style={{ zIndex: 1 }}
        >
          <Toast onClose={handleClose} show={showToast} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Notification</strong>

              <small>{ time }</small>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
          </Toast>
        </ToastContainer>
    </>
 );
}

export default Toastmsg;
