<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" 
          content="width=device-width, 
                   initial-scale=1.0">
    <title>Styled Bar Chart Example</title>

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
            border: 2px solid #4b4949ab;

        }
    </style>
</head>

<body>

    <h1>GeeksForGeeks</h1>

    <h2>Styled Bar Chart</h2>

    <!-- Create a canvas element for the chart -->
    <canvas id="myStyledBarChart" 
            width="370" 
            height="160"></canvas>

    <script>
        // Sample data for the chart
        let data = {
            labels: ['Label 1', 'Label 2',
                     'Label 3', 'Label 4',
                     'Label 5'],
            datasets: [{
                label: 'Styled Bar Chart',
                data: [12, 19, 4, 8, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.8)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 2,
                borderRadius: 10,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.8)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)'
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
        let ctx = document.
            getElementById('myStyledBarChart').
            getContext('2d');

        // Create the styled bar chart
        let myStyledBarChart = new Chart(ctx, {
            type: 'bar',
            data: data,
            options: options
        });
    </script>

</body>

</html>
