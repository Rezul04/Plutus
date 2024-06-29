// array of number
var numArr = function(length , max){
  return Array.from({length: length}, () => Math.floor(Math.random() * max));
}
var options = function(type, height, numbers , color){
  return {     
    chart: {
      height: height,
      width: '100%',
      type: type,
      sparkline: {
        enabled: true
      },
      toolbar: {
        show: false,
       },
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0    
        }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
        show: false,
    },
    series: [
    {
        name: "Lakhs",
        data: numbers
    }
    ],    
    fill: {
      colors: [color],
    },
    stroke:{
        colors: [color],
        width: 5
    },    
    yaxis: {
        show: false,        
    }, 
    xaxis: {
      show: false,
      labels: {
          show: false,
      },   
      axisBorder: {
        show: false,        
      },   
      tooltip: {
          enabled: false,
      }
    },
    
  };
}
var options2 = function(type, height, numbers , color){
  return {     
    chart: {
      height: height,
      width: '100%',
      type: type,
      sparkline: {
        enabled: true
      },
      toolbar: {
        show: false,
       },
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0    
        }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
        show: false,
    },
    series: [
    {
        name: "Thousands",
        data: numbers
    }
    ],    
    fill: {
      colors: [color],
    },
    stroke:{
        colors: [color],
        width: 5
    },    
    yaxis: {
        show: false,        
    }, 
    xaxis: {
      show: false,
      labels: {
          show: false,
      },   
      axisBorder: {
        show: false,        
      },   
      tooltip: {
          enabled: false,
      }
    },
    
  };
}
var options2 = function(type, height, numbers , color){
  return {     
    chart: {
      height: height,
      width: '100%',
      type: type,
      sparkline: {
        enabled: true
      },
      toolbar: {
        show: false,
       },
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0    
        }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
        show: false,
    },
    series: [
    {
        name: "Thousands",
        data: numbers
    }
    ],    
    fill: {
      colors: [color],
    },
    stroke:{
        colors: [color],
        width: 5
    },    
    yaxis: {
        show: false,        
    }, 
    xaxis: {
      show: false,
      labels: {
          show: false,
      },   
      axisBorder: {
        show: false,        
      },   
      tooltip: {
          enabled: false,
      }
    },
    
  };
}
 var options3 = function(type, height, numbers , color){
  return {     
    chart: {
      height: height,
      width: '100%',
      type: type,
      sparkline: {
        enabled: true
      },
      toolbar: {
        show: false,
       },
    },
    grid: {
        show: false,
        padding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0    
        }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
        show: false,
    },
    series: [
    {
        name: "Numbers",
        data: numbers
    }
    ],    
    fill: {
      colors: [color],
    },
    stroke:{
        colors: [color],
        width: 5
    },    
    yaxis: {
        show: false,        
    }, 
    xaxis: {
      show: false,
      labels: {
          show: false,
      },   
      axisBorder: {
        show: false,        
      },   
      tooltip: {
          enabled: false,
      }
    },
    
  };
}
 
  

  var analytics_1 =  document.getElementsByClassName("analytics_1");
    
  if (analytics_1 != null && typeof(analytics_1) != 'undefined') {
      var chart = new ApexCharts(analytics_1[0], options("area" , '80px' , numArr(10,99) , '#4fd1c5')); 
      var chart_1 = new ApexCharts(analytics_1[1], options2("area" , '80px' , numArr(10,59) , '#4c51bf')); 
      chart.render();       
      chart_1.render();       
  }

  