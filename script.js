'use strict';
const showModal = document.querySelectorAll('.show-modal');
const modal = document.querySelectorAll('.modal');
const closeModal = document.querySelectorAll('.close-modal');
const overlay = document.querySelector('.overlay');
let count = 3;

function modalShow(modalNum, num) {
    modal[num].classList.remove('hidden');
    overlay.classList.remove('hidden');
    modalNum.classList.add('hidden');
}

function modalHide(num) {
    modal[num].classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < showModal.length; i++) {
    showModal[i].addEventListener('click', function() {
        modalShow(showModal[i], i);
        count--;
    });
}
for (let i = 0; i < closeModal.length; i++) {
    closeModal[i].addEventListener('click', function() {
        modalHide(i);
    });
}
overlay.addEventListener('click', function() {
    modalHide(0);
    modalHide(1);
    modalHide(2);
    modalHide(3);
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && (!modal[0].classList.contains('hidden') || !modal[1].classList.contains('hidden') || !modal[2].classList.contains('hidden') || !modal[3].classList.contains('hidden'))) {
        modalHide(0);
        modalHide(1);
        modalHide(2);
        modalHide(3);
    }
});