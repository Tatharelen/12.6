var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#countryName').val();
if(countryName.lenght = 0) countryName = 'Poland';
$.ajax({
	url: url + countryName,
	method: 'GET',
	success: showCountriesList
});
}

