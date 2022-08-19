import { DialogRef } from '@angular/cdk/dialog';
import { Component, NgZone } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {

  dialogRef !: DialogRef;
  selectedItem : any;
  constructor(private ngZone: NgZone, public itemService : ItemService) {
    this.selectedItem = this.itemService.getSelectedItem();
  }

  onNoClick(): void {
    this.ngZone.run(() => {
      this.dialogRef.close();
    });
  }

  onSubmit(){
    // TODO: SUBMIT IN DATABASE E RELOAD
    console.log(this.selectedItem);
  }
}
