async function loadData(file){

	let theData = [];
	await d3.csv(file, function (d) {
		return autocast(d);
	}).then(function (csv) {
		theData = csv;
	
	});

	return theData;
}


function autocast(d) {
	let keys = _.keys(d);
  
	let obj = {};
	keys.forEach(key => {
	 if (!isNaN(d[key])) {
		//we have a number
		obj[key] = +d[key];
	  } else {
		obj[key] = d[key];
	  }
	});
	return obj;
  }