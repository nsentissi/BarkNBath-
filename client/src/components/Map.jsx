import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import locationData from "../data/map.json";
import mapBackground from "../assets/map-background.png";
import mapMarker from "../assets/pin.png";
import L from 'leaflet';

const position = [52.5314560163944, 13.403370226299785];

const customIcon = L.icon({
  iconUrl: mapMarker,
  iconSize: [40, 41], 
  iconAnchor: [12, 41],
  popupAnchor: [1, -34] 
});

const Map = () => {
  return (
    <>
      <div
        className="bg-cover bg-center h-auto md:h-full bg-no-repeat font-playful"
        style={{ backgroundImage: `url(${mapBackground})` }}
      >
        <div className="mx-auto px-4 py-14 gap-4 h-auto md:h-full max-w-7xl">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Text Container */}
            <div className="bg-success lg rounded-lg p-6 md:w-1/3 text-center">
              <h4 className="text-xl md:text-2xl lg:text-6xl font-bold mb-4 text-gray-800 ">
                Explore our locations
              </h4>
              <p className="text-base md:text-sm text-start font-semibold ">
                Discover our numerous locations across the city, each offering a
                unique and delightful experience for your pets. We are located
                in key areas for your convenience. 
              </p>
            </div>
            {/* Map Container */}
            <div className="flex-grow">
              <MapContainer
                center={position}
                zoom={12}
                scrollWheelZoom={false}
                className="w-full h-96 rounded-lg shadow-lg"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locationData.map((location, index) => (
                  <Marker
                    key={index}
                    position={[location.lat, location.lng]}
                    icon={customIcon}
                  >
                    <Popup>
                      <div className="bg-white p-2 rounded shadow">
                        {location.name}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Map;
