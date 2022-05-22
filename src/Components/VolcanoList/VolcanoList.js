import React from 'react';
import { useState, useEffect } from 'react';
import Table from '../Table/Table';
import './VolcanoList.css'; 
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

function VolcanoList() {
    
    const [volcanoes, setVolcanoes] = React.useState();
    const [countries, setCountries] = React.useState();

    useEffect(() => {
        fetch(`http://sefdb02.qut.edu.au:3001/countries`)
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
            }
        )
    }, []);

    useEffect(() => {
        fetch(`http://sefdb02.qut.edu.au:3001/volcanoes?country=${search}`)
            .then((response) => response.json())
            .then((data) => {
                setVolcanoes(data);
            }
        )
    }, []);
    console.log(volcanoes);

    const [search, setSearch] = useState('japan');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(e.target.region.value);
    }

    const [pageNumber, setPageNumber] = useState(1);
    
    const perPage = 10;
    const pagesVisited = pageNumber * perPage;
    const pageCount = Math.ceil(volcanoes && volcanoes.length / perPage);
    const displayVolcanoes = volcanoes && volcanoes.slice(pagesVisited - perPage, pagesVisited).map(volcano => {
        return (
            volcanoes && volcano.country.toLowerCase().includes(search.toLowerCase()) ? (
                <tr key={volcano.id}>
                    <td>
                        <Link to={`/volcano/${volcano.id}`}>
                            {volcano.name}
                        </Link>
                    </td>
                    <td>{volcano.region}</td>
                    <td>
                        {volcano.subregion}
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
                        {
                            countries && countries.map(country => {
                                return (
                                    <option key={Math.random()} value={country}>{country}</option>
                                )
                            })

                        }
                        
                        
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