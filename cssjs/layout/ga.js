
if (!navigator.doNotTrack) {
  (function(){
    var _gaq = window._gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-24509354-1']);
    _gaq.push(['_setDomainName', '.scriptish.org']);
    _gaq.push(['_trackPageview']);

    var newScript = document.createElement("script");
    newScript.setAttribute("src", "http://www.google-analytics.com/ga.js");
    newScript.setAttribute("type", "text/javascript");
    newScript.setAttribute("async", "async");
    document.body.appendChild(newScript);
  })();
}
