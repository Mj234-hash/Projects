<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, 
                   initial-scale=1.0">
    <title>Bar Chart Example</title>

    <!-- Include Chart.js from CDN -->
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
    <h2>Bar Chart Example</h2>

    <!-- Creating an element -->
    <canvas id="myBarChart" 
            width="380" 
            height="180">
    </canvas>

    <script>

        // data sample for the chart
        let data = {
            labels: ['Label 1', 'Label 2',
                     'Label 3', 'Label 4', 
                     'Label 5'],
            datasets: [{
                label: 'Sample Bar Chart',
                data: [12, 17, 3, 8, 2],
                backgroundColor: 'rgba(70, 192, 192, 0.6)',
                borderColor: 'rgba(150, 100, 255, 1)',
                borderWidth: 1
            }]
        };

        // Configuration options for the chart
        let options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        // Get the canvas element
        let ctx = document.getElementById('myBarChart')
            .getContext('2d');

        // Create the bar chart
        let myBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    </script>

</body>

</html>
