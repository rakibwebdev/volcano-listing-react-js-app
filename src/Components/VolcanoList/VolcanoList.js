import React from 'react';
import { useState } from 'react';
import Table from '../Table/Table';
import './VolcanoList.css'; 
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function VolcanoList() {
    const [volcanoes, setVolcanoes] = React.useState([
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
            ]
        },
        {
            id: 2,
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
            ]
        },
        {
            id: 3,
            name: 'Mount Cook',
            country: 'Russia',
            region: 'Bangladesh',
            subregion: [
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
            name: 'Japan',
        }
    ]);

    const [search, setSearch] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target.region.value);
    }

    const [pageNumber, setPageNumber] = useState(1);
    
    const perPage = 2;
    const pagesVisited = pageNumber * perPage;
    const pageCount = Math.ceil(volcanoes.length / perPage);
    const displayVolcanoes = volcanoes.slice(pagesVisited - perPage, pagesVisited).map(volcano => {
        return (
            volcano.country.toLowerCase().includes(search.toLowerCase()) ? (
                <tr key={volcano.id}>
                    <td>
                        <Link to={`/volcano/${volcano.id}`}>
                            {volcano.name}
                        </Link>
                    </td>
                    <td>{volcano.region}</td>
                    <td>
                        {volcano.subregion.map(subregion => {
                            return (
                                <p key={subregion.id}>{subregion.name}, </p>
                            )
                        }
                        )}
                    </td>
                </tr>
            ) : null
        )
    }
    )


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
            <div className="volcano-list__table">
                
            </div>
            <Table volcanoes={displayVolcanoes} search={search} />

            <div className="volcano-list__pagination">
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    onPageChange={(e) => {
                        setPageNumber(e.selected + 1);
                    }
                    }
                    containerClassName={'pagination'}
                />
            </div>


        </div>
    )
}

export default VolcanoList;