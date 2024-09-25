import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SubhanallahComponent } from './subhanallah/subhanallah.component';
import { AlhamdhulillahComponent } from './alhamdhulillah/alhamdhulillah.component';
import { AllahuakbarComponent } from './allahuakbar/allahuakbar.component';
import { OtherDikhrComponent } from './other-dikhr/other-dikhr.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'subahanallah', component: SubhanallahComponent},
  { path: 'alhamdhulillah', component: AlhamdhulillahComponent},
  { path: 'allahuakbar', component: AllahuakbarComponent},
  {path:'otherDikhr', component: OtherDikhrComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
