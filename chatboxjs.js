const Popup = document.querySelector('.action_menu_btn');
const tbPopup = document.querySelector('.action_menu');

Popup.addEventListener('click', () => {
        tbPopup.classList.toggle('active');
    });