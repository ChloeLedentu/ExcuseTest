import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailExcuseComponent } from './public/detail-excuse/detail-excuse.component';
import { ShowExcuseComponent } from './public/show-excuse/show-excuse.component';


const routes: Routes = [
  {path: '', component: ShowExcuseComponent, pathMatch: 'full' },
  {path: 'lost', component: NotFoundComponent},
  {path: ':http_code', component: DetailExcuseComponent},
  {path: '**', redirectTo: '/lost'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
