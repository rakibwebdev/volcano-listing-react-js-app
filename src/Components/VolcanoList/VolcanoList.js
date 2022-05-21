import React from 'react'

function VolcanoList() {
    const volcanoAPI = 'http://sefdb02.qut.edu.au:3001/volcanoes';
    const countryAPI = 'http://sefdb02.qut.edu.au:3001/countries';
    const [volcanoes, setVolcanoes] = React.useState([]);
    const [countries, setCountries] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    React.useEffect(() => {
        setIsLoading(true);
        fetch(volcanoAPI)
            .then(res => res.json())
            .then(data => {
                setVolcanoes(data);
                setIsLoading(false);
            }
            )
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            }
            );
    }
        , []);

    React.useEffect(() => {
        setIsLoading(true);
        fetch(countryAPI)
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                setIsLoading(false);
            }
            )
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            }
            );
    }
        , []);

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
                                    <td><a href={`/volcano/`.volcano.id}>{volcano.name}</a></td>
                                    <td>{countries.find(country => country.id === volcano.country_id).name}</td>
                                    <td>{volcano.elevation}</td>
                                    <td>{volcano.last_eruption}</td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default VolcanoList;