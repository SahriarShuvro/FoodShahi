let cartWindow = document.getElementById('cartWindow');

let btnCartOpen = document.getElementById('btnCartOpen');
let btnCartClose = document.getElementById('btnCartClose');

function cartWindowShow() {
    cartWindow.classList.add('btnCartActive')
}

function cartWindowHide() {
    cartWindow.classList.remove('btnCartActive')
}