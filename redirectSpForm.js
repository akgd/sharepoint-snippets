var redirectUrl = 'YOUR URL';
var sourceParam = '?&Source=' + encodeURIComponent(redirectUrl);
window.history.pushState(null, null, sourceParam);

//To keep existing parameters
var redirectUrl = 'YOUR URL';
var sourceParam = '?&Source=' + encodeURIComponent(redirectUrl);
window.history.pushState(null, null, (window.location.href + sourceParam));

