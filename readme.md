MILESTONE1
creazione 
    - div.container
    - div.slider 
    - div.prev, div.next (in absolute posti nel top e nel bottom del box)
    - items in cui inserire le immagini starticamente per inserire le proprietà in css per poi  togliere e inserirle successivamente con js.

MILESTONE2
- creazione array inserendo nomi img
- creare elemento per inserimento elemento (itemContent) in html vuoto
- creare elemnto che richiami il contenitore immagini div.slider  
- creare ciclo for che si interrompe a img.length
- richiamare la classe item e aggiungere la classe show creata precedentemente in css con classList.add('show').


MILESTONE3
- creare elemento const next e const prev per div.next e div.prev richiamandole con document.querySelector
- creare evento che al click di prev e next sarano predisposti a cambiare le immagini
- creare elemento items che richiami la classe .items tramite querySelectorAll('.item') per creare una collezzione di elementi, una lista accessibile per indici
- creare elemnto active = 0 perchè l'immagine di partenza che vogliamo visualizzare è quella in posizione 0 della lista items
- creare condizionale if che mi consenta di incrementare l'active di 1 fino alla lunghezza della lista items - 1 e di decrementare l'active fino alla posizione 1
l'active in posizione zero prenderà item corrispondente e ne rimuoverà la classe show successivamente l'active si incrementerà di uno con ++. Ora che è nella posizione successiva selezionerà l'item successivo a cui andremo ad aggiungere la classe show 