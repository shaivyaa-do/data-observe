import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const overlayStyles = {
    display: isOpen ? 'flex' : 'none',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  };

  const modalStyles = {
    position: 'relative',
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    maxWidth: '73%', // Adjust the width as needed
    maxHeight: '80vh', // Adjust the height as needed
    overflowY: 'auto',
    width: '100%',
  };

  return (
    <div style={overlayStyles} onClick={onClose}>
      <div style={modalStyles} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};


export default Modal;