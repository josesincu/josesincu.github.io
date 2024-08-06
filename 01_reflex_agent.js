// MIT License
// Copyright (c) 2020 Luis Espino

function reflex_agent(location, state){
   	if (state=="DIRTY") return "CLEAN";
   	else if (location=="A") return "RIGHT";
   	else if (location=="B") return "LEFT";
}

function test(list_states){
		let states = list_states.shift();
			
      	var location = states[0];		
      	var state = states[0] == "A" ? states[1] : states[2];
      	var action_result = reflex_agent(location, state);
      	document.getElementById("log").innerHTML+="<br>Location: ".concat(location).concat(" | Action: ").concat(action_result);
      	if (action_result == "CLEAN"){
        	if (location == "A") states[1] = "CLEAN";
         	else if (location == "B") states[2] = "CLEAN";
      	}
      	else if (action_result == "RIGHT") states[0] = "B";
      	else if (action_result == "LEFT") states[0] = "A";
		
		if (list_states.length === 0) return;	
	setTimeout(function(){ test(list_states); }, 2000);
	
}

var states = ["A","DIRTY","DIRTY"];
let list_states = [
				   ["A","DIRTY","DIRTY"],
				   ["B","DIRTY","DIRTY"],
				   ["A","DIRTY","CLEAN"],
				   ["B","DIRTY","CLEAN"],
				   ["A","CLEAN","DIRTY"],
				   ["B","CLEAN","DIRTY"],
				   ["A","CLEAN","CLEAN"],
				   ["B","CLEAN","CLEAN"],
				  ];
test(list_states);
