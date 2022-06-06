// Find the empty div for the chart
const plottotal = document.getElementById('Totalplot');

var data1 = [
  {
    x: ['Total Fire Area', 'Total Foreset Area in Fire'],
    y: [10331, 8486],
    type: 'bar',
  name: 'Fire Area',
  marker: {
    color: '#99aab8',
    opacity: 0.7,
  }
  }
];
var layout = {
  title: '2019 Foreset Area Report',
  xaxis: {
    tickangle: -30
  },
};
Plotly.newPlot('Totalplot', data1, layout);