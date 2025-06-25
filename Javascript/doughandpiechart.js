<!DOCTYPE html> 
<html lang="en"> 

<head> 
	<meta charset="UTF-8"> 
	<meta name="viewport" content= 
		"width=device-width, initial-scale=1.0"> 
	<title>Courses Distribution</title> 
	<script src= 
"https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"> 
	</script> 
	<script src= 
"https://cdn.jsdelivr.net/npm/chart.js@4.0.1/dist/chart.umd.min.js"> 
	</script> 
</head> 

<body> 
	<div> 
		<h1 style="color:green;"> 
			GeeksforGeeks 
		</h1> 
		
		<h3>Chart JS Doughnut Chart </h3> 
		
		<div> 
			<canvas id="coursesDoughnutChart"
				width="700" height="250"></canvas> 
		</div> 
	</div> 

	<script> 
		const coursesData = { 
			labels: ['Python', 'JavaScript', 
				'Java', 'C++', 'Data Structures'], 
			datasets: [{ 
				data: [30, 20, 15, 10, 25], 
				backgroundColor: ['#FF6384', '#36A2EB', 
					'#FFCE56', '#4CAF50', '#9C27B0'], 
			}], 
		}; 

		const config = { 
			type: 'doughnut', 
			data: coursesData, 
			options: { 
				plugins: { 
					title: { 
						display: true, 
						text: 'GeeksforGeeks Courses Distribution', 
					}, 
				}, 
			}, 
		}; 
		const ctx = document.getElementById( 
			'coursesDoughnutChart').getContext('2d'); 
			
		new Chart(ctx, config); 
	</script> 
</body> 

</html>
