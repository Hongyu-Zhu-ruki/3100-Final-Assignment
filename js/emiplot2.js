const emiplot2 = document.getElementById('emiplot2');

var data2 = [
  {
    x: ['2017','2018','2019','2020'],
    y: [145356400.3, 102052739.6,92083101.92, 410081207.6, 680935491.1],
    type: 'bar',
  name: 'Fire Area',
  marker: {
    color: '#a5e03f',
    opacity: 0.7,
  }
  }
];
var layout = {
  title: '10 Years Carbon Emission',
  xaxis: {
    tickangle: -30
  },
};
Plotly.newPlot('emiplot2', data2, layout);