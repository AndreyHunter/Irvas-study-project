const images = (selector) => {
    const wrapper = document.querySelector(selector);
    const imgPopup = document.createElement('div');
    const bigImage = document.createElement('img');

    imgPopup.classList.add('popup-images');
    wrapper.append(imgPopup);

    imgPopup.append(bigImage);


    wrapper.addEventListener('click', (e) => {
        e.preventDefault();
        const target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopup.style.display = 'grid';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path)
        }

        if (target && target.matches('div.popup-images')) {
            imgPopup.style.display = 'none';
        }
      
    })
}

export default images;