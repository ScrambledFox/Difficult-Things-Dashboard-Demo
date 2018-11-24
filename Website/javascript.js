function myFunction() {	
	document.getElementById("test").innerHTML = "testing";
}


var layers = [
	{name:"Background", active:true, icon:"none"},
	{name:"Function", active:true, icon:"none"},
	{name:"Unsorted", active:true, icon:"none"},
	{name:"Temperature", active:true, icon:"none"}];


function changeListText(){

	for (var i = 0; i < layers.length; i++) {
		var node = document.createElement("LI");
		var textnode = document.createTextNode(layers[i].name);
		node.appendChild(textnode);
		document.getElementById("items").appendChild(node);
	}
	
}