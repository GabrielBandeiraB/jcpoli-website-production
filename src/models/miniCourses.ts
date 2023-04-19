
let Courses = [
  
  {
    title: "Navegação Aérea",
    instructor: "Roberto Márcio dos Santos",
    institution: "PUC Goiás",
    desc: `Planejamento de voo, procedimentos de saída, TOC, voo em rota, efeitos do vento, TOD, procedimentos de aproximação. Cálculos de razão de subida, descida, velocidades e estimados. `,
    date: "09/05",
    time: "13:30-17:00",
    place: "Auditório 3, área II",
  }, 
  {
    title: "Uso da ferrramenta CANVA para apresentação de trabalho acadêmico",
    instructor: "Profa Luri Sabina Cosme da Silva Matos",
    institution: "PUC Goiás",
    desc: `O minicurso tem como objetivo apresentar o aplicativo CANVA como ferramenta para o desenvolvimento de trabalho acadêmico, enfatizar os tópicos mais relevantes para montar uma apresentação interessante e abordar sobre a postura adequada durante a explanação do trabalho.`,
    date: "09/05",
    time: "15:00-16:30",
    place: "Microsoft Teams",
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1651584931609?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2219202b0c-a430-4a6f-8eac-33d2cc220195%22%7d"
  },
  {
    title: '"Na minha máquina funciona": Desenvolvendo em docker para nunca mais ter este problemas',
    instructor: "Luan Fernandes Barcelos",
    institution: "Syncode Sistemas e Tecnologia",
    desc: `Motivação de uso e introdução ao docker. Criando containers a partir de imagens oficiais. 
        Criando suas próprias imágens. Comunicação de maquina local com docker e docker com docker. 
        Encerramento com exemplo de uso real.`,
    date: "09/05",
    time: "17:00-18:30",
    place: "Lab. 101C, área II",
  },
  {
    title: "Planejamento de Voo",
    instructor: "Salmen Chaquip Bukzem",
    institution: "PUC Goiás",
    desc: `Interpretação de cartas, ROTAER, análise e escolha dos aeródromos; escolha da rota a ser percorrida; análise da meteorologia atual e prevista; cálculos de performance da aeronave; preenchimento e envio do formulário de plano de voo, conferência da documentação necessária ao voo. `,
    date: "10/05",
    time: "13:30-17:00",
    place: "Auditório 2, área II",
  },
  {
    title: "Smath Studio: aplicações em cálculos de Engenharia",
    instructor: "Prof. Me. Alberto Vilela Chaer",
    institution: "PUC Goiás",
    desc: `Requisito: Realizar download e instalação prévia do Smath Studio pelo link https://en.smath.com/view/SMathStudio/summary `,
    date: "10/05",
    time: "14:00-18:00",
    place: "Microsoft Teams",
    link: "https://teams.microsoft.com/l/meetup-join/19%3adcb5856375ad4247a353459a1d1f6306%40thread.tacv2/1651584839051?context=%7b%22Tid%22%3a%2273319f42-8908-4b89-9f8d-558cf4d5d776%22%2c%22Oid%22%3a%2219202b0c-a430-4a6f-8eac-33d2cc220195%22%7d"
  },
  
  {
    title: "Estrutura do Espaço Aéreo Brasileiro",
    instructor: "Salmen Chaquip Bukzem",
    institution: "PUC Goiás",
    desc: `Espaço aéreo inferior, superior, espaços aéreos controlados, classes de espaço aéreo, região de informação de voo, órgãos ATS e serviços prestados. `,
    date: "11/05",
    time: "13:30-17:00",
    place: "Auditório 2, área II",
  },  
  {
    title: "Mapeamento com uso de Drones",
    instructor: "Murilo Raphael Cardoso",
    institution: "SEMAD (Goiás)",
    desc: ``,
    date: "11/05",
    time: "14:00-16:45",
    place: "Espaço de Palestras ITS (Campus II)"
  }, 
  
]

/*
const Courses_Civil = [
]

const Courses_Computacao = [
  


]

const Courses_Producao = [
  
]

const Courses_Caer = [
  
]

*/
Courses = Courses.sort((a, b) => {
  if(a.date < b.date) return -1;
  if(a.date > b.date) return 1;
  if(a.time < b.time) return -1;
  if(a.time > b.time) return 1;
  if(a.title < b.title) return -1;
  if(a.title > b.title) return 1;
  return 0;
});

export const miniCourses_Section = [
  {
    curso: "Agronomia",
    minicurso: Courses,
  },
  /*
  {
    curso: 'Ciências Aeronáuticas',
    minicurso: Courses_Caer
  },
  {
    curso: "Civil",
    minicurso: Courses_Civil
  },
  {
    curso: "Computacao",
    minicurso: Courses_Computacao
  },
  {
    curso: "Producao",
    minicurso: Courses_Producao
  },
  */
]