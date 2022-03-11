window.addEventListener("load", function() {
	
	fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
	//	return response.json();
	//})
	//.then(function(response) {
	//	console.log(response);
	//})

	//26.3.2.3 in reading
	response.json().then( function(json) {
	const div = document.getElementById("container");
	let astroCount = 0;
	for(let i = 0; i < json.length; i++){
		//moving the img up resolved a formatting problem and now it looks like the intended output
		
		console.log(json[i].active);
		if(json[i].active === "true"){

		}
	div.innerHTML = div.innerHTML + `<div class = "bio">
	<img class="avatar" src = ${json[i].picture}>
						<h3> ${json[i].firstName} ${json[i].lastName} </h3>
							<ul>
								<li>Hours in space: ${json[i].hoursInSpace}</li>
								<li>Active:  ${json[i].active}</li>
								<li>Skills: ${json[i].skills} </li>
							</ul> 
						</div>
	
	
	`;
	astroCount++;
						
						
						
	}
	div.innerHTML = div.innerHTML + `<h1>Astronaut Count: ${astroCount}</h1>`;
	
	});
	
});


});