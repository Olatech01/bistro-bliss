"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapComponent() {
    return (
        <MapContainer
            center={[40.7128, -74.006]}
            zoom={12}
            scrollWheelZoom={false}
            className="w-full h-full my-20"
        >
            <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[40.7128, -74.006]}>
                <Popup>Our Restaurant</Popup>
            </Marker>
        </MapContainer>
    );
}