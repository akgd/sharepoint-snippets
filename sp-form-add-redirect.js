/* The following adds the Source parameter
 * used to redirect the user after submitting
 * a form. This is useful when you can't directly
 * add the source parameter, or when you want to
 * be sure the user is not redirected to AllItems.aspx
 */

//Add a redirect to the current url
var redirectUrl = 'YOUR URL';
var sourceParam = '?&Source=' + encodeURIComponent(redirectUrl);
window.history.pushState(null, null, sourceParam);

//Add a redirect and keep existing parameters
var redirectUrl = 'YOUR URL';
var sourceParam = '?&Source=' + encodeURIComponent(redirectUrl);
window.history.pushState(null, null, (window.location.href + sourceParam));

