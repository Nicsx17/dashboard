$(function() {
  var doughnutPieData = {
    datasets: [{
      data: [54, 66, 40],
      backgroundColor: [
        'rgba(255, 0, 146, 0.8)',
        'rgba(0, 24, 255, 1)',
        'rgba(223, 234, 20, 1)'
      ],
      borderColor: [
        'rgba(255, 102, 212, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(246, 255, 82, 1)',
      ],
    }],
    
    labels: [
      'Birthday',
      'Wedding',
      'Party',
    ]
  };
  var doughnutPieOptions = {
    responsive: true,
    animation: {
      animateScale: true,
      animateRotate: true
    }
  };

  if ($("#pieChart").length) {
    var pieChartCanvas = $("#pieChart").get(0).getContext("2d");
    var pieChart = new Chart(pieChartCanvas, {
      type: 'pie',
      data: doughnutPieData,
      options: doughnutPieOptions
    });
  }
})