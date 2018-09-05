function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(42.136713, -71.007619),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}