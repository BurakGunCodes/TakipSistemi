

var line = [];
var lines = [];

const MapCoordinateList = [];

var randomColor;
randomColor = "";
randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();

function DrawLine(map, x, y) {

    console.log(x,y);
    var MapCoordinateCreate = { lat: x, lng: y };

    MapCoordinateList.push({ lat: x, lng: y } );

   // document.getElementById("text").innerHTML += "{px:" + posX + ", py:" + posY + "}," + "\n";



        line = new google.maps.Polyline({
            //path: [
            //    new google.maps.LatLng(locX[locX.length - 1], locY[locY.length - 1]),
            //    new google.maps.LatLng(locX[locX.length - 2], locY[locY.length - 2])
            //],
            path: MapCoordinateList,
            strokeColor: randomColor,
            strokeOpacity: 1.0,
            strokeWeight: 3,
            //geodesic: true, //oval tarzı çizim
            map: map
        });


    lines.push(line);

    line.setMap(map);


    if (MapCoordinateList.length <= 1) {
        AddMarker(map, { lat: x, lng: y }, "",  "Start");
    }

    console.log(randomColor);

    //document.getElementById("BtnUndo").disabled = false;
}




function DrawRoute() {


    let i = 0;
    let myTimer = setInterval(function () {
        DrawLine(map, koordinatlar[i].px, koordinatlar[i].py);
        i++;
        if (i == koordinatlar.length) {
            clearInterval(myTimer);
        }
    }, 100);

}









function GetRoute() {
     koordinatlar = [
        { px: -51.22657880566528, py: -68.48704617665337 },
        { px: -8.481739579906757, py: -78.33079617665337 },
        { px: 28.547257037225513, py: -111.72923367665337 },
        { px: 60.027198549194516, py: -156.37767117665337 },
        { px: 67.44602432646025, py: -157.43235867665337 },
        { px: 68.24145757883099, py: -130.36204617665337 },
        { px: 57.095307517363864, py: -68.13548367665337 },
        //{ px: 30.079912782077017, py: -85.01048367665337 },
        //{ px: 7.636278051789568, py: -64.61985867665337 },
        //{ px: -14.337435655746392, py: -35.79173367665337 },
        //{ px: -38.05554885581433, py: -52.66673367665337 },
        //{ px: -36.37584760333411, py: 24.677016323346628 },
        //{ px: 8.332582400154843, py: 52.09889132334663 },
        //{ px: 22.198980685530213, py: 98.85670382334662 },
        //{ px: 60.72231233527801, py: 167.41139132334663 },
        //{ px: 72.68948526789387, py: 109.40357882334662 },
        //{ px: 59.85109451446565, py: 31.708266323346628 },
        //{ px: 45.28368341309443, py: 1.8254538233466278 },
        //{ px: 15.550420536516734, py: -9.776108676653372 },
        //{ px: -22.98734295450757, py: 14.833266323346628 },
        //{ px: 23.81688735458246, py: 24.325453823346628 },
        //{ px: 21.728768612397168, py: 44.830640556136174 },
        //{ px: 29.33418818534367, py: 51.510328056136174 },
        //{ px: 31.456674792971576, py: 70.14314055613617 },
        //{ px: 41.59891865824353, py: 65.92439055613617 },
        //{ px: 47.835198688527434, py: 51.158765556136174 },
        //{ px: 31.756088924139284, py: 39.205640556136174 },
        //{ px: 18.926953025602543, py: 29.625562431136178 },
        //{ px: 14.38135400684807, py: 41.490796806136174 },
        //{ px: 19.75624543014266, py: 80.16267180613617 },
        //{ px: 42.252824349305016, py: 83.67829680613617 },
        //{ px: 51.4744618150061, py: 64.86970305613617 },
        //{ px: 30.24946819738017, py: 19.606031181136178 },
        //{ px: 18.843793736109188, py: 21.363843681136178 },
        //{ px: 2.1084114669273837, py: 35.358161773857574 },
        //{ px: 6.664123333909107, py: 102.50659927385757 },
        //{ px: 59.88869231668985, py: 124.30347427385757 },
        //{ px: 65.80257656749616, py: 82.81909927385757 },
        //{ px: 64.0142825891251, py: 6.881599273857573 },
        //{ px: 14.263910595386458, py: -8.235588226142427 },
        //{ px: -21.61703257098329, py: 70.51441177385757 },
        //{ px: -16.29951894291016, py: 137.31128677385757 },
        //{ px: 26.745175017279184, py: 146.10034927385757 },
        //{ px: 75.58481604215588, py: 110.24097427385757 },
        //{ px: 74.58997846257907, py: 36.061286773857574 },
        //{ px: 69.16238448701249, py: -11.751213226142427 },
        //{ px: 42.293203567526376, py: -20.540275726142426 },
        //{ px: -23.886283467223954, py: -32.844963226142426 },
        //{ px: -36.31551797841125, py: 47.31128677385757 },
        //{ px: -46.559195526916355, py: 126.41284927385757 },
        //{ px: 58.263030606606364, py: 164.03003677385757 },
        //{ px: 76.01597585424594, py: 149.96753677385757 },
        //{ px: 81.92311782854749, py: 98.28784927385757 },
        //{ px: 80.98361190554364, py: 20.59253677385757 },
        //{ px: 76.01597585424594, py: -24.759025726142426 },
        //{ px: 64.62366826928665, py: -31.790275726142426 },
        { px: 30.448253393339936, py: -41.985588226142426 }
    ]

    return koordinatlar;

}







function Undo() {

    //locX.pop();
    //locY.pop();


    //HideMarkers();
    //markers.pop();
    //ShowMarkers();

    //line.setMap(null);
    //MapCoordinateList.pop();

    //(line.setMap(null);


    const i = lines.length;

    lines[i - 1].setMap(null);

    lines.pop();
    MapCoordinateList.pop();

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


    
    try
    {
        console.log(MapCoordinateList);
        var _RouteName = document.getElementById("RouteName").value; // bu veri textbox içerisinden gelecek
        console.log(_RouteName);

            $.ajax({
                type: "POST",
                url: "/Map/MapCoordinateCreate",
                content: "application/json; charset=utf-8",
                data: { MapCoordinateList: MapCoordinateList, RouteName: _RouteName },
            success: function (data) {},
            error: function () {}
            });

    } 
    catch (err) {
        console.log(err);
    }




    console.log(MapCoordinateList);

    AddMarker(map, MapCoordinateList[MapCoordinateList.length - 1], "stop", "Stop");
    while (MapCoordinateList.length) {
        lines.pop();
        MapCoordinateList.pop();
    }
   
    
    //console.log(MapCoordinateList);


    randomColor = "";
    randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();




}