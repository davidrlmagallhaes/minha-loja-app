import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../model/produto';

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  produto: Produto;
  constructor(public navCtrl: NavController, public navParams: NavParams,) {
    this.produto = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProdutoPage');
  }

}
