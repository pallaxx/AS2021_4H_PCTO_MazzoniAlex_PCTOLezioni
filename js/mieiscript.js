// Per caricare il motore jQuery utilizzo l'alias '$'
// Suggerimento: nonostante sia più verboso è consigliabile utilizzare sempre
// la dicitura jQuery in quanto nella pagina all'interno della quale si stia integrando
// la libreria jQuery potrebbero essere presenti altre librerie che facciano uso dell'alias '$'

// Questo evento jQuery è l'evento DOM Ready: si verifica quando è stato ocmpletamente
// scaricato dal browser l'albero dei nodi HTML
// In Javascript le funzioni si preparano mediante la parola chiave function, un nome(opzionale)
// un elenco di parametri racchiusi tra parentesi tonde e un corpo dellla funzione racchiuso
// tra parentesi graffe: quando la funzione verrà eseguita (o invocata se ha un nome), scatterà
// il codice contenuto nel corpo
jQuery(function () {
    // alert("DOM caricato!");
    jQuery('#primodiv').html('SONO INTERVENUTO');
    jQuery('.mieidiv').css('background-color', 'yellow');
    // Il selettore mi restituisce una collezione di nodi sottoforma di oggetti jQuery
    // sui quali posso successivamente chiamare i metodi.
  
    // Il metodo html() e il metodo css() servono rispetttivamente a:
    // html() -> recupera il conetnuto html dell'elemento
    // html(value) -> recupera il contenuto html dell'elemento con il valore del parametro
    // value passato in ingresso
    // css(property) -> recupera il valore della proprietà css specificata
    // css(property, value) -> recupera il valore della proprietà css specificata con
    // il valore del parametro value passato in ingresso
  
    var blocco = jQuery('<div><p>Esempio di elementi <strong> nidificati </strong></p></div>');
    blocco.addClass('nuovaClasse');
    blocco.appendTo('#secondodiv');
    // Con addClass() aggiungo agli elementi selezionati una classe
    // Con appendTo() innesto l'elemento selezionato in altri nodi
  
    jQuery(':disabled').removeAttr('disabled');
  
    // Handler di gestione dell'evento click su uno o più elementi
    // Ho predisposto all'interno dell'evento DOM reading un ascoltatore che rimane in
    // attesa del verificarsi di un evento click sull'elemento con id miopulsante
    jQuery('#miobottone').click(function () {
      jQuery(':checked').removeAttr('checked');
    });
  });