

var line = [];
var lines = [];


const MapCoordinateList = [];

//var randomColor;
//randomColor = "";
//randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();

function DrawLine(map, x, y) {

    console.log("polyline.js drawline",x,y);
    var MapCoordinateCreate = { lat: x, lng: y };

    MapCoordinateList.push({ lat: x, lng: y } );

   // document.getElementById("text").innerHTML += "{px:" + posX + ", py:" + posY + "}," + "\n";



    line = new google.maps.Polyline({
            // eger veriler teker teker verilecek ise bu yontem kullanılabilir
            //path: [
            //    new google.maps.LatLng(locX[locX.length - 1], locY[locY.length - 1]),
            //    new google.maps.LatLng(locX[locX.length - 2], locY[locY.length - 2])
            //],
            path: MapCoordinateList,
            center: { lat: 41.112663, lng: 29.021330 },
            //strokeColor: randomColor,
            strokeOpacity: 1.0,
            strokeWeight: 3,
            //geodesic: true, //oval tarzı çizim
            map: map
        });


    lines.push(line);

    line.setMap(map);

    

    if (MapCoordinateList.length <= 1) {
        AddMarker(map, { lat: x, lng: y }, "", "Start");
    }

    document.getElementById("CreateLog").innerHTML += "Lat: " + x + "\n" + "Lng: " + y + "\n" + "\n";
}




//function DrawRoute() {


//    let i = 0;
//    let myTimer = setInterval(function () {
//        DrawLine(map, koordinatlar[i].px, koordinatlar[i].py);
//        i++;
//        if (i == koordinatlar.length) {
//            clearInterval(myTimer);
//        }
//    }, 100);

//}










function Undo() {

    document.getElementById("CreateLog").innerHTML = " ";

    const i = lines.length;

    lines[i - 1].setMap(null);

    lines.pop();
    MapCoordinateList.pop();

    if (MapCoordinateList.length == 0) {
        DeleteMarkers();
    }
    console.log(lines );
}


function Log() {
    //const path = line.getPath();
    //console.log("path:", path);

    //console.log(randomColor);
    //console.log(MapCoordinateList.length);
    //console.log(lines[1].getPath());

    console.log(MapCoordinateList);
}

// diziler 2 boyutlu olacak.
// MapCoordinateList[konumIndexi][MapCoordinateList]

function Save() {
    // veri tabanına kaydetme yapılacak

    var RouteName = document.getElementById("RouteName").value; // bu veri textbox içerisinden gelecek

    if (RouteName == "") {
        alert("Please Enter a Route Name");
    }
    else {

        try {
            console.log(MapCoordinateList);

            console.log(RouteName);

            $.ajax({
                type: "POST",
                url: "/Map/MapCoordinateCreate",
                content: "application/json; charset=utf-8",
                data: { MapCoordinateList: MapCoordinateList, RouteName: RouteName },
                success: function (data) {
                    alert("Success");
                    console.log("kayit sonucu", data);
                },
                error: function () { }
            });

        }
        catch (err) {
            console.log(err);
        }




        console.log(MapCoordinateList);

        AddMarker(map, MapCoordinateList[MapCoordinateList.length - 1], "", "Stop");
        while (MapCoordinateList.length) {
            lines.pop();
            MapCoordinateList.pop();
        }
    }
    


}