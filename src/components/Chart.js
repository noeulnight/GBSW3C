import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const light_data = {
  datasets: [
    {
      data: [50, 50],
      backgroundColor: [
        'rgba(6, 132, 196, 0.77)',
        '#f1f1f1',
      ],
      borderColor: [
        'rgba(6, 132, 196, 0.77)',
        '#f1f1f1',
      ],
      borderWidth: 1,
      cutout: '83%',
    },
  ],
};

const dark_data = {
  datasets: [
    {
      data: [50, 50],
      backgroundColor: [
        'rgba(6, 132, 196, 0.77)',
        '#383850  ',
      ],
      borderColor: [
        'rgba(6, 132, 196, 0.77)',
        '#383850',
      ],
      borderWidth: 1,
      cutout: '83%',
    },
  ],
};

const options = {
  responsive: false,
  plugins: {
    legend: {
      position: 'bottom'
    }
  }
}

const Chart = ({ mode }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Doughnut data={mode === 'light' ? light_data : dark_data} options={options}  style={{ width: '350px' }} />
      <p style={{ position: 'relative', display: 'inline-block', bottom: '110px', color: '#ACB2CB' }}>1000점 </p><br />
      <p style={{ position: 'relative', display: 'inline-block', bottom: '110px', fontSize: '13px', color: '#ACB2CB' }}>50% </p>
    </div>
  )
}

export default Chart;