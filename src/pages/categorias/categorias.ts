import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CategoriaService } from '../../service/Categoria.service';
import { Categoria } from '../../model/categoria';

@IonicPage()
@Component({
  selector: 'page-categorias',
  templateUrl: 'categorias.html',
})
export class CategoriasPage {

  categorias: Categoria[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoriaService: CategoriaService) {
  }

  ionViewDidLoad() {
    this.categoriaService.findAll()
      .subscribe(response => {
        this.categorias = response;
        console.log(response);
    },
    error=>{
      console.log(error);
    });
  }

  itemClicked(item):void {
    this.navCtrl.push('SubCategoriasPage',item);
    //console.log(item.subCategorias);
  }
}
