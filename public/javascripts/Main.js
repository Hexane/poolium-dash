var randomScalingFactor = function(){ return Math.round(Math.random()*100)};
var lineChartData = {
	labels : ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
	datasets : [
{
			label: "My Second dataset",
			fillColor : "rgba(30,160,255,0.5)",
			strokeColor : "rgba(151,187,205,1)",
			pointColor : "#1E90FF",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,0.5)",
			data : [115,120,130,140,145,140,130]
		},
		{
			label: "My Third dataset",
			fillColor : "rgba(30,190,0,0.5)",
			strokeColor : "#9ACD32",
			pointColor : "#32CD32",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,0.1)",
			data : [112,100,105,106,98,130,130]
		},
			{
			label: "My Second dataset",
			fillColor : "rgba(255,220,80,0.8)",
			strokeColor : "#F0E68C",
			pointColor : "#FFD700",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(151,187,205,0.1)",
			data : [30,28,27,22,40,50,21.5]
		},
		{
			label: "My First dataset",
			fillColor : "rgba(225,60,60,0.5)",
			strokeColor : "#CD5C5C",
			pointColor : "#CD5C5C",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,0.1)",
			data : [6,7,7.5,8,8.4,8,7.8]
		}
	]

}



window.onload = function(){
		var ctx = document.getElementById("canvas").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true,
			bezierCurve : false
		});
	}
