var respCantidadP = [];
var id = 1 ;
fetch(`http://localhost:3000/communityfather/${id}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.forEach((res) => {
      // resp.push([res.ciudad, res.cantidad]);
      // respCiudad.push();
      respCantidadP.push([res.padre,res.cantidad]);
    });
    Highcharts.chart("container5", {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
        },
        title: {
          text: "Nacimientos Datos por Comunidades Autónomas, padre",
        },
        tooltip: {
          pointFormat: "{series.resp2.name}: <b>{point.percentage:.1f}%</b>",
        },
        accessibility: {
          point: {
            valueSuffix: "%",
          },
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: false,
            },
            showInLegend: true,
          },
        },
        series: [
          {
            colorByPoint: true,
            data: respCantidadP,
          },
        ],
      });

      Highcharts.chart('container4', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Nacimientos Datos por Comunidades Autónomas,padre'
        },
        // subtitle: {
        // //     // text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
        // },
        accessibility: {
            announceNewData: {
                enabled: true
            }
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: 'Total percent market share'
            }
    
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },
    
        series: [
            {
                name: "Cantidad",
                colorByPoint: true,
                data: respCantidadP
            }
        ],
        
    });
  })
