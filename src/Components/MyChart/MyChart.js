import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
function MyChart(props) {
    const { population_5km, population_10km, population_30km, population_100km } = props;
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
                            data: [population_5km, population_10km, population_30km, population_100km]
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
export default MyChart;