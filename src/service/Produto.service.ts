import { API_CONFIG } from '../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

import { Produto } from '../model/produto';

@Injectable()
export class ProdutoService {
    constructor(public http: HttpClient){
    }
    findAll() : Observable<Produto[]> {
      return this.http.get<Produto[]>(`${API_CONFIG.baseUrl}/produtos` )
    }

}
