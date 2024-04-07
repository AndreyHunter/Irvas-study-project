const initializingModal = () => {
	function bindModal({
		triggerSelector,
		modalOverlay,
		modalSelector,
		closeSelector,
		overlayActiveClass,
		modalActiveClass,
		closeOnInside = true,
	}) {
		const trigger = document.querySelector(triggerSelector);
		const modal = document.querySelector(modalOverlay);
		const modalContent = document.querySelector(modalSelector);
		const closeBtn = document.querySelector(closeSelector);

		trigger.addEventListener('click', (e) => {
			e.preventDefault();
			openModal();
		});

		closeBtn.addEventListener('click', () => {
			closeModal();
		});

		if (closeOnInside) {
			modal.addEventListener('click', (e) => {
				const target = e.target;
				if (target === modal) {
					closeModal();
				}
			});
		}

		document.addEventListener('keydown', (e) => {
			const code = e.code;
			if (code === 'Escape' && modal.classList.contains(overlayActiveClass)) {
				closeModal();
			} else {
				return;
			}
		});

		function openModal() {
			modal.classList.add(overlayActiveClass);
			modalContent.classList.add(modalActiveClass);
			document.body.classList.add('modal-open');
		}

		function closeModal() {
			modal.classList.remove(overlayActiveClass);
			modalContent.classList.remove(modalActiveClass);
			document.body.classList.remove('modal-open');
		}
	
    }

    // ENGINNER MODAL
	bindModal({
		triggerSelector: '.popup_engineer_btn',
		modalOverlay: '.popup_engineer',
		modalSelector: '.popup_engineer .popup_content',
		closeSelector: '.popup_engineer .popup_close',
		overlayActiveClass: 'overlay-active',
		modalActiveClass: 'show-scale',
	});

    // FHONE MODAL
	bindModal({
		triggerSelector: '.phone_link',
		modalOverlay: '.popup',
		modalSelector: '.popup_content',
		closeSelector: '.popup_content .popup_close',
		overlayActiveClass: 'overlay-active',
		modalActiveClass: 'show-scale',
		closeOnInside: false,
	});

    // SECOND FHONE MODAL

    bindModal({
		triggerSelector: '.phone-link',
		modalOverlay: '.popup',
		modalSelector: '.popup_content',
		closeSelector: '.popup_content .popup_close',
		overlayActiveClass: 'overlay-active',
		modalActiveClass: 'show-scale',
		closeOnInside: false,
	});

};

export default initializingModal;
