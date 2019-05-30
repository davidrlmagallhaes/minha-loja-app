import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ProdutoService } from '../../service/Produto.service';
import { Produto } from '../../model/produto';
import { Categoria } from '../../model/categoria'

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  subCategorias: Categoria[];
  produtos: Produto[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public produtoService: ProdutoService) {
    this.subCategorias = this.navParams.data;
  }

  ionViewDidLoad() {
    this.produtoService.findAll()
      .subscribe(response => {
        this.produtos = response;
        console.log(response);
      },
        error => {
          console.log(error);
        });
  }

  itemClicked(item):void {
    this.navCtrl.push('ProdutoPage',item);
  }

}
