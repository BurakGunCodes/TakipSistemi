//// Note: This example requires that you consent to location sharing when
//// prompted by your browser. If you see the error "The Geolocation service
//// failed.", it means you probably did not give permission for the browser to
//// locate you.

//***kaynak** */
/*https://developers.google.com/maps/documentation/javascript/geolocation#maps_map_geolocation-javascript*/

let infoWindow;

function FindMe(mapName) {

    const _mapName = mapName;

    infoWindow = new google.maps.InfoWindow();
    //RouteMap: Benim kendi haritamın ismi

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                   
                    infoWindow.setPosition(pos);
                    infoWindow.setContent("You are Here!");
                    infoWindow.open(_mapName);
                    _mapName.setCenter(pos);
                    _mapName.setZoom(16); // Zoom level 0-to-24
                },
                () => {
                    handleLocationError(true, infoWindow, _mapName.getCenter());
                }
            );
        } else {
            // Browser doesn't support Geolocation
            handleLocationError(false, infoWindow, _mapName.getCenter());
        }
  
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
        browserHasGeolocation
            ? "Error: The Geolocation service failed."
            : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(_mapName);
}
