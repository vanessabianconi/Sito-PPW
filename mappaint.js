/*elemento con stesso id*/
function gestoreClickArea () {
    try{
        for(i=0; i<italia.length; i++){
            if (italia[i].id == this.getAttribute("id")){
    
            var nodoNome = document.createTextNode(italia[i].titolo);
            nodoTitolo.replaceChild(nodoNome, nodoTitolo.firstChild);

            var nodoTesto = document.createTextNode(italia[i].descrizione);
            nodoDescrizione.replaceChild(nodoTesto, nodoDescrizione.firstChild);
            
            var nodoImmagine = document.createElement("img");
            nodoImmagine.setAttribute("src", italia[i].src);
            nodoRisultato.replaceChild(nodoImmagine, nodoRisultato.lastChild);
             
            }
        }
    }catch (e) {
        alert("gestoreClickArea" + e);
        }
}

/*resize mappa*/
/**/function gestoreResize() {
/**/    try {
/**/        var attualeDimensioneFoto = nodoMappa.width;
/**/        var ratio = attualeDimensioneFoto / dimensioneFoto;
/**/        for (var i = 0; i < nodiArea.length; i++) {
/**/        
/**/        for (var j = 0; j < coordinateAree[i].length; j++)
/**/            {
/**/                coordinateAree[i][j] *= ratio;
/**/            }
/**/            nodiArea[i].coords = coordinateAree[i].join(',');
/**/        }
/**/        dimensioneFoto = attualeDimensioneFoto;
/**/    }
/**/    catch (e)
/**/    {
/**/        alert("gestoreResize " + e);
/**/    }
/**/}

/*cursore*/
/**/function gestoreCursore () {
/**/   try {
/**/    this.style.cursor = "pointer";
/**/    } catch (e) {
/**/        alert("gestoreCursore" + e);
/**/    }
/**/} 

/**/const LARGHEZZZA_FOTO = 400;
var nodoMappa;
var nodoRisultato;
var nodoTitolo;
var nodoDescrizione;
/**/var nodiArea;
/**/var coordinateAree;
/**/var dimensioneFoto;


/*gestoreLoad*/
function gestoreLoad() {
    try {
        /**/nodiArea = document.getElementsByTagName("area");
        nodoMappa = document.getElementById("mappa");
        nodoRisultato = document.getElementById("risultato1");
        nodoTitolo = document.getElementById("titolo");
        nodoDescrizione = document.getElementById("descrizione1");
    

        /**/coordinateAree = [];
        /**/for (var i = 0; i < nodiArea.length; i++) {
            /**/var nodoArea = nodiArea[i];
            /**/nodoArea.onclick = gestoreClickArea;
            /**/nodoArea.onmouseover = gestoreCursore;
            /**/coordinateAree[i] = nodoArea.coords.split(',');
        /**/}
        /**/dimensioneFoto = LARGHEZZZA_FOTO;
        /**/window.onresize = gestoreResize;
        /**/gestoreResize();
    }
    catch (e)
    {
        alert("gestoreLoad " + e);
    }
}
window.onload = gestoreLoad;

/*Array*/
var italia = [
    {
     id: 'aosta',
     src: "tegole.jpg",
     titolo: "Val d'Aosta: le tegole",
     descrizione: " Biscotto tipico e sfizioso creato da alcuni pasticceri valdostani nel 1930. Divenuto con il passare degli anni una referenza e un ottimo biglietto da visita per la Valle d'Aosta.",
    },
    {
     id: 'piemonte',
     src: "bonet.jpg",
     titolo: "Piemonte: Bonet",
     descrizione: "Il bonet è un budino tipico del Piemonte, di origini antiche, a base di amaretti secchi, uova, zucchero, cacao e liquore. Noto più precisamente come bonet delle Langhe, per la zona di provenienza, significa in dialetto berretto o cappello di forma rotonda.",
    },
    {
     id: 'lombardia',
     src: "panettone.jpg",
     titolo: "Lombardia: Panettone",
     descrizione: " Il panettone è un dolce di pasta lievitata protagonista delle feste natalizie. È anche il più elaborato e il più famoso fra tutti i prodotti lievitati in Italia e nella Svizzera italiana. Dolce lievitato a pasta morbida. Forma: base cilindrica che termina a cupola. Dimensioni : variano a seconda del formato. Colore: la crosta è marrone, la mollica è di colore giallo tenue. Peso: varia tra i 100 g e i 5 kg. La dimensione standart è quella da 1 kg. ",
    },
    {
     id: 'trentino',
     src: "strudel.jpg",
     titolo: "Trentino: Strudel",
     descrizione: "Lo strudel di mele è un dolce dolce tipico del Trentino – Alto Adige. Una sfoglia che contiene un ripieno di mele, pinoli, uvetta aromatizzato alla cannella. Insieme alla torta di mele, lo strudel rappresenta il dolce per antonomasia con questo frutto.",
    },
    {
     id: 'veneto',
     src: "pandoro.jpg",
     titolo: "Veneto: Pandoro",
     descrizione: "Il pandoro è il tipico dolce veronese della festività natalizie, conosciuto in tutto il mondo. Creato a fine ottocento, deriva dal pan de oro che veniva servito sulle tavole dei ricchi veneziani e dal nadalin, un dolce che sin dal medioevo i veronesi consumavano durante il periodo di Natale.",
    },
    {
     id: 'friuli',
     src: "Gubana.jpg",
     titolo: "Friuli Venezia Giulia: Gubana",
     descrizione: "La gubana è un tipico dolce delle valli del Natisone (Udine), che si prepara in periodi di grande festa (Natale, Pasqua) o in occasioni particolari (come matrimoni e sagre paesane), a base di pasta dolce lievitata, con un ripieno di noci, uvetta, pinoli, zucchero, grappa, scorza grattugiata di limone, dalla forma a chiocciola, del diametro di circa 20 cm, cotto al forno. ",
    },
    {
     id: 'liguria',
     src: "pandolce.jpg",
     titolo: "Liguria: Pandolce genovese",
     descrizione: "Il pandolce genovese o semplicemente pandolce spesso detto anche panettone genovese, è un prodotto tipico soprattutto del Genovesato, ma anche del resto della Liguria. È un dolce comune durante le festività natalizie: di forma circolare, ne esistono due versioni alto e basso. Storicamente la prima versione è stata la alta, lievitata naturalmente e con tempi di preparazione molto lunghi, mentre solo alla fine del 1800, con l'introduzione di lieviti chimici, è nata la versione bassa, molto più veloce da preparare. ",
    },
    { 
     id: 'romagna',
     src: "zuppa.jpg",
     titolo: "Emilia-Romagna: Zuppa Inglese",
     descrizione: "La zuppa inglese è un dolce al cucchiaio molto apprezzato e conosciuto, si compone di strati di pan di Spagna (o savoiardi) bagnati con alchermes e addolciti da morbida crema pasticcera e crema al cioccolato. La zuppa inglese è un dolce perfetto da portare in tavola durante le festività natalizie una ricetta semplice e veloce conosciuta già nel 1500 quando a Ferrara fu creato per la prima volta dai pasticcieri della corte dei duchi d'Este.",
    },
    {
     id: 'toscana',
     src: "castagnaccio.jpg",
     titolo: "Toscana: Castagnaccio",
     descrizione: "Il castagnaccio è una torta di farina di castagne tipica delle zone dell'Appennino centrale. E' un  piatto tipicamente autunnale che si ottiene facendo cuocere nel forno un impasto di farina di castagne, acqua, olio extravergine di oliva, pinoli e uvetta.",
    },
    {
     id: 'marche',
     src: "bostrengo.jpg",
     titolo: "Marche: Bostrengo",
     descrizione: "Solitamente viene preparato nel periodo natalizio e per la sua elevata quantità di ingredienti viene chiamato il pulisci credenza. Questo dolce vieni chiamato burlengo nella provincia di Pesaro-Urbino, mentre fustingo nel sud delle Marche.Gli ingredienti sono: 400 g di farina di grano e 200 g di granoturco, pane raffermo, 100 g di riso cotto, 100 g di uva passa, 200 g di fichi secchi, 100 g di noci, buccia di arancia, 1 mela, 100 g di zucchero e 1 bicchiere di latte.",
    },
    {
     id: 'umbria',
     src: "pinoccate.jpg",
     titolo: "Umbria: Pinoccate",
     descrizione: "Si tratta di un impasto a base di zucchero fuso e pinoli, che viene fatto raffreddare in tipiche forme romboidali della dimensione di un biscotto. Possono essere sia bianche (solo zucchero) sia marroni (con cacao). Vengono consumate nel periodo natalizio.",
    },
    {
     id: 'lazio',
     src: "maritozzi.jpg",
     titolo: "Lazio: Maritozzo",
     descrizione: "Il maritozzo è un dolce tipico del Lazio. Consiste in una piccola pagnotta impastata con farina, uova, miele, burro e sale che, tagliata in due longitudinalmente, è solitamente farcita con abbondante panna montata. La ricetta avrebbe origini che risalgono sino all'antica Roma. Tradizionalmente, il maritozzo veniva arricchito anche con pinoli, uva e scorzetta d'arancia candita.",
    },
    {
     id: 'abruzzo',
     src: "bocconotti.jpg",
     titolo: "Abruzzo: Bocconotti",
     descrizione: "I Bocconotti sono dei dolci tipici della tradizione abruzzese realizzati con un guscio di pasta frolla all'olio ricoperto di zucchero a velo e un dolce ripieno di cioccolato fondente e mandorle. Sono originari della città di Castel Frentano in provincia di Chieti.",
    },
    {
     id: 'molise',
     src: "mandorle.jpg",
     titolo: "Molise: Torta di mandorle",
     descrizione: "La torta di mandorle molisana è un dolce molto semplice da preparare e può essere servita per merenda, come fine pasto o per la colazione; come tutte le ricette tipiche ne esistono tantissime versioni. Essendo privo di farina questo dolce è perfetto anche per chi è intollerante al glutine.",
    },
    {
     id: 'campania',
     src: "pastiera.jpg",
     titolo: "Campania: Pastiera",
     descrizione: "La Pastiera napoletana è un dolce della tradizione partenopea, tipico del periodo pasquale, a base di pasta frolla, grano, ricotta, uova e dal profumo intenso di fiori d'arancio.",
    },
    {
     id: 'puglia',
     src: "pasticciotto.jpg",
     titolo: "Puglia: Pasticciotto",
     descrizione: "Il pasticciotto è un dolce tipico della zona del Salento in Puglia, composto da pasta frolla farcita di crema pasticcera e cotto in forno.",
    },
    {
     id: 'basilicata',
     src: "ricotta.jpg",
     titolo: "Basilicata: Torta di ricotta",
     descrizione: "La torta di ricotta è uno tra i gustosi dolci tipici, poveri, della Basilicata, un dolce che da sempre, imbandisce le tavole lucane. E’ un dolce fatto da pochissimi ingredienti, con una ricotta vaccina freschissima che la fa da padrona. E’ tipica delle zone di montagna ed è fatta di materie prime che in passato erano facilissime da reperire. In tempi antichi veniva utilizzata come dono per i riti pagani per ciò che rappresentavano i suoi ingredienti: la farina rappresentava la ricchezza, la ricotta il lavoro e le uova erano simbolo di nuova vita.",
    },
    {
     id: 'calabria',
     src: "pitta.jpg",
     titolo: "Calabria: La pitta 'mpigliata",
     descrizione: "Originaria di San Giovanni in Fiore, la pitta ‘mpigliata, conosciuta anche come pitta ‘nchiusa è simbolo di festa, infatti viene preparata sia in occasione del Natale, sia durante le feste pasquali. Gli ingredienti principali sono la sfoglia di grano duro, l’uva passa, le mandorle, le noci, la cannella ed il Vermut.",
    },
    {
     id: 'sicilia',
     src: "cassata.jpg",
     titolo: "Sicilia: Cassata siciliana",
     descrizione: "E’ indubbiamente il dolce siciliano più famoso al mondo, considerato da tutti la regina della pasticceria! Elegante, riccamente addobbato, sfarzoso, dai sapori intensi, per i veri estimatori dei dolci. Così bella da essere considerata anche la torta delle feste più importanti (Pasqua e Natale su tutti).",
    },
    {
     id: 'sardegna',
     src: "sebadas.jpg",
     titolo: "Sardegna: Sebadas",
     descrizione: "Di origine barbaricina, le Sebadas o Seadas, sono ormai un piatto tradizionale di tutta l’Isola. E’ un dolce da friggere e servire con l’aggiunta di miele. Simili ad un grande raviolo, le Sebadas sono formate da due dischi di pasta fatta con la semola fine, strutto e acqua, ed un ripieno di formaggio acidulo aromatizzato con scorza di arancia o limone. Il gusto caratteristico è dato dal contrasto del dolce del miele (miele di corbezzolo) e l’acidulo del formaggio al suo interno.",
    }

];
























