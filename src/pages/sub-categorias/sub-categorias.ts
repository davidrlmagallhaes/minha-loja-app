import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Categoria } from '../../model/categoria';



@IonicPage()
@Component({
  selector: 'page-sub-categorias',
  templateUrl: 'sub-categorias.html',
})
export class SubCategoriasPage {

  subCategorias: Categoria[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.subCategorias = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubCategoriasPage');
  }

  itemClicked(item):void {

    if(item.subCategorias != '')
      this.navCtrl.push('SubCategoriasPage',item);
    else
      this.navCtrl.push('ProdutosPage',item);
  }

}
