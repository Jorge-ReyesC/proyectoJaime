src="http//cdn.zingchart.com/zingchart.min.js"

//grafico 1//
ZC.LICENSE = ["569d52cefae586f634c54f86dc99e6a9", "b55b025e438fa8a98e32482b5f768ff5"];
let chartConfig = {
    type: "bar",
    title: {
    text: 'Suma De siniestros (2000-2020) separados por dia de semana'
    },
    csv: {
    url: '/HOMOLOGADOS/Total_Ocurrencias_Dias_2000_2020.csv',   
      }
    };

zingchart.render({
    id: 'myChart',
    data: chartConfig,
    height: 400,
    width: "100%"
    });

// Grafico 2//
let chart2Config = {
    type: "bar",
    title: {
    text: ''
    },
    csv: {
    url: '../HOMOLOGADOS/Total_Tipos_Ocurrencias_2000_2020.csv',   
        }
    };
     
    zingchart.render({
        id: 'myChart2',
        data: chart2Config,
        height: 400,
        width: "100%"
        });

//Grafico 3

let chart3Config = {
            type: "bar",
            title: {
            text: ''
            },
            csv: {
            url: '/HOMOLOGADOS/meses_mas_ocurrencias_2020.csv',   
              }
            };
        
        zingchart.render({
            id: 'myChart3',
            data: chart3Config,
            height: 400,
            width: "100%"
            });

//grafico 4 !HORAS!!!//

let chart4Config = {
    type: "ring",
    title: {
    text: ''
    },
    csv: {
    url: '/HOMOLOGADOS/tipo_siniestro_anual_2020.csv',   
      },
      plot: {
        borderColor: "#2B313B",
        borderWidth: 5,
        // slice: 90,
        valueBox: {
          placement: 'out',
          text: '%t\n%npv%',
          fontFamily: "Open Sans"
        },
        tooltip: {
          fontSize: '18',
          fontFamily: "Open Sans",
          padding: "5 10",
          text: "%npv%"
        },
        animation: {
          effect: 2,
          method: 5,
          speed: 900,
          sequence: 1,
          delay: 3000
        }
      },
      source: {
        text: 'Jorge Reyes',
        fontColor: "#8e99a9",
        fontFamily: "Open Sans"
      },
      title: {
        fontColor: "#8e99a9",
        
        align: "left",
        offsetX: 10,
        fontFamily: "Open Sans",
        fontSize: 25
      },
      subtitle: {
        offsetX: 10,
        offsetY: 10,
        fontColor: "#8e99a9",
        fontFamily: "Open Sans",
        fontSize: "16",
        text: 'Noviembre 2021',
        align: "left"
      },
      plotarea: {
        margin: "20 0 0 0"
      },
    
    
      
    };

zingchart.render({
    id: 'myChart4',
    data: chart4Config,
    height: 400,
    width: "100%"
    });