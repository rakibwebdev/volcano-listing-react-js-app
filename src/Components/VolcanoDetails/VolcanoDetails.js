import React, { Fragment } from 'react'
import CustomMap from '../CustomMap/CustomMap';
import Chart from '../Chart/Chart';
import './VolcanoDetails.css';
import { useEffect } from 'react';
function VolcanoDetails() {
    const [volcano, setVolcano] = React.useState();
    // get the id from the url
    const id = window.location.pathname.split('/')[2];
    // get the token from localStorage and set it to the header of the request
    const token = localStorage.getItem('token');
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }

    useEffect(() => {
        fetch(`http://sefdb02.qut.edu.au:3001/volcano/${id}`, { headers })
            .then((response) => response.json())
            .then((data) => {
                setVolcano(data);
            }
            )
            .catch((error) => {
                console.log(error);
            }
            )
    }, []);
    return (
        <Fragment>
            <div className='volcano-detials__section'>
                <div className='left'>
                    <h1>{volcano && volcano.name}</h1>
                    <p>Country: {volcano && volcano.country}</p>
                    <p>Region: {volcano && volcano.region}</p>
                    <p>Subregion: {volcano && volcano.subregion}</p>
                    <p>Last Eruption: {volcano && volcano.last_eruption}</p>
                    <p>Summit: {volcano && volcano.summit}</p>
                    <p>Elevention: {volcano && volcano.elevation}</p>
                </div>
                <div className='right'>
                    <CustomMap latitude={volcano && volcano.latitude} longitude={volcano && volcano.longitude} />
                </div>
            </div>
            {/* <div className='volcano-detials__section-chart'>
                <Chart VolcanoDetails={VolcanoDetails} />
            </div> */}
        </Fragment>
    )
}

export default VolcanoDetails;