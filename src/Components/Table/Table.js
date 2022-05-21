import React from 'react'
import './Table.css';
function Table(props) {
    const { volcanoes, search } = props;
    console.log(search);
    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Sub Region</th>
                    </tr>
                </thead>
                <tbody>
                    {volcanoes.filter(volcano => volcano.region.toLowerCase().includes(search.toLowerCase())).map(volcano => {
                        return (
                            <tr key={volcano.id}>
                                <td>{volcano.name}</td>
                                <td>{volcano.region}</td>
                                <td>
                                    {volcano.subRegion.map(subRegion => {
                                        return (
                                            <p key={subRegion.id}>{subRegion.name}, </p>
                                        )
                                    }
                                    )}
                                </td>
                            </tr>
                        )
                    })
                    }
                </tbody>
            </table>

        </div>
    )
}

export default Table;