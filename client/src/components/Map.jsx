import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import locationData from "../data/map.json";

// Set a fixed position for the map's center
const position = [52.5314560163944, 13.403370226299785];

const Map = () => {
  return (
    <>
      <div className="flex justify-center p-4">
        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={false}
          className="w-full md:w-3/4 lg:w-1/2 h-96 rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          {locationData.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}>
              <Popup>
                <div className="bg-white p-2 rounded shadow">
                  {location.name}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
};

export default Map;
