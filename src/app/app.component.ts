import { Component } from '@angular/core';
import { ItemService } from './services/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'GiorgioImmobiliare';

  impulses : any[] = [];
  impulse !: Boolean ;

  constructor(public itemService : ItemService) {
    itemService.fetchItems();
  }  

  onImpulse(impulse : any){
    this.impulses.push(impulse);
    console.log(this.impulses);
  }

  userCheck(){
    return true //chiama il servizio di login userService
  }

}
