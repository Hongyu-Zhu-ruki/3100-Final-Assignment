const plotpercentage = document.getElementById('Perplot');

var data1 = [
  {
    x: ['Australian Capital Territory', 'New South Wales',  'Northern Territory', 'Queensland', 'South Australia', 'Tasmania', 'Victoria', 'Western Australia'],
    y: [93, 90, 0, 90, 44, 65, 92, 56],
    type: 'bar',
  name: 'Fire Area',
  marker: {
    color: '#e4aabb',
    opacity: 0.7,
  }
  }
];
var layout = {
  title: '2019 Foreset Area lose Report',
  xaxis: {
    tickangle: -30
  },
};
Plotly.newPlot('Perplot', data1, layout);