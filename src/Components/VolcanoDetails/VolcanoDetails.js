import React, { Fragment } from 'react'
import CustomMap from '../CustomMap/CustomMap';
import Chart from '../Chart/Chart';
import './VolcanoDetails.css';
import {useEffect} from 'react';
function VolcanoDetails() {
    const [volcano, setVolcano] = React.useState();
    // get the id from the url
    const id = window.location.pathname.split('/')[2];
    useEffect(() => {
        fetch(`http://sefdb02.qut.edu.au:3001/volcanoes/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setVolcano(data);
            }
        )
    }, []);
    return (
        <Fragment>
            <div className='volcano-detials__section'>
                <div className='left'>
                    <h1>{VolcanoDetails.name}</h1>
                    <p>{VolcanoDetails.country}</p>
                    <p>{VolcanoDetails.region}</p>
                    <p>
                        {VolcanoDetails.subregion.map(subregion => (
                            <span key={subregion.id}>{subregion.name}</span>
                        ))}
                    </p>
                    <p>{VolcanoDetails.last_eruption}</p>
                    <p>{VolcanoDetails.summit}</p>
                    <p>{VolcanoDetails.elevation}</p>
                    <p>{VolcanoDetails.latitude}</p>
                    <p>{VolcanoDetails.longitude}</p>
                    <p>{VolcanoDetails.population_5km}</p>
                    <p>{VolcanoDetails.population_10km}</p>
                    <p>{VolcanoDetails.population_30km}</p>
                    <p>{VolcanoDetails.population_100km}</p>
                    
                </div>
                <div className='right'>
                    <CustomMap latitude={VolcanoDetails.latitude} longitude={VolcanoDetails.longitude}/>
                </div>
            </div>
            <div className='volcano-detials__section-chart'>
                <Chart VolcanoDetails={VolcanoDetails} />
            </div>
        </Fragment>
    )
}

export default VolcanoDetails;