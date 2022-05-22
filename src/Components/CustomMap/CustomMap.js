import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
function CustomMap(props) {
    const { latitude, longitude } = props;
    
    const [zoom, setZoom] = useState(11)
    return (
        <Map
            height={300}
            center={center}
            zoom={zoom}
            onBoundsChanged={({ center, zoom }) => {
                setCenter(center)
                setZoom(zoom)
            }}
        />
    )
}
export default CustomMap;