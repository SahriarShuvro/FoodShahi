let allCard = document.querySelectorAll('.singleCard');

allCard.forEach(singleCard => {
    singleCard.onmouseover = () => {
        singleCard.classList.add('cardHover')
    };


    singleCard.addEventListener('mouseleave', function() {
        singleCard.classList.remove('cardHover')
    })


});