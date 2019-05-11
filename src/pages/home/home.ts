import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public menu: MenuController) {

  }

  ionViewCanEnter(){
    this.menu.swipeEnable(false);
  }

  ionViewCanLeave(){
    this.menu.swipeEnable(false);
  }

  login(){
    this.navCtrl.setRoot('CategoriasPage')
  }
}
