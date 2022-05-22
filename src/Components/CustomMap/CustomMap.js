import { Map, Marker } from "pigeon-maps";
function CustomMap(props) {
    const { latitude, longitude } = props;
    console.log(latitude, longitude);
    return (
        <Map height={300} defaultCenter={[latitude, longitude]} defaultZoom={11}>
            <Marker width={50} anchor={[longitude, longitude]} />
        </Map>

    );
}
export default CustomMap;