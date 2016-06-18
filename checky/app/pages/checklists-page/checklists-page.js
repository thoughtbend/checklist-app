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
var ionic_angular_1 = require('ionic-angular');
var ionic_angular_2 = require('ionic-angular');
var ionic_angular_3 = require('ionic-angular');
var checklist_form_page_1 = require('../checklist-form-page/checklist-form-page');
var ChecklistsPage = (function () {
    function ChecklistsPage(_navController, _navParams) {
        this._navController = _navController;
        this._navParams = _navParams;
        this.checklists = [];
        /* this.checklists.push({
             id: "MN-1234-temp",
             name: "Mike's Code Review Checklist"
         });*/
    }
    ChecklistsPage.prototype.ionViewWillEnter = function () {
        this.checklists = [];
        var checklistLoadResponse = this._navParams.get("checklistResponse");
        var checklistData = JSON.parse(checklistLoadResponse._body);
        for (var _i = 0; _i < checklistData.length; _i++) {
            var checklist = checklistData[_i];
            this.checklists.push(checklist);
        }
    };
    ChecklistsPage.prototype.checklistClicked = function (checklist) {
        var alert = ionic_angular_2.Alert.create({
            title: 'Clicked id - ' + checklist.id,
            subTitle: checklist.name,
            buttons: ['Dismiss']
        });
        this._navController.present(alert);
    };
    ChecklistsPage.prototype.navigateToCreateNewChecklistClick = function () {
        console.log("navigate to create a checklist");
        this._navController.push(checklist_form_page_1.ChecklistFormPage);
    };
    ChecklistsPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/checklists-page/checklists-page.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, ionic_angular_3.NavParams])
    ], ChecklistsPage);
    return ChecklistsPage;
})();
exports.ChecklistsPage = ChecklistsPage;
