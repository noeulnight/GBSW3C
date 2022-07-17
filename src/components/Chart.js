import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2'
import { useState, useEffect } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

const light_data = {
  datasets: [
    {
      data: [0, 100],
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
      data: [0, 100],
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
  const [myScore, setMyScore] = useState(null)
  const [maxScore, setMaxScore] = useState(null)

  useEffect(() => {
    fetch('/api/score/v1/score/@me')
    .then((res) => res.status === 403 ? (sessionStorage.clear() || window.location.reload()) : res.json())
      .then((res) => setMyScore(res.data.score))

    fetch('/api/score/v1/score/@max')
    .then((res) => res.status === 403 ? (sessionStorage.clear() || window.location.reload()) : res.json())
      .then((res) => setMaxScore(res.data.maxScore))
  }, [])

  const data = mode === 'light' ? light_data : dark_data

  if (maxScore !== null && myScore !== null)
    data.datasets[0].data = [myScore, maxScore - myScore]

  return (
    <div>
      <div style={{ position: 'relative'}}>
        {!(maxScore !== null && myScore !== null) && <Doughnut data={data} options={options} style={{ width: '300px'}}/>}
        {maxScore !== null && myScore !== null && <Doughnut data={data} options={options} style={{ width: '300px'}}/>}
        <div style={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
          <p style={mode === 'light' ? {color: '#8993A7', fontWeight: '600'} :  {color: '#8C8EA0', fontWeight: '600'}}>{myScore !== null ? (myScore + '점') : '로딩중..'}</p>
          <p style={mode === 'light' ? {color: '#8993A7'} :  {color: '#8C8EA0'}}>{maxScore !== null && myScore != null ? (Math.round(myScore / maxScore * 1000) / 10 + '%') : '...'}</p>
        </div>
      </div>
      <p style={mode === 'light' ? {color: '#8993A7', marginTop: '10px'} :  {color: '#8C8EA0', marginTop: '10px'}}>전체 달성률</p>
      <p style={mode === 'light' ? {color: '#ACB2CB'} : {color: '#6F738E'}}>{myScore !== null ? (myScore + '점') : '로딩중...'}{maxScore !== null ? ('/' + maxScore) : ''}점 달성</p>
    </div>
  )
}

export default Chart;
