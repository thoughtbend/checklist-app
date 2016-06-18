import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/checklist-form-page/checklist-form-page.html',
})
export class ChecklistFormPage {

    constructor(private _navController:NavController, private _navParams: NavParams) {

    }
}