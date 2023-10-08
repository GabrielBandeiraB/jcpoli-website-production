
let Courses = [
   
  {
    title: "Design Thinking",
    instructor: "Genilda",
    institution: "PUC Goiás",
    desc: `O curso de design thinking terá como objetivo...`,
    date: "17/10",
    time: "19:30",
    place: "Presencial: Auditório III Área II",
    //link: ""
  }, 
  {
    title: "Sobre Github",
    instructor: "",
    institution: "PUC Goiás",
    desc: `O curso sobre Github terá como objetivo...`,
    date: "18/10",
    time: "15:00",
    place: 'Ainda não definido.'
  
  /*  link: ""
    */
  },

  {
    title: "Prototipação para Hackathons",
    instructor: 'Rafael Leal',
    institution: 'Professor da PUC Goiás.',
    desc: `O curso de prototipação para hackathons tem o objetivo de ...`,
    date: '18/10',
    time: '16:00',
    place: 'Ainda não definido.'
  
  },

  {
    title: "Criando Protótipos com Figma",
    instructor: 'Tayna',
    institution: 'PUC Goiás',
    desc: `O curso de criação de protótipos com Figma tem o objetivo de ...`,
    date: '18/10',
    time: '17:00',
    place: 'Ainda não definido.',
    //link: ""
  
  },
  
  {
    title: "HTML – a crash course",
    instructor: 'Hiagho Junio Gomes Oliveira',
    institution: 'Aluno da PUC Goiás',
    desc: `O curso de HTML tem o objetivo de ...`,
    date: '18/10',
    time: '19:30',
    place: 'Ainda não definido.',
    //link: ""
  },

  {
    title: "Docker na Prática: Criando e Gerenciando Contêineres " +
           "para Desenvolvimento e Produção",

    instructor: 'Daniel Correa',
    institution: 'Professor da PUC Goiás',
    desc: `Este curso de docker tem o objetivo de...`,
    date: '19/10',
    time: '09:00',
    place: 'Ainda não definido.',
    //link: ""
  },
  
  {
    title: "Pitch - técnicas de uma apresentação campeã",
    instructor: '',
    institution: 'Professor da PUC Goiás',
    desc: `Este curso tem o objetivo de...`,
    date: '19/10',
    time: '15:00',
    place: 'Ainda não definido.',
    //link: ""
  },

  {
    title: "Exercícios de Relaxamento",
    instructor: 'Luri Sabina',
    institution: 'Professor da PUC Goiás',
    desc: `Este curso tem o objetivo de...`,
    date: '19/10',
    time: '17:30',
    place: 'Ainda não definido.',
    //link: ""
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