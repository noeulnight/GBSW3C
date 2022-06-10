import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)

const data = {
  datasets: [
    {
      label: '# of Votes',
      data: [50, 50],
      backgroundColor: [
        'rgba(6, 132, 196, 0.77)',
        'rgba(241, 241, 245, 0.96)',
      ],
      borderColor: [
        'rgba(6, 132, 196, 0.77)',
        'rgba(241, 241, 245, 0.96)',
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

const Chart = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Doughnut data={data} options={options}  style={{ width: '350px' }} />
      <p style={{ position: 'relative', display: 'inline-block', bottom: '110px', color: '#191919' }}>1000점 </p><br />
      <p style={{ position: 'relative', display: 'inline-block', bottom: '110px', fontSize: '13px', color: '#ACB2CB' }}>50% </p>
    </div>
  )
}

export default Chart;