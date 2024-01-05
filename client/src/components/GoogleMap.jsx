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
    <section className="flex flex-col md:flex-row items-center justify-center space-y-10 md:space-y-0 md:space-x-10 mt-10 w-full gap-20" style={{ backgroundImage: 'url("./src/assets/testimonials-background.webp")', height: '500px' }}>
      <div className="w-full md:w-4/12 px-6 bg-info text-white p-8 rounded-lg" >
          <h1 className="text-4xl md:text-7xl text-center md:text-left font-bold">
          Explore our Locations
          </h1>
          <p className="mt-4 text-sm md:text-lg text-center md:text-left">
          Easily find us at various locations to pamper your furry friends with stress-free grooming experiences. We look forward to welcoming you!
          </p>
          
        </div>

   


      <div   style={{ height: '400px', width: '45%',boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.3)' }}>
      <GoogleMapReact 
      

        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleApiLoaded}
      >

      </GoogleMapReact>
    </div>
    </section>
  );
};

export default GoogleMap;