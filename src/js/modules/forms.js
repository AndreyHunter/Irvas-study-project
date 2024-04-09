import { postReq } from './server';
import { transformFormData } from './utils';
import { message, showMessage } from './messages';
import settingInputsType from './settingInputsType';

const forms = (state) => {
	const form = document.querySelectorAll('form');

	settingInputsType('input[name="user_phone"]');

	form.forEach((form) => {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

            const messageInfo = document.createElement('div');
			messageInfo.classList.add('status');
			messageInfo.textContent = message.loading;
			form.append(messageInfo);

			const formData = new FormData(form);
            if (form.getAttribute('data-calc') === 'end') {
                for (let key in state)  {
                    formData.append(key, state[key])
                }
            }
            const formDataObj = transformFormData(formData);

			postReq('assets/server.php', formDataObj)
				.then(() => {
					showMessage('.status', message.succsess);
				})
				.catch((err) => {
					console.error(err, 'Something went wrong');
					showMessage('.status', message.error);
				})
				.finally(() => {
					setTimeout(() => {
						document.querySelector('.status').remove();
					}, 3500);
					form.reset();
				});
		});
	});
};

export default forms;
