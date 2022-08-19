import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { HomeComponent } from './components/home/home.component';
import { AppartmentsComponent } from './items/appartments/appartments.component'
import { VillasComponent } from './items/villas/villas.component';

const routes: Routes = [
  { path:   '',               redirectTo: 'home', pathMatch: 'full' },
  { path:   'home',           component:  HomeComponent},
  { path:   'appartamenti',   component:  AppartmentsComponent},
  { path:   'ville',          component:  VillasComponent},
  { path:   'contatti',       component:  ContactsComponent},
  { path:   'admin',          component:  AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
