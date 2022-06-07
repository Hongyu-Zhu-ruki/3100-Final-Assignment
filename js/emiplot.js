const emiplot = document.getElementById('emiplot');

var data = [
  {
    x: ['2010','2011','2012','2013','2014','2015','2016','2017','2018','2019','2020'],
    y: [807.6, 40.6, 574.8, 838.4, 9547.4, 3216.249, 3087.294, 188.0229, 308.1924, 293.398],
    type: 'bar',
  name: 'Fire Area',
  marker: {
    color: '#f2b65c',
    opacity: 0.7,
  }
  }
];
var layout = {
  title: '10 Years Carbon Emission',
  xaxis: {
    tickangle: 0
  },
};
Plotly.newPlot('emiplot', data, layout);