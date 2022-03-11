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
    let astroObj = {};

	for(let i = 0; i < json.length; i++){
		//moving the img up resolved a formatting problem and now it looks like the intended output
		astroObj[i] = json[i];
		
		if(json[i].active === "true"){

		}
        
        
	div.innerHTML = div.innerHTML + `<div class = "bio">
	<img class="avatar" src = ${astroObj[i].picture}>
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
	

    let rearrangedObj = {};
    rearrangedObj[0] = astroObj[0];

    for(item in astroObj){
        if(rearrangedObj[0].hoursInSpace < astroObj[item].hoursInSpace){
            rearrangedObj[0] = astroObj[item];
            console.log(astroObj[item]);
        }

    }

	div.innerHTML = div.innerHTML + `<h1> Highest hours </h1> 
    <div class = "bio">
	<img class="avatar" src = ${rearrangedObj[0].picture}>
						<h3> ${rearrangedObj[0].firstName} ${rearrangedObj[0].lastName} </h3>
							<ul>
								<li>Hours in space: ${rearrangedObj[0].hoursInSpace}</li>
								<li>Active:  ${rearrangedObj[0].active}</li>
								<li>Skills: ${rearrangedObj[0].skills} </li>
							</ul> 
						</div>
	
	
	`;

	});
	
});


});