
function initMap() {
    // pick center coordinates for your map
    var losAngeles = {
        lat: 34.063380, 
        lng: -118.358080
    };

    // create map and say which HTML element it should appear in
    map = new google.maps.Map(document.getElementById('map'), {
        center: losAngeles,
        zoom: 11,
        mapTypeId: 'roadmap',
    });

    // create marker and set its position
    var marker = new google.maps.Marker({
        map: map,
        position: losAngeles,
        title: 'losAngeles'
    });

}
