function abreJanela() {

    url = document.getElementById("url").value;
    combo = document.getElementById("combo").selectedIndex;

    var gitlabLink = ('https://gitlab.com/secullum/sec-issues/-/issues/?sort=closed_at_desc&state=opened&search='+ url + '&first_page_size=100');
    var caseLink = ('http://bugtracker.secullum.com.br/edit_bug.aspx?id=' + url);
    var pfLink = ('https://www.secullum.com.br/pt/canal-cliente/perguntas/' + url);

    if (combo == 0) {
        window.open(gitlabLink);
    }
    if (combo == 1) {
        window.open(caseLink);
    }
    if (combo == 2) {
        window.open(pfLink);
    }
}


