import './slider';
import initializingModal from './modules/modals';
import tabs from './modules/tabs';

initializingModal();

tabs({
    wrapperSelector: '.glazing_slider',
    tabSelector: '.glazing_slider .glazing_block',
    contentSelector: '.glazing_content',
    tabActiveClass: 'active',
    contentActiveClass: 'active'
});

tabs({
    wrapperSelector: '.decoration_slider',
    tabSelector: '.no_click',
    contentSelector: '[data-decoration-content]',
    tabActiveClass: 'after_click',
    contentActiveClass: 'active',
    initialContentIndex: 0
});