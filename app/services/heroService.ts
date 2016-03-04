import {Hero} from '../hero';
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export var HEROES: Hero[] = [
    {"id": 11, "name": "Mr. Nice"},
    {"id": 12, "name": "Narco"},
    {"id": 13, "name": "Bombasto"},
    {"id": 14, "name": "Celeritas"},
    {"id": 15, "name": "Magneta"},
    {"id": 16, "name": "RubberMan"},
    {"id": 17, "name": "Dynama"},
    {"id": 18, "name": "Dr IQ"},
    {"id": 19, "name": "Magma"},
    {"id": 20, "name": "Tornado"}
];

@Injectable()
export class HeroService {
    constructor(private http: Http) {
     
    }
    
    getSomeData(): Observable<any> {
            return this.http.get('data.json')
                .map(res =>  res.json() );
    }
    
    getHeroes() {
        return  Promise.resolve(HEROES);
    }
    
    getHeroesSync() {
        return  HEROES;
    }
    
    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
        setTimeout(()=>resolve(HEROES), 2000) // 2 seconds
        );
    }
}