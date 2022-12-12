




function initMap() {


    var options = {
        zoom: 4,
        center: { lat: 41.112663, lng: 29.021330 },
    }

     map = new google.maps.Map(document.getElementById('map'), options);

    // Add Market Function
    function AddMarker(Coordinates, Icon, Title) {
        var marker = new google.maps.Marker({
            position: Coordinates,
            map: map,
            title: Title,
            icon: SelectIcon(Icon),
        });
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


        }

        return image;
    }

    const coordinate_1 = { lat: 41.112663, lng: 29.021330 };
    const coordinate_2 = { lat: 40.783333, lng: 30.400000 };
    const coordinate_3 = { lat: 40.802516, lng: 29.439794 }; // gebze

    AddMarker(coordinate_1, "car", "adammm");
    AddMarker(coordinate_2, "bus", "burakkk");
    AddMarker(coordinate_3, "man", "kardesss");


    // Add marker where you clicked
    google.maps.event.addListener(map, 'click',
        function (event) {
            AddMarker(event.latLng, "mesajABC");
            //document.getElementById("text").innerHTML += "posX:" + event.latLng.lat()  + "posY: " + event.latLng.lng() + "\n";
            DrawLine(map, event.latLng.lat(), event.latLng.lng());

        });

    const contentString = "<h6>Vehicle ID: 01 <br/> Vehicle State: XY <br/> Vehicle Speed: 100km/h </h6>";
    const contentString2 = "<h6>burakgun</h6>";

    const infoWindow = new google.maps.InfoWindow({
        content: contentString,
    });


    marker.addListener("click", () => {

        infoWindow.open({ anchor: marker, map });
    });

   
}



function DrawRouteFromDB() {

    

    var koordinatlar = myFunc();

    let i = 0;
    let myTimer = setInterval(function () {
        DrawLine(map, koordinatlar[i].px, koordinatlar[i].py);
        i++;
        if (i == koordinatlar.length) {
            clearInterval(myTimer);
        }
    }, 100);

   

    //for (let i = 0; i < koordinatlar.length; i++) {

    //    DrawLine(map, koordinatlar[i].px, koordinatlar[i].py);
    //    document.getElementById("text").innerHTML += i + ":" + koordinatlar[i].px + " , " + koordinatlar[i].py + "\n";
    //}



}



function myFunc() {
    const koordinatlar = [
        { px: -31.727947896597026, py: 23.5281659375 },
        { px: 24.28726182395493, py: 20.0125409375 },
        { px: 30.675937106020623, py: 86.10629093749999 },
        { px: 49.09562095194814, py: 113.52816593749999 },
        { px: 69.59584988486232, py: 122.84457218749999 },
        { px: 66.30215915922643, py: 68.52816593749999 },
        { px: 48.69088431807663, py: 15.7937909375 }

    ]
/*    for (i = 0; i < koordinatlar.length; i++) {
        return koordinatlar[i];
    }*/
    return koordinatlar;
   /* console.log(koordinatlar);*/
}

var locX = new Array();
var locY = new Array();

function DrawLine(map,posX,posY) {

    locX.push(posX);
    locY.push(posY);

    //document.getElementById("text").innerHTML += posX + " " + posY + "\n";

    document.getElementById("text").innerHTML += "x:" + locX[locX.length - 1] + ", y:" + locY[locY.length - 1] + "\n";
    //document.getElementById("text").innerHTML += "length:" + locY.length +  "\n";
    //document.getElementById("text").innerHTML += "newpos:" + newPos;



    if (locX.length >= 2) {

        var line = new google.maps.Polyline({
            path: [
                new google.maps.LatLng(locX[locX.length - 1], locY[locY.length - 1] ),
                new google.maps.LatLng(locX[locX.length - 2], locY[locY.length - 2])
            ],
            strokeColor: "#FF0000",
            strokeOpacity: 1.0,
            strokeWeight: 5,
            geodesic: true,
            map: map
        });


    }



}