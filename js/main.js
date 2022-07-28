import {modals, drop, uploadImg} from './modal.js';



document.querySelector('.modal-content__btnUpload').addEventListener('click', () => uploadImg());
window.addEventListener('DOMContentLoaded', () => {
    modals();
    drop();
})
