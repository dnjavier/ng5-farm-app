import { Component } from '@angular/core';
import { AnimalService } from './farmer/animals/animal.service';

@Component({
  selector: 'fa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageTitle: string = 'Farm App';
}
