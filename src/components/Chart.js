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
      cutout: '85%',
    },
  ],
};

const dark_data = {
  datasets: [
    {
      data: [50, 50],
      backgroundColor: [
        'rgba(6, 132, 196, 0.77)',
        '#383850 ',
      ],
      borderColor: [
        'rgba(6, 132, 196, 0.77)',
        '#383850',
      ],
      borderWidth: 1,
      cutout: '85%',
    },
  ],
};

const options = {
  responsive: false,
  plugins: {
    legend: {
      position: 'absolute',
    }
  }
}

const Chart = ({ mode }) => {
  return (
    <div>
      <div style={{ position: 'relative'}}>
        <Doughnut data={mode === 'light' ? light_data : dark_data} options={options}  style={{ width: '300px'}}/>
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          <p style={mode === 'light' ? {color: '#8993A7', fontWeight: '600'} :  {color: '#8C8EA0', fontWeight: '600'}}>1000점</p>
          <p style={mode === 'light' ? {color: '#8993A7'} :  {color: '#8C8EA0'}}>50%</p>
        </div>
      </div>
      <p style={mode === 'light' ? {color: '#8993A7', marginTop: '10px'} :  {color: '#8C8EA0', marginTop: '10px'}}>전체 당성률</p>
      <p style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>1000/500점 달성</p>
    </div>
  )
}

export default Chart;