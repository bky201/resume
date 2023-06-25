function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 3,
        center: {
            lat: 38.619261,
            lng:  10.134766
        }
    });

var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var locations = [
    { lat: 9.036000, lng: 38.763611},
    { lat: 53.073635, lng: 8.806422}
];

var markers = locations.map(function(location, i) {
    return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length]
    });
});

var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
}