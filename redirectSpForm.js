var redirectUrl = 'YOUR URL';
var sourceParam = '?&Source=' + encodeURIComponent(redirectUrl);
window.history.pushState(null, null, sourceParam);
