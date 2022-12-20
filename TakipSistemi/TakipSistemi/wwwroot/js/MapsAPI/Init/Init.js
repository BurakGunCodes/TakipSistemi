
/*
 * https://console.cloud.google.com/google/maps-apis/metrics?project=luminous-byway-367506
 */
/*<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA9VhhFBSrb-1GjySwh7QhJBuD7HKFqq7E&callback=initMap"></script>*/
 

function initMap() {


    var options = {
        zoom: 6,
        center: { lat: 38.734802,  lng: 35.467987 }, // orta nokta olsun diye Konya lokasyonu
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


