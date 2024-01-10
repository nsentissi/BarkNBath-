import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import locationData from "../data/map.json";

const position = [52.5314560163944, 13.403370226299785];

const Map = () => {
  return (
    <>
    <div className="bg-[url('../../src/assets/map-background.png')] bg-cover bg-center h-auto md:h-100 bg-no-repeat">
      <div className=" w-3/4 mx-auto flex flex-col md:flex-row justify-end px-16 py-14 gap-4  h-auto md:h-100 w-full ">
        <div className=" md:w-2/4 lg:w-2/5 px-4 py-10 md:p-12 bg-success h-1/4 lg rounded-lg">
          <h4 className="text-base md:text-lg lg:text-xl w-full md:w-2/4 lg:w-3/4 p-4 md:p-20">
            Explore our locations
          </h4>
        </div>
        <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={false}
          className="w-full md:w-2/4 lg:w-3/5 h-96 rounded-lg shadow-lg flex-col"
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
      </div>
    </>
  );
};

export default Map;
