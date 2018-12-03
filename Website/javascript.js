function myFunction() {	
	document.getElementById("test").innerHTML = "testing";
}


var layers = [
	{name:"Background", active:true, icon:"none"},
	{name:"Function", active:true, icon:"none"},
	{name:"Unsorted", active:true, icon:"none"},
	{name:"Temperature", active:true, icon:"none"}];

addLayer("Testing", "none");

function updateLayerList(){

	var layerList = document.getElementById("layerList");

	for (var i = 0; i < layerList.children.length; i++) {
		alert(layerList.getChild(i));
	}

	for (var i = 0; i < layers.length; i++) {
		
		var newItem = document.createElement("li");
		var itemValue = document.createTextNode(layers[i].name);

		newItem.appendChild(itemValue);
		layerList.appendChild(newItem);
	}
	
}

function addLayer (layerName, iconType) {

	var element = {};
	element.name = layerName;
	element.active = true;
	element.icon = iconType;
	layers.push(element)

}