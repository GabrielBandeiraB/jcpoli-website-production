export interface Address {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    unidade: string;
    ibge: string;
    gia: string;
}

export interface Estado {
    id: number;
    sigla: string;
    nome: string;
    regiao: Regiao;
  }

export interface Regiao {
    id: number;
    sigla: string;
    nome: string;
}

export interface Cidade {
    id: number;
    nome: string;
}