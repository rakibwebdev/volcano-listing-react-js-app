import React from 'react';
function VolcanoList() {
    // const volcanoAPI = 'http://sefdb02.qut.edu.au:3001/volcanoes';
    // const countryAPI = 'http://sefdb02.qut.edu.au:3001/countries';
    const [volcanoes, setVolcanoes] = React.useState([
        {
            id: 1,
            name: 'Mount Cook',
            country: 'New Zealand',
            elevation: '4,000m',
            last_eruption: '2020-01-01',
        },
        {
            id: 2,
            name: 'Mount Cook',
            country: 'New Zealand',
            elevation: '4,000m',
            last_eruption: '2020-01-01',
        },
        {
            id: 3,
            name: 'Mount Cook',
            country: 'New Zealand',
            elevation: '4,000m',
            last_eruption: '2020-01-01',
        }

    ]);
    const [countries, setCountries] = React.useState([
        {
            id: 1,
            name: 'New Zealand',
        },
        {
            id: 2,
            name: 'New Zealand',
        },
        {
            id: 3,
            name: 'New Zealand',
        }
    ]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    // Handle pagination
    const [currentPage, setCurrentPage] = React.useState(1);
    const [postsPerPage] = React.useState(2);

    // Handle Previous and Next buttons
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = volcanoes.slice(indexOfFirstPost, indexOfLastPost);

    // Handle pagination
    const paginate = pageNumber => setCurrentPage(pageNumber);

    // Handle Previous and Next buttons
    const handlePrevious = () => {
        setCurrentPage(currentPage - 1);
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1);
    }

    // Handle search
    const [search, setSearch] = React.useState('');



    // React.useEffect(() => {
    //     setIsLoading(true);
    //     fetch(volcanoAPI)
    //         .then(res => res.json())
    //         .then(data => {
    //             setVolcanoes(data);
    //             setIsLoading(false);
    //         }
    //         )
    //         .catch(err => {
    //             console.log(err);
    //             setIsLoading(false);
    //         }
    //         );
    // }
    //     , []);

    // React.useEffect(() => {
    //     setIsLoading(true);
    //     fetch(countryAPI)
    //         .then(res => res.json())
    //         .then(data => {
    //             setCountries(data);
    //             setIsLoading(false);
    //         }
    //         )
    //         .catch(err => {
    //             console.log(err);
    //             setIsLoading(false);
    //         }
    //         );
    // }
    //     , []);

    return (
        <div className='volcano-list__section'>
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Elevation</th>
                        <th>Last eruption</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? <tr><td colSpan='4'><p>Loading...</p></td></tr> :
                        volcanoes.map(volcano => {
                            return (
                                <tr key={volcano.id}>
                                    <td>{volcano.name}</td>
                                    <td>{volcano.country}</td>
                                    <td>{volcano.elevation}</td>
                                    <td>{volcano.last_eruption}</td>
                                    
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
            <div className='volcano-list__pagination'>
                <button className='btn btn-primary' onClick={handlePrevious}>Previous</button>
                <button className='btn btn-primary' onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

export default VolcanoList;