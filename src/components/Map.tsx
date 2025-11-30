"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// ícone SVG com fundo azul e stroke branco
const icon = L.divIcon({
  html: `
    <div
      style="
        width: 35px;
        height: 35px;
        background-color: #1e40af; /* azul tailwind: blue-800 */
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-8px);
        box-shadow: 0 4px 10px rgba(0,0,0,0.25);
      "
    >
      <svg xmlns="http://www.w3.org/2000/svg"
           width="22"
           height="22"
           fill="none"
           viewBox="0 0 24 24"
           stroke="white">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    </div>
  `,
  className: "custom-marker",
  iconSize: [45, 45],
  iconAnchor: [22, 42],
});

export default function Map() {
  const position: [number, number] = [-25.444007042910847, -49.28720412143999];

  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={false}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="© OpenStreetMap"
      />

      <Marker position={position} icon={icon}>
        <Popup>Câmara Municipal de Libertália</Popup>
      </Marker>
    </MapContainer>
  );
}
