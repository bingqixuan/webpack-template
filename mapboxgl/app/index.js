/**
 * Created by bingqixuan on 2016/6/16 0016.
 */
import mapboxgl from 'mapbox-gl';
import '../node_modules/mapbox-gl/dist/mapbox-gl.css'


mapboxgl.accessToken = 'pk.eyJ1IjoiZmFuZ2xhbmsiLCJhIjoiY2lpcjc1YzQxMDA5NHZra3NpaDAyODB4eSJ9.z6uZHccXvtyVqA5zmalfGg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});




