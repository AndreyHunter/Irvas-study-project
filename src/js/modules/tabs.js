const tabs = ({
    wrapperSelector,
    tabSelector,
    contentSelector,
    tabActiveClass,
    contentActiveClass,
    initialContentIndex
}) => {
    const wrapper = document.querySelector(wrapperSelector);
    const tabs = document.querySelectorAll(tabSelector);
    const contents = document.querySelectorAll(contentSelector);

    wrapper.addEventListener('click', (e) => {
        const target = e.target;

        tabs.forEach((tab, index) => {
            if (target === tab || target.closest(tabSelector) === tab) {
                if (tab.classList.contains(tabActiveClass)) return;
                hideTabContent();
                showTabContent(index);
            }
        })
    });

    hideTabContent()
    showTabContent(initialContentIndex)

    function hideTabContent() {
        tabs.forEach(tab => tab.classList.remove(tabActiveClass));
        contents.forEach(content => content.classList.remove(contentActiveClass));
    }

    function showTabContent(index = 0) {
        tabs[index].classList.add(tabActiveClass);
        contents[index].classList.add(contentActiveClass);
    }
};

export default tabs;