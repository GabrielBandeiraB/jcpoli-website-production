let Palestras = [
  {
    title: "Lorem Ipsum",
    instructor: "Lorem IpsumLorem IpsumLorem Ipsum",
    institution: "Lorem IpsumLorem IpsumLorem Ipsum",
    desc: `Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum`,
    date: "09/05",
    time: "08:00-09:30",
    place: "Microsoft Teams",
    link:
      "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1651582149520?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2219202b0c-a430-4a6f-8eac-33d2cc220195%22%7d",
  },
  {
    title: "Lorem IpsumLorem IpsumLorem Ipsum",
    instructor: "Lorem IpsumLorem Ipsum",
    warning: "CANCELADA",
    institution: "PUC Goiás",
    desc: `Lorem IpsumLorem IpsumLorem Ipsum`,
    date: "10/05",
    time: "08:00-09:30",
    place: "Auditório 2, área II",
  },
  {
    title: "Lorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    instructor: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    institution: "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
    desc: `Lorem IpsumLorem IpsumLorem Ipsum`,
    date: "11/05",
    time: "10:00-11:30",
    place: "YouTube",
    link:
      "https://www.youtube.com/watch?v=_zwQOz_nHWc&ab_channel=PUCGoi%C3%A1s",
  },
  

  //===================================================
]
/*
const Palestras_Producao = [
  
]

const Palestras_Design = [

]

const Palestras_Caer = [
  
]

const Palestras_Mestrado = [
  
  
  
]



const Palestras_Agronomia = [
 
]


const Palestras_Civil = [

]

const Palestras_ArquiteturaUrbanismo = [
  
 
]

const Palestras_ControleAutomacao = [
  
  
]

const Palestras_IniciacaoCientifica = [
  
]
*/

Palestras = Palestras.sort((a, b) => {
  if(a.date < b.date) return -1;
  if(a.date > b.date) return 1;
  if(a.time < b.time) return -1;
  if(a.time > b.time) return 1;
  if(a.title < b.title) return -1;
  if(a.title > b.title) return 1;
  return 0;
});

export const Palestras_Cursos = [

  {
    curso: 'Ciência da Computação',
    palestras: Palestras,
  },
  /*
  {
    curso: 'Agronomia',
    palestras: Palestras_Agronomia,
  },
  {
    curso: 'Arquitetura e Urbanismo',
    palestras: Palestras_ArquiteturaUrbanismo,
  },
  {
    curso: 'Ciências Aeronáuticas',
    palestras: Palestras_Caer,
  },
  {
    curso: 'Civil',
    palestras: Palestras_Civil,
  },
  {
    curso: 'Engenharia de Controle e Automação',
    palestras: Palestras_ControleAutomacao,
  },   
  {
    curso: 'Engenharia de Produção',
    palestras: Palestras_Producao,
  }, 
  {
    curso: 'Design',
    palestras: Palestras_Design,
  },  
  {
    curso: 'Mestrado',
    palestras: Palestras_Mestrado,
  },
  {
    curso: 'Iniciação Ciêntifica',
    palestras: Palestras_IniciacaoCientifica,
  },
  */  
]