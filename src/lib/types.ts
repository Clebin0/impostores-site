export interface Evento {
  data: string;
  tipo: string;
  titulo: string;
  desc: string;
  link: string;
}

export interface Produto {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  estoque: number;
  categoria: "vestuario" | "acessorios" | "kit";
  tamanhos?: string[];
  cores?: string[];
  personalizavel?: boolean;
}

export interface ItemCarrinho {
  produto: Produto;
  quantidade: number;
  tamanho?: string;
  cor?: string;
  nomePersonalizado?: string;
}

export interface DiretoriaMembro {
  nome: string;
  cargo: string;
  inicial: string;
  destaque?: boolean;
}

export interface AcaoSocial {
  id: string;
  titulo: string;
  descricao: string;
  horasComplementares: number;
  dataLimite: string;
  ativo: boolean;
}
