
var line = [];
var lines = [];
var ActiveTrackingState = 1;


//var randomColor;
//randomColor = "";
//randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).toUpperCase();


function initMap() {

    const MapOptions = {
        zoom: 6,
        center: { lat: 38.734802, lng: 35.467987 }, // orta nokta olsun diye Konya lokasyonu
        disableDefaultUI: true,
        scaleControl: true,
        //draggableCursor: 'default',
    }

    RouteMap = new google.maps.Map(document.getElementById('DetailMap'), MapOptions);

    RouteMap.addListener('drag', function (event) {
        ActiveTrackingState = 0;
    });

    //google.maps.event.addListener(RouteMap, 'drag' , function (event) {
    //    ActiveTrackingState = 0;
    //});

}

// baslangıc ver bitis noktalarına icon koyulacak
// icona tıkladındıgı zaman bilgi ekranı acılacak
// konum vs bilgiler olacak


function DrawRoute(CoordinateList) {

    initMap();

    var line = new google.maps.Polyline({
        path: CoordinateList,
        center: { lat: CoordinateList[0].lat, lng: CoordinateList[0].lng }, 
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 5,

        //geodesic: true, //oval tarzı çizim
        map: RouteMap
    });

    // Aracın ilk gelen konum degerine göre zoom yap.
    // Track butonu olsun, buna bastıgı zaman araca zoom yapsın.
    // araç tercihi olsun. seçilen araca göre o arabanın bulundugu yeri göstersin
    // hatta, eraç seçildikten sonra asagidaki gibi aracı merkeze alarak takip etsin. Ne zaman kullanıcı ekranda zoom yapsın, o zaman takip etme devre dışı kalsın
    const marker = AddMarker(RouteMap, { lat: CoordinateList[0].lat, lng: CoordinateList[0].lng }, "bus", "29D");
    RouteMap.setCenter({ lat: CoordinateList[0].lat, lng: CoordinateList[0].lng });
    RouteMap.setZoom(16);
    var i = 0;
   
    let myTimer = setInterval(function () {
        
        var new_marker_position = new google.maps.LatLng(CoordinateList[i].lat, CoordinateList[i].lng);

        marker.setPosition(new_marker_position);
        
        //RouteMap.setCenter({ lat: CoordinateList[i].lat, lng: CoordinateList[i].lng });
        //RouteMap.setZoom(16); // SetZoom ayarlandıgında aracı takip ederken başka alana yakınlaştırma yapılamıyor
        //setMapOnAll(Map);
        //ShowMarkers(RouteMap);
        if (ActiveTrackingState) {
            ActiveTracking(RouteMap, { lat: CoordinateList[i].lat, lng: CoordinateList[i].lng }, 16);
        }
        i++;
        console.log("i:", i);
        console.log("length:", CoordinateList.length );
        if (i >= CoordinateList.length) {
            i = 0; //--> döngü olarak devam etmesi için
            //clearInterval(myTimer);
        }
    }, 1000);

}

function EnableActiveTracking() {
    ActiveTrackingState = 1;
}

function DisableActiveTracking() {
    ActiveTrackingState = 0;
}

function ActiveTracking(map, coordinate, zoom) {

    map.setCenter(coordinate);
    map.setZoom(zoom); // SetZoom ayarlandıgında aracı takip ederken başka alana yakınlaştırma yapılamıyor
}
