import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import Table from '../Table/Table';
import './VolcanoList.css';

function VolcanoList() {
    const [volcanoes, setVolcanoes] = React.useState([
        {
            id: 1,
            name: 'Mount Cook',
            region: 'New Zealand',
            subRegion: [
                {
                    id: 1,
                    name: 'Auckland',
                },
                {
                    id: 2,
                    name: 'Herosima',
                },
            ]
        },
        {
            id: 2,
            name: 'Mount Cook',
            region: 'New Zealand',
            subRegion: [
                {
                    id: 1,
                    name: 'Auckland',
                },
                {
                    id: 2,
                    name: 'Herosima',
                },
            ]
        },
        {
            id: 3,
            name: 'Mount Cook',
            region: 'Bangladesh',
            subRegion: [
                {
                    id: 1,
                    name: 'Auckland',
                },
                {
                    id: 2,
                    name: 'Herosima',
                },
            ]
        }

    ]);
    const [countries, setCountries] = React.useState([
        {
            id: 1,
            name: 'New Zealand',
        },
        {
            id: 2,
            name: 'Bangladesh',
        },
        {
            id: 3,
            name: 'New Zealand',
        }
    ]);

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target.region.value);
    }
    return (
        <div className='volcano-list__section'>
            <form className="search__form" onSubmit={handleSubmit}>
                <div className="search__form-left">
                    <h2>Country:</h2>
                    <select name="region" id="region">
                        <option value="">Select Country</option>
                        {countries.map(region => {
                            return (
                                <option key={region.id} value={region.name}>{region.name}</option>
                            )
                        }
                        )}
                    </select>
                </div>
                <div className="search__form-right">
                    <h2>Populated within:</h2>
                    <button>Search</button>
                </div>

            </form>
            <Table volcanoes={volcanoes} search={search} />

        </div>
    )
}

export default VolcanoList