import settingInputsType from './settingInputsType';

const changeModalState = (state) => {
	const windowForm = document.querySelectorAll('.balcon_icons_img');
	const windowWidth = document.querySelectorAll('#width');
	const windowHeight = document.querySelectorAll('#height');
	const windowType = document.querySelectorAll('#view_type');
	const windowProfile = document.querySelectorAll('.checkbox');

	settingInputsType('#width');
	settingInputsType('#height');


	function bindActionsToElems(event, element, property) {
		element.forEach((item, index) => {
			item.addEventListener(event, () => {
				switch (item.nodeName) {
					case 'SPAN':
						state[property] = index;
						break;
					case 'INPUT':
						if (item.getAttribute('type') === 'checkbox') {
							index === 0
								? (state[property] = 'Теплое')
								: (state[property] = 'Холодное');

							element.forEach((box, j) => {
								box.checked = false;
								if (index === j) {
									box.checked = true;
								}
							});
						} else {
							state[property] = item.value;
						}
						break;
					case 'SELECT':
						state[property] = item.value;
				}
			});
		});
	}

	bindActionsToElems('click', windowForm, 'form');
	bindActionsToElems('input', windowWidth, 'width');
	bindActionsToElems('input', windowHeight, 'height');
	bindActionsToElems('change', windowType, 'type');
	bindActionsToElems('change', windowProfile, 'profile');
};

export default changeModalState;
