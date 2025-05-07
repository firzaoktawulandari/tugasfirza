const ctx = document.getElementById('chart').getContext('2d');

new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Mar 1 - 7', 'Mar 8 - 14', 'Mar 15 - 21', 'Mar 22 - 28', 'Final wk'],
    datasets: [{
      label: 'Earnings',
      data: [40000, 120000, 115000, 118000, 180000],
      backgroundColor: '#d3a4f4'
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: false }
    }
  }
});