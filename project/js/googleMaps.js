$(document).ready(function () {
    var center = new google.maps.LatLng(49.993500, 36.230383);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 49.993500, lng: 36.230383},
        scrollwheel: false,
        zoom: 8
    });
    var marker = new google.maps.Marker({
        position: center,
        map: map,
        icon: {
            path: "M9,.05A10.21,10.21,0,0,0,.13,11.89C.8,16,3.87,17.87,10,24c7-7,10-8.48,10-14A10,10,0,0,0,9,.05ZM10.63,14a4,4,0,1,1,3.32-3.32A4,4,0,0,1,10.63,14Z",
            fillColor: "#000000",
            fillOpacity: 1,
            scale: 1,
            strokeWeight: 0
        },
        animation: google.maps.Animation.DROP
    });
});