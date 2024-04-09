const message = {
	loading: 'Загрузка...',
	succsess: 'Отправлено! Скоро наш менеджер с вами свяжется ',
	error: 'Что-то пошло не так',
};

function showMessage(selector, textMessage) {
	const el = document.querySelector(selector);
	el.textContent = textMessage;
}

export { message, showMessage };
