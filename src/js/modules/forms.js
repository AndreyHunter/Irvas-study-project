import { postReq } from "./server";
import { transformFormData } from "./utils";
import { 
    message,
    showMessage
 } from "./messages";

const forms = () => {
    const form = document.querySelectorAll('form');
    const phoneInputs = document.querySelectorAll('input[name="user_phone"]');
    
    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '')
        });
    });

    form.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(form);
            const formDataObj = transformFormData(formData);
            
            const messageInfo = document.createElement('div');
            messageInfo.classList.add('status');
            messageInfo.textContent = message.loading;
            form.append(messageInfo);

            postReq('assets/server.php', formDataObj)
                .then(() => {
                    showMessage('.status', message.succsess)
                })
                .catch(err => {
                    console.error(err, 'Something went wrong')
                    showMessage('.status', message.error)
                })
                .finally(() => {
                    setTimeout(() => {
                       document.querySelector('.status').remove();
                    }, 3500)
                    form.reset()
                })
        });
    })
};

export default forms;