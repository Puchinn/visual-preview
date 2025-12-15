"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

export default function ContactMap() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const defaultIcon = L.icon({
    iconUrl: "/leaflet/marker-icon.png",
    iconRetinaUrl: "/leaflet/marker-icon-2x.png",
    shadowUrl: "/leaflet/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <div style={{ height: "370px", width: "100%" }}>
      <MapContainer
        center={[-34.61254043089886, -58.38467460011562]}
        zoom={24}
        style={{ height: "100%", width: "100%" }}
        className="z-0"
        scrollWheelZoom={false}
        dragging={!isMobile}
        touchZoom={isMobile}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          icon={defaultIcon}
          position={[-34.61254043089886, -58.38467460011562]}
        >
          <Popup>Santiago del Estero 330, CABA</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
