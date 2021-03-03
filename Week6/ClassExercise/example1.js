var element = document.getElementById('myChart').getContext('2d');

var chartType = 'pie'; // The type of chart we want to create

// The data for our dataset
var chartData = {
    labels: ['Kenya', 'Uganda', 'Tanzania', 'Ethiopia', 'Sudan', 'Burundi', 'Rwanda'],
    datasets: [{
        label: 'Countries That can change',
        //backgroundColor: 'rgb(255, 99, 132)',
        //backgroundColor['#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
        //borderColor: 'rgb(255, 99, 132)',
        backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(153, 102, 255, 0.2)',
           'rgba(255, 159, 64, 0.2)',
           'rgba(255, 159, 164, 0.2)'
       ],
       borderColor: [
           'rgba(255, 99, 132, 1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)',
           'rgba(255, 159, 64, 0.2)'
       ],
        data: [30, 40, 15, 25, 21, 33, 45]
    }]
};

// Configuration options go here
var chartOptions = {
        layout: {
            padding: {
                left: 50,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
        scales: {
        yAxes: [{
            ticks: {
                beginAtZero: true
            }
        }]
    }
  };

// new Chart(x, y) creates a new chart object where:
// x is the object for the html element.
// y is JSON object of type {a,b,c} see below.

var chart = new Chart(element, {type:chartType, data: chartData, options: chartOptions});
