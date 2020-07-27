// var resp = [];
// var respCiudad = [];
var respCantidadMenor = [];
var num = 50000;
fetch(`https://app-rest-pg-ts.herokuapp.com/communitysmenor/${num}`)
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.forEach((res) => {
      // resp.push([res.ciudad, res.cantidad]);
      // respCiudad.push();
      respCantidadMenor.push([res.ciudad,res.cantidad]);
    });
    Highcharts.chart('container2', {
      chart: {
          type: 'column'
      },
      title: {
          text: 'Nacimientos Datos por Comunidades Autónomas'
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
              data: respCantidadMenor
          }
      ],
      
  });
  })


// console.log(madre)
