import { NgModule } from '@angular/core';
import { AnimalListComponent } from './animals/animal-list.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { FarmerRoutingModule } from './farmer-routing.module';
import { AnimalService } from './animals/animal.service';
import { AnimalGuardService } from './animals/animal-guard.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    FarmerRoutingModule
  ],
  declarations: [
    AnimalListComponent,
    AnimalDetailComponent
  ],
  providers: [
    AnimalService,
    AnimalGuardService
  ]
})
export class FarmerModule { }
