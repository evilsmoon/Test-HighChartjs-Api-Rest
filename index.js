var resp = [];
var resp2 = [];
fetch('https://app-rest-pg-ts.herokuapp.com/communitys')
  .then(res => res.json())
  .then(data => {
      console.log(data)
    data.forEach(res => {
      resp2.push([res.ciudad, res.cantidad]);
    })

    Highcharts.chart('container', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Nacimientos Datos por Comunidades Autónomas, 2018'
      },
      tooltip: {
        pointFormat: '{series.resp2.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
          valueSuffix: '%'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: false
          },
          showInLegend: true
        }
      },
      series: [{
        colorByPoint: true,
        data: resp2
      }]
    });


  });
