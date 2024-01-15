import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children, open, onClose, className = '' }) => {
	const dialog = useRef();

	useEffect(() => {
		const modal = dialog.current;

		if (open) {
			modal.showModal();
		}

		return () => modal.close();
	}, [open]);

	return createPortal(
		<dialog
			onClose={onClose}
			ref={dialog}
			className={`modal ${className}`}>
			{children}
		</dialog>,
		document.getElementById('modal')
	);
};

export default Modal;
