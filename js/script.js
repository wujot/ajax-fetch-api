'use strict';

(function(){

	var url = 'https://restcountries.eu/rest/v2/name/';
	var countriesList = document.getElementById('countriesList');

	document.getElementById('search').addEventListener('click', searchCountries);

	function searchCountries() {
		var countryName = document.getElementById('country-name').value;
		if(!countryName.length) countryName = 'Poland';
		fetch(url + countryName)
        	.then(function(resp) {
            	return resp.json();
        	})
        	.then(showCountriesList);
	}

	function showCountriesList(resp) {
	    countriesList.innerHTML = '';
	    resp.forEach(function(item){

			document.getElementById('');

		    var liEl = document.createElement('div');

			liEl.classList.add("countryCard");		    

		    liEl.innerHTML = '<div class="header">' + 
		    					'<img src="' + item.flag + '"/>' +
		    					'<h2>' + item.name + '</h2>' + 
		    				'</div>' + 
		    				'<div class="line">' +
		    					'<p>Background Information:</p>' +
		    				'</div>' + 
		    				'<div class="content">' +
		    					'<table>' +
		    						'<tr>' +
		    							'<th>Capital city:</th>' +
		    							'<td>' + item.capital + '</td>' +
		    						'</tr>' +
		    						'<tr>' +
		    							'<th>Population:</th>' +
		    							'<td>' + item.population + '</td>' +
		    						'</tr>' +
		    						'<tr>' +
		    							'<th>Region:</th>' +
		    							'<td>' + item.region + '</td>' +
		    						'</tr>' +
		    						'<tr>' +
		    							'<th>Area:</th>' +
		    							'<td>' + item.area + '</td>' +
		    						'</tr>' +
		    						'<tr>' +
		    							'<th>Currency:</th>' +
		    							'<td>' + item.currencies[0].name + '</td>' +
		    						'</tr>' +
		    					'</table>' +
		    				'</div>' +
		    				'<div class="line">' +
		    					'<p>' + item.altSpellings[1] +'</p>' +
		    				'</div>';

		    				console.log(item.flag);

		    countriesList.appendChild(liEl);
		});
	}

})(); 
