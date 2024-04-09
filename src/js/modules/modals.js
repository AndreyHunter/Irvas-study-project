const initializingModal = () => {
	function bindModal({
		triggerSelector,
		modalOverlay,
		modalSelector,
		closeSelector,
		overlayActiveClass,
		modalActiveClass,
		closeOnInside = false,
		closeOnEscape = false,
	}) {
		const trigger = document.querySelectorAll(triggerSelector);
		const modal = document.querySelector(modalOverlay);
		const modalContent = document.querySelector(modalSelector);
		const closeBtn = document.querySelector(closeSelector);
		const popupOverlay = document.querySelectorAll('[data-modal]');
		const popupContent = document.querySelectorAll('.popup_content');

		trigger.forEach((item) => {
			item.addEventListener('click', (e) => {
				e.preventDefault();
				popupOverlay.forEach((item) => {
					item.classList.remove(overlayActiveClass);
				});
				popupContent.forEach((item) => {
					item.classList.remove(modalActiveClass);
				});

				openModal();
			});
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

		if (closeOnEscape) {
			document.addEventListener('keydown', (e) => {
				const code = e.code;
				if (code === 'Escape' && modal.classList.contains(overlayActiveClass)) {
					closeModal();
				} else {
					return;
				}
			});
		}

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
		closeOnEscape: true,
		closeOnInside: true,
	});

	// FHONE MODAL
	bindModal({
		triggerSelector: '.phone_link',
		modalOverlay: '.popup',
		modalSelector: '.popup_content',
		closeSelector: '.popup_content .popup_close',
		overlayActiveClass: 'overlay-active',
		modalActiveClass: 'show-scale',
		closeOnEscape: true,
		closeOnInside: true,
	});

	// CALC MODAL

	bindModal({
		triggerSelector: '.popup_calc_btn',
		modalOverlay: '.popup_calc',
		modalSelector: '.popup_calc_content',
		closeSelector: '.popup_calc_close',
		overlayActiveClass: 'overlay-active',
		modalActiveClass: 'show-scale',
		closeOnEscape: true,
		closeOnInside: true,
	});

	bindModal({
		triggerSelector: '.popup_calc_button',
		modalOverlay: '.popup_calc_profile',
		modalSelector: '.popup_calc_profile_content',
		closeSelector: '.popup_calc_profile_close',
		overlayActiveClass: 'overlay-active',
		modalActiveClass: 'show-scale',
		closeOnInside: false,
		closeOnEscape: true,
	});

	bindModal({
		triggerSelector: '.popup_calc_profile_button',
		modalOverlay: '.popup_calc_end',
		modalSelector: '.popup_calc_end .popup_content',
		closeSelector: '.popup_calc_end_close',
		overlayActiveClass: 'overlay-active',
		modalActiveClass: 'show-scale',
		closeOnInside: true,
		closeOnEscape: true,
	});
};

export default initializingModal;
