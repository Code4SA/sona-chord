if (document.location.hostname == "localhost") {
    var baseurl = "";
} else {
    var baseurl = "https://static.code4sa.org/sona-chord/";
}

document.write('<script type="text/javascript" src="' + baseurl + 'pym.js"></script>')
document.write(" <script>var pymParent = new pym.Parent('slopeEmbed', '" + baseurl + "index.html', {});</script>")
