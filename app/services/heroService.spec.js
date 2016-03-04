System.register(['./heroService', 'angular2/testing', 'angular2/http', 'angular2/http/testing', 'angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var heroService_1, testing_1, http_1, testing_2, core_1;
    return {
        setters:[
            function (heroService_1_1) {
                heroService_1 = heroService_1_1;
            },
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (testing_2_1) {
                testing_2 = testing_2_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            testing_1.describe('HeroService', function () {
                var service;
                var mockbackend;
                testing_1.beforeEachProviders(function () { return [heroService_1.HeroService,
                    testing_2.MockBackend,
                    http_1.BaseRequestOptions,
                    core_1.provide(http_1.Http, {
                        useFactory: function (backend, options) { return new http_1.Http(backend, options); },
                        deps: [testing_2.MockBackend, http_1.BaseRequestOptions]
                    })
                ]; });
                testing_1.beforeEach(testing_1.inject([heroService_1.HeroService, testing_2.MockBackend], function (s, m) { service = s; mockbackend = m; }));
                testing_1.it('getHeroes() - 1', testing_1.inject([heroService_1.HeroService], function (testService) {
                    testing_1.expect(testService.getHeroesSync().length).toEqual(10);
                }));
                testing_1.it('getHeroes() - 2', function () {
                    testing_1.expect(service.getHeroesSync().length).toEqual(10);
                });
                testing_1.it('getHeroesSlowly() - async results', testing_1.injectAsync([], function () {
                    return service.getHeroesSlowly().then(function (data) {
                        testing_1.expect(data.length).toEqual(10);
                    });
                }));
                testing_1.it('getSomeData()', function () {
                    var response = ["ru", "es"];
                    mockbackend.connections.subscribe(function (connection) {
                        connection.mockRespond(new http_1.Response({ body: JSON.stringify(response) }));
                    });
                    service.getSomeData().subscribe(function (x) {
                        testing_1.expect(x.length).toEqual(2);
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=heroService.spec.js.map