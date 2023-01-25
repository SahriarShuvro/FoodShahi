let btnCartOpen = document.getElementById('btnCartOpen');
let emptyCartWindow = document.getElementById('emptyCartWindow');
let btnCartClose = document.getElementById('btnCartClose');

btnCartOpen.addEventListener('click', function() {
    emptyCartWindow.classList.toggle('btnCartActive');
})
btnCartClose.addEventListener('click', function() {
    emptyCartWindow.classList.remove('btnCartActive');
})

document.addEventListener('click', event => {
    if (event.target.closest('.main'))
        emptyCartWindow.classList.remove('btnCartActive');
})