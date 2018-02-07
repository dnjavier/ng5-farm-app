import { Component, OnInit } from '@angular/core';
import { IAnimal } from './animal';
import { AnimalService } from './animal.service';

@Component({
    templateUrl: './animal-list.component.html',
    styleUrls: ['./animal-list.component.scss']
})
export class AnimalListComponent implements OnInit {
    pageTitle: string = 'Animal List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;

    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string) {
        this._listFilter = value;
        this.filteredAnimals = this.listFilter ? this.performFilter(this.listFilter) : this.animals;
    }

    filteredAnimals: IAnimal[];
    animals: IAnimal[] = [];

    constructor(private _animalService: AnimalService) {

    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Animal List: ' + message;
    }

    performFilter(filterBy: string): IAnimal[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.animals.filter((animal: IAnimal) =>
            animal.animalName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._animalService.getAnimals()
            .subscribe(animals => {
                    this.animals = animals;
                    this.filteredAnimals = this.animals;
                },
                error => this.errorMessage = <any>error);
    }
}