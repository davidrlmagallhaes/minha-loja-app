export interface Categoria {
  id: string;
  sigla: String;
  descricao: string;
  categoriaPai: string;
  subCategorias: Categoria;
}
