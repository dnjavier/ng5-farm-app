import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalListComponent } from './animals/animal-list.component';
import { AnimalGuardService } from './animals/animal-guard.service';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';

const routes: Routes = [
  { path: 'animals', component: AnimalListComponent},
  { path: 'animals/:id', 
    canActivate:[ AnimalGuardService ], 
    component: AnimalDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FarmerRoutingModule { }
