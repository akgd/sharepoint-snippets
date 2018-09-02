// Add a redirect to the current url
var redirectUrl = 'YOUR URL';
var sourceParam = '?&Source=' + encodeURIComponent(redirectUrl);
window.history.pushState(null, null, sourceParam);

// Add a redirect and keep existing parameters
var redirectUrl = 'YOUR URL';
var sourceParam = '?&Source=' + encodeURIComponent(redirectUrl);
window.history.pushState(null, null, (window.location.href + sourceParam));
