import {Bar} from 'react-chartjs-2';
function Chart(props) {
    const { VolcanoDetails } = props;
    return (
        <div className="chart">
            <Bar
                data={{
                    labels: ['5km', '10km', '30km', '100km'],
                    datasets: [
                        {
                            label: 'Population',
                            backgroundColor: 'rgba(255,99,132,0.2)',
                            borderColor: 'rgba(255,99,132,1)',
                            borderWidth: 1,
                            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                            hoverBorderColor: 'rgba(255,99,132,1)',
                            data: [VolcanoDetails.population_5km, VolcanoDetails.population_10km, VolcanoDetails.population_30km, VolcanoDetails.population_100km]
                        }
                    ]
                }}
                options={{
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}
export default Chart;