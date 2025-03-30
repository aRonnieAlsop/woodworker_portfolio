import React, { useEffect, useRef } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  maxWidth: "600px",
  height: "450px",
  margin: "0 auto",
};

const mapCenter = {
  lat: 38.4331,     // general Sonoma County center
  lng: -122.7163,
};

const markerPosition = {
  lat: 38.44047,     // Santa Rosa Courthouse Square
  lng: -122.71443,
};

const GoogleMapComponent = () => {
  const mapRef = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['marker'],
  });

  useEffect(() => {
    if (
      isLoaded &&
      mapRef.current &&
      window.google?.maps?.marker?.AdvancedMarkerElement
    ) {
      const { AdvancedMarkerElement } = window.google.maps.marker;

      const markerEl = document.createElement("div");
      markerEl.style.backgroundImage = "url('/assets/chsl_mllt_vect.png')";
      markerEl.style.backgroundSize = "contain";
      markerEl.style.backgroundRepeat = "no-repeat";
      markerEl.style.width = "50px";
      markerEl.style.height = "50px";

      new AdvancedMarkerElement({
        map: mapRef.current,
        position: markerPosition,
        content: markerEl,
      });
    }
  }, [isLoaded]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter}
      zoom={9}
      onLoad={(map) => (mapRef.current = map)}
    />
  );
};

export default GoogleMapComponent;
