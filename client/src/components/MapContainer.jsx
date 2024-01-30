import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import locationData from "../data/map.json";

const position = [52.5314560163944, 13.403370226299785];

const NewMap = ({onMarkerClick}) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <MapContainer
          center={position}
          zoom={12}
          scrollWheelZoom={false}
          className="w-full sm:w-3/4 md:w-2/3 lg:w-full xl:w-2/5 h-96 rounded-lg shadow-lg"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
      
          {locationData.map((location, index) => (
            <Marker key={index} position={[location.lat, location.lng]}  eventHandlers={{
                click: () => {
                  onMarkerClick(location.name); 
                },
              }}>
              <Popup>
                <div className="bg-white p-2 rounded shadow">
                  {location.name}
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
    </div>
  )
}

export default NewMap
