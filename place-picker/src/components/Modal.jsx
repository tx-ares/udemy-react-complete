import { useEffect } from 'react';
import { useRef } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, onClose, children }) {
	const dialog = useRef();

	useEffect(() => {
		if (open) {
			dialog.current.showModal();
		} else {
			dialog.current.close();
		}
	}, [open]); // The second argument is an array of dependencies. If any of the dependencies change, the effect will run again. If the array is empty, the effect will only run once.

	return createPortal(
		<dialog
			className='modal'
			ref={dialog}
			onClose={onClose}>
			{open ? children : null}
		</dialog>,
		document.getElementById('modal')
	);
}

export default Modal;
