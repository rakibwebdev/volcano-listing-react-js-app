import { Map, Marker } from "pigeon-maps";
import { useState, useEffect } from "react";
function CustomMap(props) {
    const { latitude, longitude } = props;
    const [center, setCenter] = useState([50.879, 4.6997]);
    const [zoom, setZoom] = useState(11)
    useEffect(() => {
        setTimeout(() => {
            setCenter([latitude, longitude]);
        }, 2000);
    });
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return (
        <Map height={500} center={center} defaultZoom={zoom}>
            <Marker
                width={50}
                anchor={center}
                color={color}
            />
        </Map>
    );

}
export default CustomMap;