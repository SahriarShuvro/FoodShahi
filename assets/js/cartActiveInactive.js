let btnCartOpen = document.getElementById('btnCartOpen');
let cartWindow = document.getElementById('cartWindow');
let btnCartClose = document.getElementById('btnCartClose');

btnCartOpen.addEventListener('click', function() {
    cartWindow.classList.toggle('btnCartActive');
})
btnCartClose.addEventListener('click', function() {
    cartWindow.classList.remove('btnCartActive');
})

document.addEventListener('click', event => {
    if (event.target.closest('.main'))
        cartWindow.classList.remove('btnCartActive');
})