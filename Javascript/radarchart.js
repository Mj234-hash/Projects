<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta name="viewport"
		content="width=device-width, initial-scale=1.0">
	<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js">
	</script>
	<script src=
"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.1.2/chart.umd.js">
	</script>
	<title>Radar Chart Example</title>
</head>

<body>
	<div>
		<h2 style="color:green">
			GeeksforGeeks
		</h2>
		<h5>Chart JS Radar Chart 1</h5>
		<div>
			<canvas id="radarChart"
					width="700" height="300">
			</canvas>
		</div>
	</div>
	<script>
		let ctx = 
			document.getElementById('radarChart').getContext('2d');
		let myRadarChart = new Chart(ctx, {
			type: 'radar',
			data: {
				labels:
					['Coding', 'Problem Solving', 'Algorithms',
					'Data Structures', 'GeeksforGeeks Knowledge'],
				datasets: [{
					label: 'GeeksforGeeks Skills',
					data: [90, 85, 80, 75, 95],
					backgroundColor: 'rgba(75, 192, 192, 0.2)',
					borderColor: 'rgba(75, 192, 0, 1)',
					borderWidth: 2,
				}]
			},
			options: {
				scale: {
					pointLabels: {
						fontSize: 14,
					}
				}
			}
		});
	</script>
</body>

</html>
