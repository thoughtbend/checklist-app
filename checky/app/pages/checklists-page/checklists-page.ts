import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Alert} from 'ionic-angular';
import {NavParams} from 'ionic-angular';

import {ChecklistFormPage} from '../checklist-form-page/checklist-form-page';


@Component({
    templateUrl: 'build/pages/checklists-page/checklists-page.html',
})
export class ChecklistsPage {

    private checklists = [];

    constructor(private _navController:NavController, private _navParams: NavParams) {
       /* this.checklists.push({
            id: "MN-1234-temp",
            name: "Mike's Code Review Checklist"
        });*/
    }

    ionViewWillEnter() {

        this.checklists = [];
        var checklistLoadResponse = this._navParams.get("checklistResponse");
        let checklistData = JSON.parse(checklistLoadResponse._body);

        for (let checklist of checklistData) {
            this.checklists.push(checklist);
        }
    }

    checklistClicked(checklist: any) {
        let alert = Alert.create({
            title: 'Clicked id - ' + checklist.id,
            subTitle: checklist.name,
            buttons: ['Dismiss']
        });
        this._navController.present(alert);
    }

    navigateToCreateNewChecklistClick() {
        console.log("navigate to create a checklist");
        this._navController.push(ChecklistFormPage);
    }
}
