var line = [];
var lines = [];



var randomColor;
randomColor = "";
randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();




function DrawRoute(CoordinateList) {



    var MapOptions = {
        zoom: 12,
        center: { lat: CoordinateList[0].lat, lng: CoordinateList[0].lng },
        disableDefaultUI: true,
        scaleControl: true,
    }

    RouteMap = new google.maps.Map(document.getElementById('DetailMap'), MapOptions);
 
    list = CoordinateList;
    var line = new google.maps.Polyline({
        path: CoordinateList,

        //strokeColor: randomColor,
        strokeOpacity: 1.0,
        strokeWeight: 3,
        //geodesic: true, //oval tarzı çizim
        map: RouteMap
    });


}

