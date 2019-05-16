import { Categoria } from './categoria';
import { Especificacaoproduto } from './especificacaoproduto';

export interface Produto {
  id: string;
  nome: String;
  preco: string;
  categoria: Categoria;
  especificacaoprodutos: Especificacaoproduto;
}
