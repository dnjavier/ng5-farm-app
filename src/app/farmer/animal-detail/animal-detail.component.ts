import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IAnimal } from '../animals/animal';

@Component({
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.scss']
})
export class AnimalDetailComponent implements OnInit {
  pageTitle: string = 'Animal Detail';
  animal: IAnimal;

  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  onBack(): void {
    this._router.navigate(['/animals']);
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.animal = {
      "animalId": 1,
      "animalName": "Garden Cart",
      "animalCode": "GDN-0023",
      "releaseDate": "March 18, 2016",
      "description": "15 gallon capacity",
      "price": 32.99,
      "starRating": 4.2,
      "imageUrl": "data:image/webp;base64,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"
  }
  }

}
