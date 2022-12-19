
/*
 * https://console.cloud.google.com/google/maps-apis/metrics?project=luminous-byway-367506
 */

 

function initMap() {


    var options = {
        zoom: 2,
        center: { lat: 41.112663, lng: 29.021330 },
        draggableCursor: 'crosshair',
    }

    map = new google.maps.Map(document.getElementById('map'), options);



    // Add marker where you clicked
    google.maps.event.addListener(map, 'click',
        function (event) {
            //AddMarker(map, event.latLng, "man", "BurakGun");
            //document.getElementById("text").innerHTML += "posX:" + event.latLng.lat()  + "posY: " + event.latLng.lng() + "\n";
            DrawLine(map, event.latLng.lat(), event.latLng.lng() );

        });





}



