import {HeroService, MockHeroService} from './heroService';
import {beforeEach, beforeEachProviders, describe, expect, it, inject, injectAsync} from 'angular2/testing';
import {Headers, Http, HTTP_PROVIDERS, BaseRequestOptions, XHRBackend, Response} from 'angular2/http';
import {MockBackend} from 'angular2/http/testing';
import {provide} from 'angular2/core';

describe('HeroService', () => {
    let service: HeroService;
    let mockbackend;
    
    beforeEachProviders(() => [provide(HeroService, {useClass: MockHeroService}),
                                MockBackend,
                                BaseRequestOptions,
                                provide(Http, {
                                                useFactory: (backend, options) => new Http(backend, options), 
                                                deps: [MockBackend, BaseRequestOptions]
                                              }
                                       )
                              ]
                       );
                       
    beforeEach(
        inject([HeroService, MockBackend], 
        (s,m) => { service = s; mockbackend = m; }
        ));

    it('getHeroes synch should return 10', inject([HeroService], (testService: HeroService) => {
        expect(testService.getHeroesSync().length).toEqual(10);
    }));

    it('getHeroes() - 2', () => {
        expect(service.getHeroesSync().length).toEqual(10);
    });

    it('getHeroesSlowly - async results', injectAsync([], () => {
        return service.getHeroesSlowly().then((data) => {
            expect(data.length).toEqual(10)
        });
    }));

    it('getSomeData mockbackend', () => {
        let response = ["ru", "es"];
    mockbackend.connections.subscribe(connection => {
      connection.mockRespond(new Response({body: JSON.stringify(response)}));
    });
       service.getSomeData().subscribe(x=>{
           expect(x.length).toEqual(10);
                  
       });
    });
});
