import React from 'react';
import './Table.css';
function Table(props) {
    const { volcanoes } = props;
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
                    {volcanoes}
                </tbody>
            </table>

        </div>
    )
}

export default Table;