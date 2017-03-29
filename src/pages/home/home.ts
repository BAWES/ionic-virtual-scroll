import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items:string[] = ["a", "b", "c", "d"];

  constructor(public navCtrl: NavController) {

  }

}
