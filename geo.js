const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported with this browser.")
    }
}

/* function to get lat and long */
const showPosition = (position) => {
    let lat = position.coords.latitude;
    let long = position.coords.longitude;

    const des = document.querySelector('#printhere');
    des.innerHTML = `Latitude: ${lat} <br>Longitude: ${long}`;

    const mapElement = document.querySelector('#myMap');
    mapElement.setAttribute('center', `${lat},${long}`);


};

/* Error handling */
const showError = (error) => {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User has denied permission.");
            break

        case error.POSITION_UNAVAILABLE:
            alert("The posiition is unavailable.");
            break;

        case error.TIMOUT:
            alert("The location request has been time out. Please retry.");
            break

        case error.UNKNOWN:
            alert("Unknown error, pease contact developer to fix.");
            break

        default:
            alert("Unknown error, pease contact developer to fix.");
    }
}