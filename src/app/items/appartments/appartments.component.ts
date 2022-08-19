import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { MatDialog } from '@angular/material/dialog';
import { EditorComponent } from 'src/app/components/editor/editor.component';
import { DeleteComponent } from 'src/app/components/delete/delete.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-appartments',
  templateUrl: './appartments.component.html',
  styleUrls: ['./appartments.component.scss'],
})
export class AppartmentsComponent{

  page_name = "Appartamenti";
  items : any[] = [];

  constructor(public itemService : ItemService, public loginService : LoginService, public dialog : MatDialog) {
    this.items = this.itemService.getItems('appartments');
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditorComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  edit(item : any){
    this.itemService.selectItem(item);
  }

  delete(item : any){
    this.itemService.selectItem(item);
    this.dialog.open(DeleteComponent, { width: '250px'});
  }

  checkUser(){
    return this.loginService.checkUser();
  }
}