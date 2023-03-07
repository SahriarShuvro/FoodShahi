{
  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Please allow access to your location");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Please check your internet connection");
            break;
          case error.TIMEOUT:
            alert("The request to get your location timed out");
            break;
          default:
            alert("An unknown error occurred");
            break;
        }
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  function showPosition(position) {
    let currentAddress = document.getElementById("currentLocation");
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const address = data.address;
        const location = `${address.suburb}, ${address.postcode}, ${address.city}, ${address.country}`;
        document.getElementById("address").value = location;
        currentAddress.innerHTML = location;
      })
      .catch((error) => {
        console.error(error);
        document.getElementById("address").value =
          "Error getting location data";
        currentAddress.innerHTML = "Error getting location data";
      });
  }

  getLocation();
}
