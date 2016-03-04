import {Component} from 'angular2/core';
import {HeroService} from './services/heroService';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Hero} from './hero';

@Component({
    selector: 'my-app',
    template: `<h1>My First Angular 2 App</h1>
    <div> <ul><li *ngFor="#hero of heroes">
        <span >{{hero.id}}</span> {{hero.name}}
        </li></ul></div>`,
    providers: [HeroService, HTTP_PROVIDERS]
})
export class AppComponent {
    heroes: Hero[];
    constructor(private heroService: HeroService){
        console.log(heroService);
    }
    
    
    ngOnInit(){
        this.heroService.getHeroes()
                .then(data=>this.heroes = data);;
    }
 }