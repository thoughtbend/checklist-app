import {Component} from '@angular/core';
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {NavController, Loading} from 'ionic-angular';
import {ChecklistsPage} from '../checklists-page/checklists-page';

@Component({
    templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {

    private _checklistServiceRoot: string = 'http://checklistapi-public.thoughtbend.com/api/checklist';

    constructor(private _navController:NavController, private _http: Http) {
    }

    /*goToFactsPage(){
     this._navController.push(ScientificFactsPage);
     }*/
    gotoLists() {

        let loading = Loading.create({
           content: 'Please wait...'
        });
        this._navController.present(loading);
        this._http.get(this._checklistServiceRoot)
        .toPromise()
        .then(response => {
            let params = {
                checklistResponse: response
            };
            loading.dismiss();
            this._navController.push(ChecklistsPage, params);
        })
        .catch(function(error) {
            debugger;
            console.log(error);
            return Promise.reject(error);
        });
    }
}
