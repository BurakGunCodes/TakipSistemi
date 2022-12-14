
let markers = [];

function AddMarker(Map, Coordinates, Icon, Title) {
    const marker = new google.maps.Marker({
        position: Coordinates,
        map: Map,
        title: Title,
        icon: SelectIcon(Icon),
    });

    markers.push(marker); 
    return marker;
}

// Sets the map on all markers in the array.
function setMapOnAll(Map) {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(Map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function HideMarkers() {
    setMapOnAll(null);
}

// Shows any markers currently in the array.
function ShowMarkers(Map) {
    setMapOnAll(Map);
}

// Deletes all markers in the array by removing references to them.
function DeleteMarkers() {
    HideMarkers();
    markers = [];
}

function SelectIcon(input) {
    const baseURL = "http://maps.google.com/mapfiles/kml/shapes/";
    var image;
    switch (input) {
        case "car":
            image = baseURL + "cabs.png";
            break;

        case "bus":
            image = baseURL + "bus.png";
            break;

        case "cycling":
            image = baseURL + "cycling.png";
            break;

        case "motorcycling":
            image = baseURL + "motorcycling.png";
            break;

        case "wheel_chair_accessible":
            image = baseURL + "wheel_chair_accessible.png";
            break;

        case "woman":
            image = baseURL + "women.png";
            break;
        case "man":
            image = baseURL + "man.png";
            break;
        case "stop":
            image = "https://icons8.com/icon/15181/stop-sign";
            break;
            

    }

    return image;
}

function GetInfoWindow(map, marker) {
    marker.addListener("click", () => {
        infowindow.open({
            anchor: marker, map,
        });
    });
}

function changeMarkerPosition(marker, Lat, Lng) {
    var latlng = new google.maps.LatLng(Lat, Lng);
    marker.setPosition(latlng);
}