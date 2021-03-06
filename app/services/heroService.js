System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/operator/map'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Observable_1;
    var HEROES, MockHeroService, HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {}],
        execute: function() {
            exports_1("HEROES", HEROES = [
                { "id": 11, "name": "Mr. Nice" },
                { "id": 12, "name": "Narco" },
                { "id": 13, "name": "Bombasto" },
                { "id": 14, "name": "Celeritas" },
                { "id": 15, "name": "Magneta" },
                { "id": 16, "name": "RubberMan" },
                { "id": 17, "name": "Dynama" },
                { "id": 18, "name": "Dr IQ" },
                { "id": 19, "name": "Magma" },
                { "id": 20, "name": "Tornado" }
            ]);
            MockHeroService = (function () {
                function MockHeroService() {
                }
                MockHeroService.prototype.getSomeData = function () {
                    return Observable_1.Observable.create(function (o) { o.next(HEROES); });
                };
                MockHeroService.prototype.getHeroes = function () {
                    return Promise.resolve(HEROES);
                };
                MockHeroService.prototype.getHeroesSync = function () {
                    return HEROES;
                };
                MockHeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(HEROES); }, 1000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                MockHeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], MockHeroService);
                return MockHeroService;
            }());
            exports_1("MockHeroService", MockHeroService);
            HeroService = (function () {
                function HeroService(http) {
                    this.http = http;
                }
                HeroService.prototype.getSomeData = function () {
                    return this.http.get('data.json')
                        .map(function (res) { return res.json(); });
                };
                HeroService.prototype.getHeroes = function () {
                    return Promise.resolve(HEROES);
                };
                HeroService.prototype.getHeroesSync = function () {
                    return HEROES;
                };
                HeroService.prototype.getHeroesSlowly = function () {
                    return new Promise(function (resolve) {
                        return setTimeout(function () { return resolve(HEROES); }, 2000);
                    } // 2 seconds
                     // 2 seconds
                    );
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            }());
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=heroService.js.map