import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { LocationMarkerIcon } from "@heroicons/react/outline";

function MapBox() {
  const [viewport, setViewport] = useState({
    latitude: 35.6828378,
    longitude: 139.7594549,
    width: "100%",
    height: "500px",
    zoom: 10,
  });

  return (
    <div className="hidden md:block md:w-1/2 border border-gray-400">
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/osamu1908/ckq92ckds0ix917p7zqa2abdw"
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        // onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker latitude={35.6937632} longitude={139.7036319}>
          <div className="flex">
            <LocationMarkerIcon className="h-6 text-red-500 animate-bounce" />
            <span className="text-red-500 text-sm">私はここにいます</span>
          </div>
        </Marker>
      </ReactMapGL>
    </div>
  );
}

export default MapBox;
