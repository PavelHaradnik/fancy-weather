window.addEventListener('load', ()=> {
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
          long = position.coords.longitude.toFixed(2);
          lat = position.coords.latitude.toFixed(2);
            mapboxgl.accessToken = 'pk.eyJ1Ijoia2lzYW9seWEiLCJhIjoiY2sza2R5em04MGk5aTNtbnQyZWR5Y3FuOSJ9.pmEwBnlQ9vKOOvf4mx5unA';
            var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [long, lat], // starting position
            zoom: 10 // starting zoom
        });    
    });
}
});

