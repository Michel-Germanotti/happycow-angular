import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { SearchmapComponent } from './pages/searchmap/searchmap.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'searchmap', component: SearchmapComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
