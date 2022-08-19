import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService{

  selectedItem: any;
  appartments : any[] = [];
  villas : any[] = [];
  other : any[] = [];

  constructor() { }
  
  fetchItems(){
    this.appartments = this.mock();

  // TODO: fare altri fetch
  //  this.villas = this.mock();
  //  this.other = this.mock();
  }

  getItems(type : any){
    switch (type){
      case 'appartments':
        return this.appartments;
      case 'villas':
        return this.villas;
      default:
        return this.other;
    }
  }

  selectItem(item : any){
    this.selectedItem = item;
  }

  getSelectedItem() {
    return this.selectedItem;
  }

  deleteItem(item : any) {
    const index = this.appartments.indexOf(item);
    if (index !== -1) {
      this.appartments.splice(index, 1);
    }
  }

  mock(){
    // TODO: cancellare mock 
    return [
      {name : "Antico Casale del 1600", price : "1.000.000$", location : "Cerveteri", img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flocandadelcavaliere.it%2Fwp-content%2Fuploads%2F2020%2F10%2Flocanda_cavaliere_0429-768x512.jpg&f=1&nofb=1", description : "Il Casale si trova a Cerveteri in provincia di Roma nel comprensorio residenziale nei pressi del centro storico e adiacente alla famosa necropoli. La proprietà è sita in un’area abitata residenziale non isolata, è completamente recintata ed ha 4 ingressi carrabili indipendenti. Cerveteri, famosa per la Necropoli Etrusca è Patrimonio Unesco dal 2004, si trova a Nord Ovest di Roma a circa 35 km dalla capitale, 30 km dal porto di Civitavecchia e 35 km dall'aeroporto intercontinentale Leonardo da Vinci di Fiumicino. Ottimamente collegata a Roma dalla Via Aurelia, dall'autostrada e dalla ferrovia che in soli 35 minuti giunge alla stazione S. Pietro ed in 50 minuti alla stazione Centrale Roma Termini. Il mare più vicino è Campo di Mare o Ladispoli in linea d'aria a circa 4 km e raggiungibile in macchina con 10 minuti ma si possono raggiungere velocemente anche S. Severa a 12 km e Santa Marinella a 15 km."},
      {name : "Casetta", price : "3.000.000$", location : "Cerveteri", img : "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fww1.prweb.com%2Fprfiles%2F2015%2F03%2F02%2F12556168%2FGeneva_Q1_Facade.jpg&f=1&nofb=1", description : "The Du Tour Residence is a project led by Architecture Open Form who renovated it for a family who had owned the 1960s home for decades. Located in Laval, a city just north of Montréal, the house needed a more modern interior but it was important to the family to keep the heart and soul of the original design. The architects collaborated with interior design firm FX Studio par Clairoux to come up with a concept that highlighted the horizontal nature of the prairie-style architecture."},
      {name : "Antico Casale del 1600", price : "1.000.000$", location : "Cerveteri", img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flocandadelcavaliere.it%2Fwp-content%2Fuploads%2F2020%2F10%2Flocanda_cavaliere_0429-768x512.jpg&f=1&nofb=1", description : "Il Casale si trova a Cerveteri in provincia di Roma nel comprensorio residenziale nei pressi del centro storico e adiacente alla famosa necropoli. La proprietà è sita in un’area abitata residenziale non isolata, è completamente recintata ed ha 4 ingressi carrabili indipendenti. Cerveteri, famosa per la Necropoli Etrusca è Patrimonio Unesco dal 2004, si trova a Nord Ovest di Roma a circa 35 km dalla capitale, 30 km dal porto di Civitavecchia e 35 km dall'aeroporto intercontinentale Leonardo da Vinci di Fiumicino. Ottimamente collegata a Roma dalla Via Aurelia, dall'autostrada e dalla ferrovia che in soli 35 minuti giunge alla stazione S. Pietro ed in 50 minuti alla stazione Centrale Roma Termini. Il mare più vicino è Campo di Mare o Ladispoli in linea d'aria a circa 4 km e raggiungibile in macchina con 10 minuti ma si possono raggiungere velocemente anche S. Severa a 12 km e Santa Marinella a 15 km."},
      {name : "Casetta", price : "3.000.000$", location : "Cerveteri", img : "https://design-milk.com/images/2016/02/Du-Tour-Residence-Architecture-Open-Form-8.jpg", description : "The Du Tour Residence is a project led by Architecture Open Form who renovated it for a family who had owned the 1960s home for decades. Located in Laval, a city just north of Montréal, the house needed a more modern interior but it was important to the family to keep the heart and soul of the original design. The architects collaborated with interior design firm FX Studio par Clairoux to come up with a concept that highlighted the horizontal nature of the prairie-style architecture."},
      {name : "Antico Casale del 1600", price : "1.000.000$", location : "Cerveteri", img : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flocandadelcavaliere.it%2Fwp-content%2Fuploads%2F2020%2F10%2Flocanda_cavaliere_0429-768x512.jpg&f=1&nofb=1", description : "Il Casale si trova a Cerveteri in provincia di Roma nel comprensorio residenziale nei pressi del centro storico e adiacente alla famosa necropoli. La proprietà è sita in un’area abitata residenziale non isolata, è completamente recintata ed ha 4 ingressi carrabili indipendenti. Cerveteri, famosa per la Necropoli Etrusca è Patrimonio Unesco dal 2004, si trova a Nord Ovest di Roma a circa 35 km dalla capitale, 30 km dal porto di Civitavecchia e 35 km dall'aeroporto intercontinentale Leonardo da Vinci di Fiumicino. Ottimamente collegata a Roma dalla Via Aurelia, dall'autostrada e dalla ferrovia che in soli 35 minuti giunge alla stazione S. Pietro ed in 50 minuti alla stazione Centrale Roma Termini. Il mare più vicino è Campo di Mare o Ladispoli in linea d'aria a circa 4 km e raggiungibile in macchina con 10 minuti ma si possono raggiungere velocemente anche S. Severa a 12 km e Santa Marinella a 15 km."},
      {name : "Casetta", price : "3.000.000$", location : "Cerveteri", img : "https://design-milk.com/images/2016/02/Du-Tour-Residence-Architecture-Open-Form-8.jpg", description : "The Du Tour Residence is a project led by Architecture Open Form who renovated it for a family who had owned the 1960s home for decades. Located in Laval, a city just north of Montréal, the house needed a more modern interior but it was important to the family to keep the heart and soul of the original design. The architects collaborated with interior design firm FX Studio par Clairoux to come up with a concept that highlighted the horizontal nature of the prairie-style architecture."}
    ]
  }
}
