import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

import { IAnimal } from './animal';

@Injectable()
export class AnimalService {
    private _animalUrl = 'http://localhost:3100/get';

    constructor(private _http: HttpClient) {}

    getAnimals(): Observable<IAnimal[]> {
        return this._http.get<IAnimal[]>(this._animalUrl)
            .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}