import React, { useLayoutEffect, useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import 'leaflet/dist/leaflet.css';

const Map = () => {
  const [renderMap, setRenderMap] = useState(false);
  const [markers, setMarkers] = useState([]);
  const [newMarkerLocation, setNewMarkerLocation] = useState(null); // Store the location of the new marker

  const mapContainerRef = useRef(null);
  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });

  // Example data for gorilla species
  const gorillaSpecies = [
    { name: 'Mountain Gorilla', lat: -1.9441, lng: 29.8739 },
    { name: 'Western Gorilla', lat: 3.0472, lng: 13.1677 },
    { name: 'Eastern Gorilla', lat: -0.4893, lng: 29.3922 },
    { name: 'Gorilla in Malaysia', lat: 4.2105, lng: 101.9758 },
    { name: 'Gorilla in Vietnam', lat: 14.0583, lng: 108.2772 },
    { name: 'Gorilla in China', lat: 35.8617, lng: 104.1954 },
  ];

  useLayoutEffect(() => {
    setMarkers(gorillaSpecies);
    setRenderMap(true);
  }, []);

  const AddMarkerToMap = () => {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;
        const newMarker = { name: 'New Marker', lat, lng };
        setMarkers((prevMarkers) => [...prevMarkers, newMarker]);

        // Log the location of the new marker
        console.log({ lat, lng });

        // If you want to change the map center to the new marker location, you can do it here
        // map.flyTo([lat, lng], 13); // For example, this sets the zoom level to 13
      },
    });

    return null;
  };

  return (
    renderMap && (
        <>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Map Page</IonTitle>
          </IonToolbar>
        </IonHeader>
     
          <div style={{ height: '100vh', width: '100%' }}>
            <MapContainer center={[1.634541720929286, 110.04822147737534]} zoom={3} style={{ height: '100%', width: '100%' }} ref={mapContainerRef}>
              <TileLayer
                attribution='&copy; <a href="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <AddMarkerToMap />

              {markers.map((marker, index) => (
                <Marker key={index} position={[marker.lat, marker.lng]}>
                  <Popup>{marker.name}</Popup>
                </Marker>
              ))}

              {/* Display a new marker at the location of the last added marker */}
              {newMarkerLocation && (
                <Marker position={[newMarkerLocation.lat, newMarkerLocation.lng]}>
                  <Popup>{newMarkerLocation.lat}, {newMarkerLocation.lng}</Popup>
                </Marker>
              )}
            </MapContainer>
          </div>
       
   </>
    )
  );
};

export default Map;
