let billettene = [];

function kjopBilett(){
    let valgtFilm = document.getElementById("filmer").value;
    let valgteBilletter = document.getElementById("antallBillett").value;
    let valgtFornavn = document.getElementById("velgFornavn").value;
    let valgtEtternavn = document.getElementById("velgEtternavn").value;
    let valgtTelefonnr = document.getElementById("velgTlfNr").value;
    let valgtEpost = document.getElementById("velgEpost").value;

        const kinobillett1 = {
            film : valgtFilm,
            antall : valgteBilletter,
            fornavn : valgtFornavn,
            etternavn : valgtEtternavn,
            telefonummer : valgtTelefonnr,
            epost : valgtEpost

        };

        if(kinobillett1.antall === ""){
            document.getElementById("feilAntall").innerHTML = "Må skrive inn inn i antall";
        }
        else{
            document.getElementById("feilAntall").innerHTML = "";
        }
}