import "../styles/Map.css";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { Icon } from "leaflet";
import L from 'leaflet'
import "leaflet/dist/leaflet.css";
import googleMarker from "../icons/googleMarker.webp";
// --- ---------------------------------- ---

function Map() {
  // Berlin coordinates
  const [position, setPosition] = useState([52.51, 13.38]);
  const [city, setCity] = useState("Berlin");

  const customIcon = new Icon({
    iconUrl: googleMarker,
    iconSize: [20, 35],
    iconAnchor: [10, 35],
    popupAnchor: [0, -40],
  });


  const mapClick = (event) => {
    const latlng = event.latlng;
    setPosition([latlng.lat, latlng.lng]);
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latlng.lat}&lon=${latlng.lng}&zoom=18&addressdetails=1`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setCity(data.address.city || data.address.town || data.address.village);
      });
  };

  function MyComponent() {
    const map = useMap();
    map.on("click", mapClick);
    return null;
  }

 return (
    <div className="map" style={{ zIndex: 0 }}>
      <MapContainer
        center={position}
        zoom={6}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%", zIndex: 2 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/"  target="_blank">OpenStreetMap</a> contributors'
        />

        <Marker position={position} icon={customIcon}>
          <Popup>{city}</Popup>
        </Marker>

        <MyComponent />
      </MapContainer>
    </div>
  );
}
export default Map;