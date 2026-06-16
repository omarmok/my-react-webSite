
window.mapConfig = function (divId) {
  

    // mapboxgl.accessToken = 'pk.your-own-code-here-for-online-maps';
    mapboxgl.accessToken = 'NOT-REQUIRED-WITH-YOUR-VECTOR-TILES-DATA';
    //var pathstr=location.pathname.split( '/' )[0]+'/'+location.pathname.split( '/' )[1]+'/'+location.pathname.split( '/' )[2]+'/'+location.pathname.split( '/' )[3]+'/';



    var map = new mapboxgl.Map({
        container: divId, // container ID
        style: {
            'version': 8,
            'sources': {
                'raster-tiles': {
                    'type': 'raster',
                    'tiles': ['http://172.16.27.245/MapTiles/gm/{z}/{x}/{y}.png'],
                    'tileSize': 256
                }
            },
            'layers': [
                {
                    'id': 'simple-tiles',
                    'type': 'raster',
                    'source': 'raster-tiles',
                    'minzoom': 0,
                    'maxzoom': 18
                }
            ]
        },
        center: [46.699064090261516, 24.64864222618283],
        zoom: 15 // starting zoom
    });


    //map.addControl(new mapboxgl.Navigation());
    map.addControl(new mapboxgl.NavigationControl());





    const layerList = document.getElementById('menumap');
    const inputs = layerList.getElementsByTagName('input');

    for (const input of inputs) {
        input.onclick = (layer) => {
            const layerId = layer.target.id;
            map.setStyle(getstyle(layerId));
        };
    }


    function getstyle(s) {
        var sstyle = {
            'version': 8,
            'sources': {
                'raster-tiles': {
                    'type': 'raster',
                    'tiles': ['http://172.16.27.245/MapTiles/' + s + '/{z}/{x}/{y}.png'],
                    'tileSize': 256
                }
            },
            'layers': [
                {
                    'id': 'simple-tiles',
                    'type': 'raster',
                    'source': 'raster-tiles',
                    'minzoom': 0,
                    'maxzoom': 18
                }
            ]
        };
        return sstyle

    }


    var marker = new mapboxgl.Marker();

    function add_marker(event) {
        var coordinates = event.lngLat;
        console.log('Lng:', coordinates.lng, 'Lat:', coordinates.lat);
        // alert('Lng:'+ coordinates.lng+ '	Lat:'+ coordinates.lat);
        marker.setLngLat(coordinates).addTo(map);
    }

    map.on('click', add_marker);


}
