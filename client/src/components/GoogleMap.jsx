import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );

const GoogleMap = () => {
 
  
    const defaultProps = {
    center: {
      lat: 52.5200,
      lng: 13.4050,
    },
    zoom: 12,
  };

  const locations = [
    { lat: 52.32, lng: 13.23, text: "Location 1" },
    { lat: -34.4, lng: 150.65, text: "Location 2" },
  ];

  return (
    <div className="w-full h-96">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyDSSyR_KZ6-aQSbVJuZAnEU4Prs8atayTk" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {locations.map((location, index) => (
          <AnyReactComponent
            key={index}
            lat={location.lat}
            lng={location.lng}
            text={location.text}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
