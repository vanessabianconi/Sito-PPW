/*elemento con lo stesso id*/
function gestoreClickMese() {
    try {
         for(i=0; i<mese.length; i++) {
             if(mese[i].id == this.getAttribute("id")) {
             var nodoNome = document.createTextNode(mese[i].titolo);
             nodoTitolo.replaceChild(nodoNome, nodoTitolo.firstChild);

             var nodoTesto = document.createTextNode(mese[i].descrizione);
             nodoDescrizione.replaceChild(nodoTesto, nodoDescrizione.firstChild);

             var nodoVideo = document.createElement("iframe");
             nodoVideo.setAttribute("src", mese[i].link);
             nodoRisultato.replaceChild(nodoVideo, nodoRisultato.firstChild);
            }
       }
   } catch(e) {
       alert("gestoreClickMese" + e);
   }
}

/*cursore*/
/**/function gestoreCursore () {
/**/   try {
/**/    this.style.cursor = "pointer";
/**/    } catch (e) {
/**/        alert("gestoreCursore" + e);
/**/    }
/**/} 

var nodoRisultato;
var nodoTitolo;
var nodoDescrizione;

/*gestoreLoad*/
function gestoreLoad() {
    try {
        MESE = document.getElementsByClassName("torta");
        nodoRisultato = document.getElementById("risultato");
        nodoTitolo = document.getElementById("titolo");
        nodoDescrizione = document.getElementById("descrizione");
        for (var i = 0; i < MESE.length; i++) {
            MESE[i].onclick = gestoreClickMese;
            /**/MESE[i].onmouseover = gestoreCursore;
        }
    } catch (e) {
        alert("gestoreLoad" + e);
    }
}

window.onload = gestoreLoad;

/*Array*/
var mese = [
{
	id: "gennaio",
    link: "https://www.youtube.com/embed/vTW8diBjP54",
	titolo: "Gennaio: Torta tenerina",
	descrizione: "Tipica di Ferrara, la torta tenerina o torta taclenta, è un dolce al cioccolato dalla consistenza morbida e dall'interno fondente, che si scioglie in bocca a ogni assaggio. Una ricetta facile, che si prepara in appena 15 minuti e con pochi ingredienti: cioccolato fondente, burro, zucchero, uova e pochissima farina.",
},
{
	id: "febbraio",
    link: "https://www.youtube.com/embed/d9fL9ZIQpnc",
	titolo: "Febbraio: Torta della nonna",
	descrizione: "Una ricetta semplice e gustosa. La torta della nonna appartiene alla tradizione toscana ma viene ormai preparata ovunque in Italia. Pochi ingredienti per un risultato efficace: pasta frolla, crema pasticcera e pinoli. Una torta farcita per una merenda speciale!​",
},
{
	id: "marzo",
    link: "https://www.youtube.com/embed/9Tr3lKLyEyU",
	titolo: "Marzo: Torta morbida al cioccolato",
	descrizione : "La Torta al cioccolato fondente è un dolce classico della pasticceria italiana, semplice e golosissimo a base di pochi ingredienti reperibili in tutte le casa: uova, burro, zucchero, farina e tanto cioccolato fondente. Immaginate una torta al cioccolato morbida dentro, umida, dal cuore cremoso, che come consistenza assomiglia molto alla torta tenerina ma è più alta! Perfetta al naturale, con una spolverata di zucchero a velo, oppure farcita con panna, crema, frutti bosco, per realizzare una meravigliosa torta al cioccolato decorata!"
},
{
    id: "aprile",
    link: "https://www.youtube.com/embed/82kL-1TdSzc",
    titolo: "Aprile: Millefoglie",
    descrizione : "Tra le torte più gettonate per compleanni, lauree e tante altre occasioni, oltre a quelle più semplici, realizzate con pan di Spagna e crema, ce n'è sicuramente una sempre apprezzata da tutti: la millefoglie! Friabili strati di pasta sfoglia sovrapposti donano una croccantezza speciale e abbinati ad una vellutata crema alla vaniglia rendono felice il palato. Un dolce tradizionale e intramontabile, d'origine francese, conosciuto anche come Napoleon nel resto d'Europa. Ed è proprio grazie alla sua semplicità che accontenta il gusto di tutti, ma che si può personalizzare in base ad ogni occasione con frutti di bosco, fragole o gocce di cioccolato!",
},
{
    id: "maggio",
    link: "https://www.youtube.com/embed/ufsJUcHoVrI",
    titolo: "Maggio: Torta di mele",
    descrizione: "La torta di mele è un dolce classico della pasticceria casalinga; è preparato in tutto il mondo anche se con modalità differenti: torte di mele senza burro, senza uova, della nonna oppure light; morbide e un po' bagnate dentro, oppure con base di frolla. Può essere servita con panna montata o gelato.",
},
{
    id: "giugno",
    link: "https://www.youtube.com/embed/8H6iuOTQh-4",
    titolo: "Giugno: Crostata",
    descrizione : "La crostata è un dolce tipico italiano composto da una base di pasta frolla ricoperto con confettura, crema o frutta fresca, con l'aggiunta di sottili strisce di pasta frolla intrecciate. Dolci simili sono diffusi in tutta Europa. Le guarnizioni più diffuse per la crostata oltre alla confettura sono la crema pasticcera, la ricotta e la crema di cioccolato come la nutella. È un dolce tipicamente consumato durante la colazione all'italiana, preparato in casa. La crostata può essere cotta nei caratteristici stampi tondi zigrinati lateralmente o può assumere una forma quadrata o rettangolare quando viene preparata per il consumo nelle feste di compleanno o nei buffet. ",
},
{
    id: "luglio",
    link: "https://www.youtube.com/embed/qHhggFvdNFE",
    titolo: "Luglio: Torta al cocco",
    descrizione: "Riuscite ad immaginare un frutto più estivo del cocco? Molto apprezzato da grandi e bambini per il suo sapore dolce ed intenso è l’ingrediente ideale per una torta. Soffice, gustosa e molto profumata, la torta al cocco è un dolce non solo buono ma anche nutriente. L’importante è non esagerare con le porzioni dato l’elevato contenuto calorico di questo frutto esotico. La polpa bianca racchiusa all’interno della noce contiene infatti circa 350 calorie ogni 100 grammi. Inoltre, questo frutto, associa all’elevato contenuto di calorie tante proprietà nutritive importanti per la salute dell’organismo."
},
{
    id: "agosto",
    link: "https://www.youtube.com/embed/iMP_8-0p-y4",
    titolo: "Agosto: Torta gelato",
    descrizione: "La torta gelato è il dessert dell’estate per eccellenza, fresco e di grande effetto scenografico è l’ideale per portare in tavola un dolce elegante e gradevole nelle calde giornate estive. Il dolce è formato da una base friabile di biscotti sormontata da strati di morbido gelato al doppio gusto cioccolato e vaniglia che che si alternano a croccanti lastre di cioccolato fondente."
},
{
    id: "settembre",
    link: "https://www.youtube.com/embed/cOIEjrTTjLo",
    titolo: "Settembre: Torta alle nocciole",
    descrizione: "Il sapore burroso delle nocciole, che ricorda vagamente quello del cacao, ha la capacità di conquistare i nostri sensi. Queste delizie sono le indiscusse protagoniste di tantissime ricette, come i muffin alle nocciole o il sorbetto alle nocciole e della buonissima torta di nocciole. Questo dolce viene realizzato davvero in tante versioni: ne esiste una alta e soffice, una variante che presenta la farina di frumento e ,infine, c’è quella senza farina. Ma anche il modo di gustarla può cambiare, semplice o spolverizzata con dello zucchero a velo, per non parlare dei più golosi che amano accompagnarla con un buon bicerin o con dello zabaione. "
},
{
    id: "ottobre",
    link: "https://www.youtube.com/embed/Q7mpkDks604",
    titolo: "Ottobre: Torta alla zucca",
    descrizione: "La Torta alla Zucca è un dolce squisito e facile, tipico del periodo autunnale, preparato con la zucca cruda fresca frullata nell’impasto, l’ingrediente principe che rende la Torta di zucca soffice e buonissima! La consistenza è semplicemente deliziosa: spugnosa, umida e appunto super soffice; il gusto è intenso e deciso, la zucca si sente, anche se il sapore non è troppo invasivo, ma perfettamente equilibrato agli altri ingredienti, in particolare alla buccia d’arancia e alle mandorle tritate, che contribuiscono a rendere la torta di zucca super golosa e profumata."
},
{
    id: "novembre",
    link:"https://www.youtube.com/embed/5PTYjzpf01g",
    titolo: "Novembre: Torta Sacher",
    descrizione: "La torta Sacher, un dolce dal gusto austero ed elegante: caratteristiche che la accomunano alla sua città natale, Vienna. Mangiarne una fetta, richiama alla mente il tempo in cui una ristretta cerchia di potenti aristocratici decideva i destini di un impero. Difficile assaporarla e non sentire l’eco di un valzer o il passaggio di un’elegante carrozza. "
},
{
    id: "dicembre",
    link: "https://www.youtube.com/embed/YoS6QaPrst4",
    titolo: "Dicembre: Tronchetto di Natale",
    descrizione: "Il tronchetto di Natale o ciocco natalizio è un dolce natalizio a forma di tronco ricoperto solitamente di cioccolato o crema di caffè e glassa e riempito solitamente di marmellata, diffuso principalmente in Francia e negli altri Paesi francofoni e che ricorda la tradizione del ceppo di Natale"

},
]

