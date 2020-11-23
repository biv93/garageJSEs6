/**
 * Creo il modello di dati
 */
class Macchina{

    constructor(marca,modello,colore){
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
}
/**
 * Interfaccia
 */
class UI{
    //Metodo Add
    addCarToList(car){
        //creo la funzione per generare <li>
        this.createListCar = function(testo){
            let li = document.createElement('li');
            li.textContent = testo;
            return li;
        }
        //creo un array e inserisco il valore del mio oggetto macchina
        const items =[
            this.createListCar(car.marca),
            this.createListCar(car.modello),
            this.createListCar(car.colore)
        ];
        //creo funzione per agganciare ad HTML
        this.appendChildren = function(parent, children){
            if(Array.isArray(children)){ // verifico se è un array
                children.map((child)=>{
                    parent.appendChild(child); // appendo!
                })
            }else{
                parent.appendChild(children);
            }
        }
        // seleziono l'elemento in cui inserirò il tutto in HTML
        const list = document.querySelector('.car-lista');
        let riga = document.createElement('ul'); // <ul></ul>
        riga.className= "rigaMacchina";// <ul class="rigaMacchina"></ul>
        this.appendChildren(riga,items); // appendo <li> in <ul>
        this.appendChildren(list,riga);// appendo <ul> in <div class=".car-list">
    }
    // svuoto le input quando premo invio
    clearListCar(){
        document.getElementById('marca').value ="";
        document.getElementById('modello').value ="";
        document.getElementById('colore').value ="";
    }
}

const  addEvento = e => {
        const marca = document.getElementById('marca').value;
        const modello = document.getElementById('modello').value;
        const colore = document.getElementById('colore').value;
    
        //istanzio il mio oggetto macchina
        let car = new Macchina(marca,modello,colore);
        //istanzio la mia ui oggetto
        let ui = new UI();
        console.log(ui);
        //valido
        if(marca !== '' &&  modello !== '' && colore !== ''){
            ui.addCarToList(car);
            ui.clearListCar();
        }
        e.preventDefault();
}

//scateno l'evento
document.getElementById('form').addEventListener('submit',addEvento);