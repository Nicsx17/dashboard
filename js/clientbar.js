let myChart1 = document.getElementById("chart1").getContext('2d');

var data ={
	labels:["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],
	datasets:[
		{
			label:"Clients in every Month",
			data:[50,45,56,51,61,65,70,85,74,88,67,96],
			backgroundColor:[
			"rgba(255,102,212,1)",
			"rgba(255,102,212,1)",
			"rgba(255,102,212,1)",
			"rgba(255,102,212,1)",
			"rgba(255,102,212,1)",
            "rgba(255,102,212,1)",
            "rgba(255,102,212,1)",
            "rgba(255,102,212,1)",
            "rgba(255,102,212,1)",
            "rgba(255,102,212,1)",
            "rgba(255,102,212,1)",
            "rgba(255,102,212,1)"
			],
			borderColor:[
			"rgba(0,0,0,1)",
			"rgba(0,0,0,1)",
			"rgba(0,0,0,1)",
			"rgba(0,0,0,1)",
			"rgba(0,0,0,1)",
            "rgba(0,0,0,1)",
            "rgba(0,0,0,1)",
            "rgba(0,0,0,1)",
            "rgba(0,0,0,1)",
            "rgba(0,0,0,1)",
            "rgba(0,0,0,1)"
			],
			borderWidth:1.5
		}
	]
};

var options ={
	title:{
	display:true,
	position:"top",
	text:"Bar Graph",
	fontSize:30,
	fontColor:"black"
},
legend:{
	display:true,
	position:"bottom"
}
};
let chart1 = new Chart(myChart1,{
	type:"bar",
	data:data,
	options:options
});