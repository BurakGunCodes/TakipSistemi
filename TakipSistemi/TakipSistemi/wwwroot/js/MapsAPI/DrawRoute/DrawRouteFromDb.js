var line = [];
var lines = [];



var randomColor;
randomColor = "";
randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();


function DrawRoute(CoordinateList) {

    console.log("fonksiyona gelen", CoordinateList);
    var list = [];
    list = CoordinateList;
    line = new google.maps.Polyline({
        path: list,
        strokeColor: randomColor,
        strokeOpacity: 1.0,
        strokeWeight: 3,
        //geodesic: true, //oval tarzı çizim
        map: map
    });

}

