
  export default function onSearch(context) {
	var logger = context.getLogger();
	logger.on;
	logger.setLevel('Info');
	// logger.log(logger.getLevel);
	// logger.log("Current Log Level: " + logger.getLevel);
	// var esName = context.evaluateTargetPath('#Page:Search/#Control:EnterStoreName/#Value');
	// var ctValue = context.evaluateTargetPath('#Page:Search/#Control:CoordinatesTest/#Value');
	// alert(esName + " " + ctValue);
	var anotherStore = {
		"City": "Glen Mills",
		"Country": "United States",
		"HouseNumber": "",
		"LastName": "Costco",
		"PostalCode": "19342",
		"Street": "700 Evergreen Dr"
	};
	// 
	// alert(JSON.stringify(anotherStore));
	var mapControl = context.evaluateTargetPath("#Page:Search/#Control:MapControlinSearch");
	// var t1 = mapControl.__proto__;
	// var t2 = mapControl.prototype;
	var extension = mapControl._extension;
	// var t3 = extension.__proto__;
	// var t4 = extension.prototype;
	// mapControl.setValue(anotherStore);
	// extension.setValue(anotherStore);
	// t1.setValue(anotherStore);
	// t3.setValue(anotherStore);
	extension.addMarker(anotherStore);
	// t1.addMarker(anotherStore);
	// t2.setValue(anotherStore);
	// t3.addMarker(anotherStore);
	// t4.setValue(anotherStore);
	// var gMap = extension._gMap;
	// var geo = extension._geo;
	// var customerAddress = anotherStore.houseNumber + ' ' + anotherStore.street + ' ' + anotherStore.city + ' ' +
	// 					anotherStore.country + ' ' + anotherStore.postalCode;
	// var customerAddress = '700 Evergreen Dr Glen Mills United States 19342';
	// var data = geo.getFromLocationName(customerAddress, 1);
	// var latLng = new com.google.android.gms.maps.model.LatLng(data.get(0).getLatitude(), data.get(0).getLongitude());
	// gMap.addMarker(new com.google.android.gms.maps.model.MarkerOptions().position(latLng).title('Costco' +
	// 					"'s " + "location"));
	// logger.log("before add");
	// mapControl._extension.setValue(anotherStore);
	// logger.log("after add");
	// logger.log(esName);
	// alert(esName);
	// logger.uploadLogFile("https://ic-cf-2020-team-227-com-sap-mdk-pan.cfapps.eu10.hana.ondemand.com", "com.sap.mdk.pan");
	return true;
	
}