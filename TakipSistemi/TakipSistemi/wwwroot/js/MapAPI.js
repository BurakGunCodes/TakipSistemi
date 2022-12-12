




function initMap() {


    var options = {
        zoom: 18,
        center: { lat: 41.112663, lng: 29.021330 },
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

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
            DrawLine(map, event.latLng.lat(), event.latLng.lng() );
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



function MyLogScript() {


    var koordinatlar = myFunc();


    for ( let i = 0; i < 5; i++) {
        //console.log(koordinatlar[i]);

        setTimeout(function () {

            //console.log(koordinatlar[i].px);
            //console.log( [{ "x" : koordinatlar[i].x }, { "y" : koordinatlar[i].y }] );

            //DrawLine(map, koordinatlar[i].px, koordinatlar[i].py);
            console.log("burak gun");

        }, 1000);
    }



    //document.getElementById("text").innerHTML += "X:" + x + " " + "Y:" + y + "\n";
   // var x = SelectIcon("bus");
    document.getElementById("text").innerHTML += " Test ";

    console.log();
}

function myFunc() {
    const koordinatlar = [
        { px: 41.11299037279877, py: 41.11299037279877 },
        { px: 41.11298228953945, py: 41.11298228953945 },
        { px: 41.112739791296875, py: 41.112739791296875 }
    ]
/*    for (i = 0; i < koordinatlar.length; i++) {
        return koordinatlar[i];
    }*/
    return koordinatlar;
   /* console.log(koordinatlar);*/
}

let locX = new Array();
let locY = new Array();

function DrawLine(map,posX,posY) {

    locX.push(posX);
    locY.push(posY);

    document.getElementById("text").innerHTML += posX + " " + posX + "\n";
    //document.getElementById("text").innerHTML += locX[locX.length - 1] + " " + locY[locY.length - 1] + "\n";
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