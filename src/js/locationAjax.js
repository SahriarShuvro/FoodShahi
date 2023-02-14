function Loading() {
    let myLocation = document.getElementById('myLocation')
    let loader = document.getElementById('loader')
    loader.classList.add('loadingAnimation')
    myLocation.setAttribute('style', 'font-size: 0; transition-duration: 300ms;')
}

function fetchText() {
    let xhr = new XMLHttpRequest();
    let myLocation = document.getElementById('myLocation')
    let locationText = document.getElementById('locationText')

    xhr.open('GET', 'https://ipinfo.io/json?token=189cf1ef613cd8', true);

    // xhr.onprogress = function() {

    //     console.log('Loading')
    // }

    xhr.onload = function() {
            let loader = document.getElementById('loader')
            let data = JSON.parse(this.responseText);
            locationText.value = data.abuse.address + " " + data.city + " " + data.region;
            console.log(data.abuse.address + " " + data.city + " " + data.region);

            function afterLoading() {
                loader.classList.remove('loadingAnimation')
                myLocation.removeAttribute('style', 'font-size: 0; transition-duration: 300ms;')
            }
            setTimeout(afterLoading, 1000)
        }
        // let locationText = document.getElementById('locationText');
        // let myLocation = document.getElementById('myLocation');
        // let response = await fetch(url);
        // let data = await response.json();
        // locationText.value = data.abuse.address + " " + data.city + " " + data.region;

    xhr.send();
};