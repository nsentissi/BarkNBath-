import React from 'react';
import GoogleMapReact from 'google-map-react';
import mapGeoJson from '../data/map.json'




const GoogleMap = () => {
  const defaultProps = {
    center: {
      lat: 52.5200,
      lng: 13.4050,
    },
    zoom: 12,
  };

  const handleApiLoaded = ({ map, maps }) => {
    
    map.data.addGeoJson(mapGeoJson);
    
    
    map.data.setStyle({
      fillColor: 'green',
      strokeWeight: 2,
    });
  };

  return (
    <div style={{ height: '500px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleApiLoaded}
      >

      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;