import { API_CONFIG } from '../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

import { Categoria } from '../model/categoria';

@Injectable()
export class CategoriaService {
    constructor(public http: HttpClient){
    }
    findAll() : Observable<Categoria[]> {
      return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/usuarios` )
    }

}
