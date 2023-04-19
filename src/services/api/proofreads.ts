import axios from "@/config/axios";

const API_URL = process.env.VUE_APP_API_URL + "proofreads/";

export interface Proofread {
  id: number;
  submission_id: number;
  originalidade: number;
  contribuicao: number;
  qualidade: number;
  organizacao: number;
  recomendacao: number;
  confianca_revisor: string;
  categoria: string;
  indicacao: string;
  mensagem_autor: string;
  mensagem_organizacao: string;
  created_at: string;
}

export async function getProofread(submissionId: number) {
  return axios.get(API_URL + submissionId).then(res => res.data);
}

export function saveProofRead(data: any): Promise<any> {
  return axios.post(API_URL, data).then(res => res.data)
}

export function getProofreadSummary(submissionId: number) {
  return axios.get(API_URL + submissionId).then(resp => resp.data);
}