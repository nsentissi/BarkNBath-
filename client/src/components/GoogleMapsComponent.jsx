import React, { useState, useCallback, useRef } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
  DirectionsService,
  DirectionsRenderer,
} from "@react-google-maps/api";
import map from "../data/map.json";

const mapContainerStyle = {
  height: "400px",
  width: "100%",
};

const center = { lat: 52.52, lng: 13.405 };

const GoogleMapsComponent = () => {
  console.log("GeoJSON Data:", map);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [requestDirections, setRequestDirections] = useState(false);
  const mapRef = useRef();

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const handleMarkerClick = (marker) => {
    setSelectedMarker(marker);
    if (mapRef.current) {
      mapRef.current.panTo({ lat: marker.lat, lng: marker.lng });
    }
  };

  const calculateRoute = () => {
    if (selectedMarker) {
      setRequestDirections(true);
    }
  };

  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={12}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {map.features.map((feature, index) => (
          <Marker
            key={index}
            position={{
              lat: feature.geometry.coordinates[1],
              lng: feature.geometry.coordinates[0],
            }}
            onClick={() =>
              handleMarkerClick({
                lat: feature.geometry.coordinates[1],
                lng: feature.geometry.coordinates[0],
              })
            }
          />
        ))}

        {selectedMarker && (
          <InfoWindow
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            onCloseClick={() => setSelectedMarker(null)}
          >
            <div>
              <h4>Marker Details</h4>
              <p>Additional info here...</p>
              <button onClick={calculateRoute}>Get Directions</button>
            </div>
          </InfoWindow>
        )}

        {requestDirections && selectedMarker && (
          <DirectionsService
            options={{
              destination: { lat: selectedMarker.lat, lng: selectedMarker.lng },
              origin: center,
              travelMode: "DRIVING",
            }}
            callback={(res) => {
              if (res !== null) {
                setDirectionsResponse(res);
                setRequestDirections(false);
              }
            }}
          />
        )}

        {directionsResponse && (
          <DirectionsRenderer options={{ directions: directionsResponse }} />
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapsComponent;
