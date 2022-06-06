// Find the empty div for the chart
const plotDiv = document.getElementById('myPlot');

// Some data to plot
var trace1 = {
  x: ['Australian Capital Territory','New South Wales','Northern Territory','Queensland','South Australia','Tasmania','Victoria','Western Australia'],
  y: [90, 5682, 0, 574, 313, 45, 1583, 2044],
  type: 'bar',
  name: 'Fire Area',
  marker: {
    color: 'rgb(49,130,189)',
    opacity: 0.7,
  }
};

var trace2 = {
  x: ['Australian Capital Territory','New South Wales','Northern Territory','Queensland','South Australia','Tasmania','Victoria','Western Australia'],
  y: [83, 5123, 0, 514, 137, 30, 1457, 1143],
  type: 'bar',
  name: 'Foreset area in Fire area',
  marker: {
    color: 'rgb(204,204,204)',
    opacity: 0.5
  }
};

var data = [trace1, trace2];

var layout = {
  title: '2019 Foreset Area Report',
  xaxis: {
    tickangle: -45
  },
  barmode: 'group'
};

Plotly.newPlot('myPlot', data, layout);