<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, 
                   initial-scale=1.0">
    <title>Chart.js Line Chart</title>
    <script src=
"https://cdn.jsdelivr.net/npm/chart.js">
      </script>

    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 20px;
            text-align: center;
        }

        h1 {
            color: green;
        }

        canvas {
            border: 2px solid #858080;
        }
    </style>

</head>

<body>

    <h1>GeeksForGeeks</h1>
    <h2>Line Chart Example - Simple</h2>

    <canvas id="myLineChart" 
            width="380" height="180">
      </canvas>

    <script>
        // data for showing the line chart
        let labels = ['January', 'February', 
                      'March', 'April', 'May'];
        let dataset1Data = [10, 25, 13, 18, 30];
        let dataset2Data = [20, 15, 28, 22, 10];

        // Creating line chart
        let ctx = 
            document.getElementById('myLineChart').getContext('2d');
        let myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Solid Line',
                        data: dataset1Data,
                        borderColor: 'blue',
                        borderWidth: 2,
                        fill: false,
                    },
                    {
                        label: 'Solid Line',
                        data: dataset2Data,
                        borderColor: 'red',
                        borderWidth: 2,
                        fill: false,
                    },
                    {
                        label: 'Solid Line',
                        data: [15, 10, 20, 25, 12],
                        borderColor: 'green',
                        borderWidth: 2,
                        fill: true,
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Months',
                            font: {
                                padding: 4,
                                size: 20,
                                weight: 'bold',
                                family: 'Arial'
                            },
                            color: 'darkblue'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Values',
                            font: {
                                size: 20,
                                weight: 'bold',
                                family: 'Arial'
                            },
                            color: 'darkblue'
                        },
                        beginAtZero: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Values',
                        }
                    }
                }
            }
        });
    </script>

</body>

</html>
