import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "600px",
  height: "450px",
};

const center = {
    lat: 40.075004522863765, 
    lng: -120.8412190836375,
  };

  const mapOptions = {
    styles: [
      {
        featureType: "all",
        elementType: "geometry",
        stylers: [
          { hue: "#b5a397" }, 
          { saturation: 50 },
          { lightness: 30 }
        ]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [
          { color: "#30231d" },
          { saturation: 30 },
          { lightness: 20 }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          { color: "#E1AD01" } 
        ]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          { color: "#b5a397" } 
        ]
      }
    ]
  };
  

const GoogleMapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY, // Ensure .env file is set up correctly
  });

  if (!isLoaded) {
    return <div>Loading Map...</div>;
  }

  return (
    <GoogleMap 
    mapContainerStyle={containerStyle} 
    center={center} 
    zoom={12}
    options={mapOptions}
    >
      {/* Custom marker */}
      <Marker 
        position={center} 
        icon={{
          url: "/assets/chsl_mllt_vect.png", // Ensure this image exists in `public/assets/`
          scaledSize: new window.google.maps.Size(50, 50), 
        }} 
      />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
