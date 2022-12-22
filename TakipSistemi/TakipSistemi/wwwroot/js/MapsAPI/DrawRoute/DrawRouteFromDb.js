
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


    const marker = new google.maps.Marker({
        position: { lat:CoordinateList[0].lat, lng:CoordinateList[0].lng },
        map: RouteMap,
        title: "29D",
        icon: SelectIcon("bus"),
    });


    var i = 0;
    //AddMarker(RouteMap, { lat: CoordinateList[i].lat, lng: CoordinateList[i].lng }, "bus", "BUS");
    let myTimer = setInterval(function () {
        //HideMarkers(RouteMap);
        //DeleteMarkers();
        var new_marker_position = new google.maps.LatLng(CoordinateList[i].lat, CoordinateList[i].lng);

        marker.setPosition(new_marker_position);

       
        
        //DeleteMarkers();
        
        RouteMap.setCenter({ lat: CoordinateList[i].lat, lng: CoordinateList[i].lng });
        RouteMap.setZoom(16);
        setMapOnAll(Map);
        //ShowMarkers(RouteMap);
        i++;
        console.log("i:", i);
        console.log("length:", CoordinateList.length );
        if (i >= CoordinateList.length) {
            clearInterval(myTimer);
        }
    }, 100);

}
