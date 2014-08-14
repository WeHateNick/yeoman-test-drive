// Get Employee JSON
$.getJSON( '../data/employees.json', function(employee) {
	'use strict';
	// Loop through JSON array
	// Place an li for each name
	$(employee).each(function(i) {
		$('#slaves').append('<li class="available">' + employee[i].name + '</li>');
	});
});
// Set li class as available or unavailable

