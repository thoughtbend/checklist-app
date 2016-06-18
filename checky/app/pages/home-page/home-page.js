var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ionic_angular_1 = require('ionic-angular');
var checklists_page_1 = require('../checklists-page/checklists-page');
var HomePage = (function () {
    function HomePage(_navController, _http) {
        this._navController = _navController;
        this._http = _http;
        this._checklistServiceRoot = 'http://checklistapi-public.thoughtbend.com/api/checklist';
    }
    /*goToFactsPage(){
     this._navController.push(ScientificFactsPage);
     }*/
    HomePage.prototype.gotoLists = function () {
        var _this = this;
        var loading = ionic_angular_1.Loading.create({
            content: 'Please wait...'
        });
        this._navController.present(loading);
        this._http.get(this._checklistServiceRoot)
            .toPromise()
            .then(function (response) {
            var params = {
                checklistResponse: response
            };
            loading.dismiss();
            _this._navController.push(checklists_page_1.ChecklistsPage, params);
        })
            .catch(function (error) {
            debugger;
            console.log(error);
            return Promise.reject(error);
        });
    };
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home-page/home-page.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, http_1.Http])
    ], HomePage);
    return HomePage;
})();
exports.HomePage = HomePage;
