// Get Employee JSON
$.getJSON( '../data/employees.json', function(employee) {
	'use strict';
	// Loop through JSON array
	$(employee).each(function(i) {
		var availableClass;
		if (employee[i].inoffice === true) {
			availableClass = 'available';
		}
		else {
			availableClass = 'unavailable';
		}
		// Place an li for each name
		$('#slaves').append('<li class="' + availableClass + '">' + employee[i].name + '</li>');
	});
});
// Set li class as available or unavailable
