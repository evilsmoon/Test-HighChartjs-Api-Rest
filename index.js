var resp = [];
var resp2 = [];
fetch("https://app-rest-pg-ts.herokuapp.com/communitys")
  .then((res) => res.json())
  .then((data) => {
    // console.log(data);
    data.forEach((res) => {
      resp2.push([res.ciudad, res.cantidad]);
    });

    Highcharts.chart("container", {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: "pie",
      },
      title: {
        text: "Nacimientos Datos por Comunidades Autónomas, 2018",
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
          data: resp2,
        },
      ],
    });
  });



// var resp = [];
// var resp2 = [];

// fetch('http://localhost:3000/communitys')
//   .then(res => res.json())
//   .then(data => {
//       console.log(data)
//     data.forEach(res => {
//       resp.push([res.madre])
//       resp2.push([res.ciudad, res.cantidad]);
//     })

//     console.log(resp)
//     console.log(resp2)

//     Highcharts.chart('container', {
//       chart: {
//           type: 'area'
//       },
//       title: {
//           text: 'Historic and Estimated Worldwide Population Growth by Region'
//       },
//       subtitle: {
//           text: 'Source: Wikipedia.org'
//       },
//       xAxis: {
//           categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
//           tickmarkPlacement: 'on',
//           title: {
//               enabled: false
//           }
//       },
//       yAxis: {
//           title: {
//               text: 'Billions'
//           },
//           labels: {
//               formatter: function () {
//                   return this.value / 1000;
//               }
//           }
//       },
//       tooltip: {
//           split: true,
//           valueSuffix: ' millions'
//       },
//       plotOptions: {
//           area: {
//               stacking: 'normal',
//               lineColor: '#666666',
//               lineWidth: 1,
//               marker: {
//                   lineWidth: 1,
//                   lineColor: '#666666'
//               }
//           }
//       },
//       series: resp2
//   })

//   });

//   data :{
//     name:[],{

//     }
//   }
// var resp = [];
// var resp_ciudad = [];
// var resp_cantidad = [];

// var res = [] ;
// fetch("http://localhost:3000/communitys")
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     // console.log(data)
//     data.forEach((i) => {
//       resp.push(i.madre);
//       resp_ciudad.push([i.ciudad,i.cantidad]);
//       // resp_cantidad.push(i.cantidad);

//     });
//   })
//   .then(() => {
//     // console.log(resp);
//     // console.log(resp_ciudad);

//     var uniq = {};
//     // var arrMadre = [];
//     var arrMadre = resp.filter(
//       (obj) => !uniq[obj] && (uniq[obj] = true)
//     );
//     console.log(arrMadre);
//     var arrCiudad = resp_ciudad.filter(
//       (obj) => !uniq[obj] && (uniq[obj] = true)
//     );
//     console.log(arrCiudad);
//     // var arrdata = []
//     // console.log(arrdata)

//     Highcharts.chart('container', {
//       chart: {
//           type: 'area'
//       },
//       title: {
//           text: 'Historic and Estimated Worldwide Population Growth by Region'
//       },
//       subtitle: {
//           text: 'Source: Wikipedia.org'
//       },
//       xAxis: {
//           categories: arrMadre,
//           tickmarkPlacement: 'on',
//           title: {
//               enabled: false
//           }
//       },
//       yAxis: {
//           title: {
//               text: 'Billions'
//           },
//           labels: {
//               formatter: function () {
//                   return this.value / 1000;
//               }
//           }
//       },
//       tooltip: {
//           split: true,
//           valueSuffix: ' millions'
//       },
//       plotOptions: {
//           area: {
//               stacking: 'normal',
//               lineColor: '#666666',
//               lineWidth: 1,
//               marker: {
//                   lineWidth: 1,
//                   lineColor: '#666666'
//               }
//           }
//       },
//       series: arrCiudad
//   });
//   })
