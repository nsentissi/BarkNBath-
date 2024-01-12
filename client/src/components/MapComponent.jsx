import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import mapboxgl from "mapbox-gl";
import van from "../assets/van-2.png"
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken = import.meta.env.VITE_REACT_APP_MAPBOX_API_KEY;

const locations = [
  {
    type: "FeatureCollection",
    features: [
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.403370226299785, 52.5314560163944],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.408823890711005, 52.52987336402461],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.385356749740794, 52.52869589707072],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.363829497369807, 52.53065804266029],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.372577219882686, 52.519385771590066],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.350162877409247, 52.52248276698617],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.396711820142912, 52.52409286168654],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.336538644491128, 52.4898569126953],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.3291862462533, 52.48870846382022],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.376429820318066, 52.492823318140864],
        },
      },
      {
        type: "Feature",
        properties: {
          name: "Bark N Bath",
        },
        geometry: {
          type: "Point",
          coordinates: [13.404597521726174, 52.50423836137318],
        },
      },
    ],
  },
];

const MapComponent = () => {
  const [viewport, setViewport] = useState({
    latitude: 52.52,
    longitude: 13.4,
    zoom: 11,
    bearing: 0,
    pitch: 0,
  });

  return (
    <>
    <div className="map-container lg:w-2/3 md:1/3 h-96">
      <ReactMapGL
        {...viewport}
        
        width="100%"
        height="100%"
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxApiAccessToken={mapboxgl.accessToken}
      >
        {locations[0].features.map((feature, index) => (
          <Marker
            key={index}
            latitude={feature.geometry.coordinates[1]}
            longitude={feature.geometry.coordinates[0]}
          >
            <div className="rounded-lg"></div>
            <img src={van} className="rounded-full h-5 w-5"/>
          </Marker>
        ))}
      </ReactMapGL>
    </div>
    </>
  );
};

export default MapComponent;