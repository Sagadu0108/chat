document.querySelector('.send_btn').addEventListener('click', function() {
    const message = document.querySelector('.type_msg').value;
    if (message) {
        sendMessage(message);
    }
});
function sendMessage(message) {
    const messageContainer = document.createElement('div');
    messageContainer.className = 'd-flex justify-content-end mb-4';
    
    messageContainer.innerHTML = `
    <div class="msg_cotainer_send">
        ${message}
        <span class="msg_time_send">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} Today</span>
    </div>
    <div class="img_cont_msg">
        <img src="./s5.jpg"class="rounded-circle user_img_msg">
    </div>
    `;
    
    document.querySelector('.msg_card_body').appendChild(messageContainer);
    document.querySelector('.type_msg').value = '';
}
