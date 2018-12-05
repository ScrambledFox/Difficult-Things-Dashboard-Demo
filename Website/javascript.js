var layers = [
	{name:"Background", active:true, icon:"none"},
	{name:"Function", active:true, icon:"none"},
	{name:"Unsorted", active:true, icon:"none"},
	{name:"Temperature", active:true, icon:"none"}];


function openLayerWindow(){

	var windowModal = document.getElementById("newLayerModal");
	windowModal.style.display = "block";

}

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

	var newLayerItem = document.createElement("li");
	var newLayerLink = document.createElement("a");
	var newLayerValue = document.createTextNode("New Layer...");

	newLayerLink.appendChild(newLayerValue);

	newLayerLink.title = "Create a new layer";
	newLayerLink.onclick = openLayerWindow;
	//newLayerLink.href = "#"; // Linkable

	newLayerItem.appendChild(newLayerLink);
	layerList.appendChild(newLayerItem);
	
}

function addLayer (layerName, iconType) {

	var element = {};
	element.name = layerName;
	element.active = true;
	element.icon = iconType;
	layers.push(element)

}