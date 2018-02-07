import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertoToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarComponent,
    ConvertoToSpacesPipe,
  ],
  exports: [
    StarComponent,
    CommonModule,
    FormsModule,
    ConvertoToSpacesPipe,
  ]
})
export class SharedModule { }
