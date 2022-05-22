import React, { Fragment } from 'react'
import CustomMap from '../CustomMap/CustomMap';
import Chart from '../Chart/Chart';
import './VolcanoDetails.css';
function VolcanoDetails() {
    const VolcanoDetails = 
        {
            id: 1,
            name: 'Mount Cook',
            country: 'Japan',
            region: 'New Zealand',
            subregion: [
                {
                    id: 1,
                    name: 'Auckland',
                },
                {
                    id: 2,
                    name: 'Herosima',
                },
            ],
            last_eruption: '2020-01-01',
            summit: '2020-01-01',
            elevation: '2020-01-01',
            latitude: "44°00'N",
            longitude: "144°15'E",
            population_5km: 4000,
            population_10km: 4000,
            population_30km: 4000,
            population_100km: 4000,

    }
    
    // get the id from the url
    const id = window.location.pathname.split('/')[2];
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