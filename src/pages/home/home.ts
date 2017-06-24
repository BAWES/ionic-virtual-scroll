import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ListService } from '../../providers/list.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:any[]=[];

  constructor(public navCtrl: NavController, private _listService: ListService) {
  }

  /**
   * Loads data into the list
   */
  loadData(){
    this._listService.getData().subscribe(jsonResp => {
      this.items = jsonResp;
    });
  }

  clicked(item){

  }

}
