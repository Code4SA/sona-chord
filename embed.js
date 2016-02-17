if (window.innerWidth < 768) {
    var heatSwitch = "heatmap/";
} else {
    var heatSwitch = "";
}
if (document.location.hostname == "localhost") {
    var baseurl = document.location.origin + "/";
} else {
    var baseurl = "https://static.code4sa.org/sona-chord/";
}

document.write('<script type="text/javascript" src="' + baseurl + 'pym.js"></script>')
document.write(" <script>var pymParent = new pym.Parent('tweetCircle', '" + baseurl + heatSwitch + "index.html', {});</script>")
