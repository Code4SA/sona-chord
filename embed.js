if (window.innerWidth < 768) {
    var heatSwitch = "heatmap/";
} else {
    var heatSwitch = "";
}

var pathArray = window.location.pathname.split( '/' );
var newPathname = "";
for (i = 0; i < pathArray.length-1; i++) {
  newPathname += "/";
  newPathname += pathArray[i];
}
var baseurl = document.location.origin + "/" + newPathname + "/" ;

document.write('<script type="text/javascript" src="' + baseurl + 'pym.js"></script>')
document.write(" <script>var pymParent = new pym.Parent('tweetCircle', '" + baseurl + heatSwitch + "index.html', {});</script>")
