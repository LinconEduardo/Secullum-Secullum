function abreJanela() {

    url = document.getElementById("url").value;
    combo = document.getElementById("combo").selectedIndex;

    var octaLink = ('https://secullum.octadesk.com/home/ticket/edit/' + url + '/');
    var caseLink = ('http://bugtracker.secullum.com.br/edit_bug.aspx?id=' + url);
    var pfLink = ('https://www.secullum.com.br/pf?id=' + url);

    if (combo == 0) {
        window.open(caseLink);
    }
    if (combo == 1) {
        window.open(octaLink);
    }
    if (combo == 2) {
        window.open(pfLink);
    }
}