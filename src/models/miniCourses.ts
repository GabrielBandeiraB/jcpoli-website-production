
let Courses = [
   
  {
    title: "Aplicações em Engenharia utilizando o software Smath Solver",
    instructor: "Prof. Me. Alberto Vilela Chaer",
    institution: "PUC Goiás",
    desc: `O minicurso “Aplicações em Engenharia utilizando o software Smath Solver” tem como objetivo apresentar as possibilidades que este programa – gratuito a partir de download em página oficial na web (https://en.smath.com/view/SMathStudio/summary) – oferece para elaboração de cálculos e geração da respectiva memória de cálculo de um problema qualquer que tenha sua resolução a partir de utilização de expressões matemáticas.  Trata-se de um programa bastante robusto e amplamente conhecido pelo nome de “SMath Studio” utilizado em universidades do Brasil e exterior, sendo uma ferramenta de sedimentação do processo ensino-aprendizagem, através da simulação dos eventos envolvidos em um cálculo. O benefício da utilização deste programa é utilizar da rapidez dos cálculos feitos por meio da máquina, cujas operações e lógica são conduzidas pelo desenvolvimento do usuário, para que se possa tomar conclusões e decisões a partir dos resultados. Uma ferramenta que se constitui em um “caderno de exercícios” de Professores, Estudantes e Profissionais de Engenharia. Recomenda-se que os participantes do referido minicurso acessem a sessão por meio de computador pessoal (sistema operacional Windows e Linux; também por versão Open in browser) para melhor rendimento durante a preleção e atividades propostas, apesar de que o software também tem sua versão gratuita para ser instalada em aparelho celular no sistema Android. `,
    date: "09/05",
    time: "14:00-18:00",
    place: "Microsoft Teams",
  }, 
  {
    title: "Ferramentas computacionais para o desenho de projeto de arquitetura",
    instructor: "Alessandro Miguel de Oliveira",
    institution: "PUC Goiás",
    desc: `Uso do AutoCAD para o desenho de projeto, geometria descritiva, elementos constitutivos das edificações e representação arquitetônica.`,
    date: "08, 09 e 10/05",
    time: "14:00-17:00",
    place: 'Presencial: Laboratóro 102, Bloco B, Área III'
  
  /*  link: ""
    */
  },

  {
    title: "Introdução a Python.",
    instructor: 'Eugenio José Moura Neto',
    institution: 'Aluno da PUC Goiás.',
    desc: `Iniciação à linguagem de programação Python. Vagas limitadas a 20 alunos.`,
    date: '09/05',
    time: '14:00-16:00',
    place: 'Presencial: Laboratório 101, bloco C, área II'
  
  },

  {
    title: "Introdução ao Git/GitHub",
    instructor: 'Milton de Assis Ribeiro Neto',
    institution: 'PUC Goiás',
    desc: `Como usar o Git/Github? Minicurso presencial, porém com gravação pelo Teams.`,
    date: '10/05',
    time: '17:00-19:00',
    place: 'Presencial: Laboratório 101, bloco C, área II'
  
  },
  
  {
    title: "Introdução a Estrutura de Dados em Python",
    instructor: 'Daniel Ribeiro de Brito',
    institution: 'PUC Goiás',
    desc: `Este minicurso é uma continuação do curso de Introdução a Python. Serão vistas estruturas de dados simples utilizando a linguagem Python.`,
    date: '10/05',
    time: '14:00-16:00',
    place: 'Presencial:Laboratório 105, bloco C, área II'

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