const emiplot3 = document.getElementById('emiplot3');

var data = [{
  values: [102052739.6,92083101.92, 410081207.6, 680935491.1],
  labels: ['2018','2019','2020'],
  type: 'pie'
}];

var layout = {
  height: 400,
  width: 500
};

Plotly.newPlot('emiplot3', data, layout);