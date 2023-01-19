{
    let openNow = document.querySelector('.openNow');
    let closeNow = document.querySelector('.closeNow');

    let date = new Date("April 1 2023, 09:00:01");
    let minutes = date.getMinutes();
    let hours = date.getHours();

    function openClose() {
        if (hours >= 9 && hours < 22) {
            openNow.removeAttribute('style', 'display:none')
            closeNow.setAttribute('style', 'display:none')
        } else {
            openNow.setAttribute('style', 'display:none')
            closeNow.removeAttribute('style', 'display:none')
        }
    }

    openClose();
}
let foodRadio = document.querySelector('.foodRadio input')
let restaurantRadio = document.querySelector('.restaurantRadio input')

let food = document.querySelector('.food')
let restaurant = document.querySelector('.restaurant')

foodRadio.addEventListener('click', function() {
    if (foodRadio.checked == true) {
        food.classList.add('activeFood')
        restaurant.classList.remove('activeRestaurant')
    }
})
restaurantRadio.addEventListener('click', function() {
    if (restaurantRadio.checked == true) {
        restaurant.classList.add('activeRestaurant')
        food.classList.remove('activeFood')
    }
})
window.addEventListener('load', function() {
    if (foodRadio.checked == true) {
        food.classList.add('activeFood')
        restaurant.classList.remove('activeRestaurant')
    }
})
window.addEventListener('load', function() {
    if (restaurantRadio.checked == true) {
        restaurant.classList.add('activeRestaurant')
        food.classList.remove('activeFood')
    }
})