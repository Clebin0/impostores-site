import type { Produto, DiretoriaMembro } from "./types";

export const produtos: Produto[] = [
  {
    id: "caneca-liquidez",
    nome: "Caneca de Liquidez",
    descricao: "Caneca oficial dos Impostores com design exclusivo. Perfeita para o café da manhã antes da prova.",
    preco: 45.00,
    imagem: "/images/caneca.png",
    estoque: 0,
    categoria: "acessorios",
    personalizavel: false,
  },
  {
    id: "copo-majoritario",
    nome: "Copo Majoritário",
    descricao: "Copo oficial dos Impostores com tirante incluso. Indispensável para qualquer evento.",
    preco: 35.00,
    imagem: "/images/copo.png",
    estoque: 0,
    categoria: "acessorios",
    personalizavel: false,
  },
  {
    id: "moletom-oficial",
    nome: "Moletom Oficial",
    descricao: "Moletom premium dos Impostores. Conforto e estilo para representar a maior atlética.",
    preco: 189.00,
    imagem: "/images/moletom.jpg",
    estoque: 25,
    categoria: "vestuario",
    tamanhos: ["PP", "P", "M", "G", "GG", "XG"],
    cores: ["Preto", "Laranja"],
    personalizavel: true,
  },
  {
    id: "camiseta-basica",
    nome: "Camiseta Básica Impostores",
    descricao: "Camiseta básica com logo bordado. Perfeita para o dia a dia.",
    preco: 69.00,
    imagem: "/images/camiseta.jpg",
    estoque: 50,
    categoria: "vestuario",
    tamanhos: ["PP", "P", "M", "G", "GG", "XG"],
    cores: ["Preto", "Branco"],
    personalizavel: true,
  },
  {
    id: "kit-calouro",
    nome: "Kit Calouro 2026",
    descricao: "Kit completo para o calouro: camiseta + copo + tirante + brindes exclusivos.",
    preco: 120.00,
    imagem: "/images/kit-calouro.jpg",
    estoque: 30,
    categoria: "kit",
    tamanhos: ["PP", "P", "M", "G", "GG", "XG"],
    personalizavel: true,
  },
  {
    id: "bone-impostores",
    nome: "Boné Impostores",
    descricao: "Boné trucker com logo bordado. Ajuste traseiro para conforto.",
    preco: 55.00,
    imagem: "/images/bone.jpg",
    estoque: 15,
    categoria: "acessorios",
    cores: ["Preto", "Laranja/Preto"],
    personalizavel: false,
  },
];

export const diretoria: DiretoriaMembro[] = [
  { nome: "Aline Santos", cargo: "Presidente", inicial: "A", destaque: true },
  { nome: "Bruno Rafael", cargo: "Vice-Presidente", inicial: "B", destaque: true },
  { nome: "Cledson Santos", cargo: "Diretor de Ação Social", inicial: "C" },
  { nome: "Fernanda Pimentel", cargo: "Diretora de Marketing", inicial: "F" },
  { nome: "Lais Antunes", cargo: "Diretora de Ação Social", inicial: "L" },
  { nome: "Nathan", cargo: "Diretor de Eventos", inicial: "N" },
];

export const piadasContabeis = [
  "Auditamos seu clique: detectado excesso de curiosidade!",
  "Cuidado! Muitos cliques geram passivo circulante de tempo!",
  "Ativo Imobilizado: o Pato não sai do lugar, mas você insiste!",
  "Débito de cliques, crédito de risadas!",
  "Equilibrando o balanço patrimonial de diversão!",
  "O contador sempre está certo, exceto quando erra o balanço.",
  "Por que o contador foi demitido? Porque perdeu o equilíbrio!",
  "Patrimônio Líquido: quanto sobra depois de pagar as cervejas.",
];

export const linksUteis = {
  instagram: "https://www.instagram.com/impostoresuc/",
  whatsapp: "https://wa.me/5541995108205",
  pix: "impostoresunicesumar@gmail.com",
  socio: "https://cheers.com.br/socio/aaacc-impostores~4986?plano=21893",
  uni2026Form: "https://docs.google.com/forms/d/e/1FAIpQLSdDY_gnQ9bwTQolVPV2v2rTVPhNqLPDz9KJp9Aqc37-a0gt6g/viewform",
};

export const metadados = {
  titulo: "Impostores | O Maior Cofre da Contabilidade",
  descricao: "A Atlética impostora da Unicesumar. Integração, festas épicas, networking e a melhor delegação do UNI 2026.",
  instagram: "@impostoresuc",
  hashtag: "#FazoQuack",
};
