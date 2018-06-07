//Add a redirect to the current url
var redirectUrl = 'YOUR URL';
var sourceParam = '?&Source=' + encodeURIComponent(redirectUrl);
window.history.pushState(null, null, sourceParam);

//Use the below if there are existing parameters
var redirectUrl = 'YOUR URL';
var sourceParam = '?&Source=' + encodeURIComponent(redirectUrl);
window.history.pushState(null, null, (window.location.href + sourceParam));

