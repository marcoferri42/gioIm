import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss']
})
export class DeleteComponent {

  constructor(public itemService : ItemService) { }

  delete(){
    this.itemService.deleteItem(this.itemService.getSelectedItem());
  }

}
