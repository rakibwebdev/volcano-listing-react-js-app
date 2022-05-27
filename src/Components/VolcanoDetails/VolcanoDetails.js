import React, { Fragment } from 'react'
import CustomMap from '../CustomMap/CustomMap';
import MyChart from '../MyChart/MyChart';
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
    const unAuthHeader = {
        'Content-Type': 'application/json'
    }

    useEffect(() => {
        fetch(`http://sefdb02.qut.edu.au:3001/volcano/${id}`, { headers: unAuthHeader })
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
    const latitude = volcano && volcano.latitude;
    const longitude = volcano && volcano.longitude;
    const population_5km = volcano && volcano.population_5km;
    const population_10km = volcano && volcano.population_10km;
    const population_30km = volcano && volcano.population_30km;
    const population_100km = volcano && volcano.population_100km;
    if (token !== null) {
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
                        <CustomMap latitude={latitude} longitude={longitude} />
                    </div>
                </div>
                <div className='volcano-detials__section-chart'>
                    <MyChart population_5km={population_5km} population_10km={population_10km} population_30km={population_30km} population_100km={population_100km} />
                </div>
            </Fragment>
        )
    }

    if (token == null) {
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
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default VolcanoDetails;