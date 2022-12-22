
var line = [];
var lines = [];



//var randomColor;
//randomColor = "";
//randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();


function initMap() {

    const MapOptions = {
        zoom: 6,
        center: { lat: 38.734802, lng: 35.467987 }, // orta nokta olsun diye Konya lokasyonu
        disableDefaultUI: true,
        scaleControl: true,
        draggableCursor: 'default',
    }

    RouteMap = new google.maps.Map(document.getElementById('DetailMap'), MapOptions);
}

// baslangıc ver bitis noktalarına icon koyulacak
// icona tıkladındıgı zaman bilgi ekranı acılacak
// konum vs bilgiler olacak


function DrawRoute(CoordinateList) {

    initMap();

    var line = new google.maps.Polyline({
        path: CoordinateList,
        center: { lat: CoordinateList[0].lat, lng: CoordinateList[0].lng }, // orta nokta olsun diye Konya lokasyonu
        //strokeColor: randomColor,
        strokeOpacity: 1.0,
        strokeWeight: 5,
        //geodesic: true, //oval tarzı çizim
        map: RouteMap
    });

    var i = 0;
    let myTimer = setInterval(function () {
        HideMarkers(RouteMap);
        DeleteMarkers();
        AddMarker(RouteMap, { lat: CoordinateList[i].lat, lng: CoordinateList[i].lng }, "bus", "BUS");
        RouteMap.setCenter({ lat: CoordinateList[i].lat, lng: CoordinateList[i].lng });
        RouteMap.setZoom(20);
        ShowMarkers(RouteMap);
        i++;
        console.log("i:", i);
        console.log("length:", CoordinateList.length );
        if (i >= CoordinateList.length) {
            clearInterval(myTimer);
        }
    }, 1000);

}

