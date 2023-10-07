let Hackaton = [

    {
        type: "Programação geral",
        title: "Boas vindas e Inscrições",
        instructor: "Professoras Carmen e Lucilia",
        institution: "PUC Goias",
        desc: `Os organizadores explicarão como funcionará o hackaton, apresentando o tema que ` +
                `deve ser seguido. Após isso serão feitas as incrições das equipes`,
        date: "17/10",
        time: "18:30",
        place: "Auditorio",
        //link: ""
    },
    {
      type: "Minicurso",
      title: "Oficina 1: Design Thinking",
      instructor: "Professoras Carmen e Lucilia",
      institution: "PUC Goias",
      desc: `Nesta oficina o aluno irá entender o processo de criação e ao final dela deverá ter sua ` +
             `inscrição realizada. Será realizada no auditório e PROA concomitantemente.`,
      date: "17/10",
      time: "19:30",
      place: "Auditorio e proa",
      //link: ""
  },
  {
    type: "Checkpoints",
    title: "Checkpoint 1: Projeto Escrito",
    instructor: "Professoras Carmen e Lucilia",
    institution: "PUC Goias",
    desc: `Prazo final para a entrega do formulario do projeto escrito`,
    date: "18/10",
    time: "13:00",
    place: "",
    //link: ""
},
{
  type: "Minicurso",
  title: "Oficina 02: Prototipação",
  instructor: "Rafael",
  institution: " ",
  desc: `Oficina 2`,
  date: "18/10",
  time: " ",
  place: " ",
  //link: ""
},
{
  type: "Minicurso",
  title: "Oficina 03",
  instructor: " ",
  institution: " ",
  desc: `Sobre github`,
  date: "18/10",
  time: " ",
  place: " ",
  //link: ""
},
{
  type: "Minucurso",
  title: "Oficina 04",
  instructor: "Hiago",
  institution: " ",
  desc: ` Introdução HTML/CSS`,
  date: " ",
  time: " ",
  place: " ",
  //link: ""
},
{
  type: "Checkpoints",
  title: "Checkpoint 2: Prototipo",
  instructor: " ",
  institution: " ",
  desc: `Prazo final para a entrega do primeiro protótipo desenhado`,
  date: "18/10",
  time: "22:00",
  place: " ",
  //link: ""
},
{
  type: "Checkpoints",
  title: " Checkpoint 3: MVP",
  instructor: "",
  institution: "",
  desc: `MVP`,
  date: "19/10",
  time: "14:00",
  place: " ",
  //link: ""
},
{
  type: "Checkpoints",
  title: "Checkpoint 4: Pitch e encerramento",
  instructor: "",
  institution: "",
  desc: `Apresentação dos Pitch's, entrega dos resultados e cerimonia de encerramento `,
  date: "19/10",
  time: "18:30",
  place: " ",
  //link: ""
},
/*{
  type: "",
  title: "",
  instructor: "",
  institution: "",
  desc: ``,
  date: " ",
  time: " ",
  place: " ",
  //link: ""
},*/
]
  Hackaton = Hackaton.sort((a, b) => {
    if(a.date < b.date) return -1;
    if(a.date > b.date) return 1;
    if(a.time < b.time) return -1;
    if(a.time > b.time) return 1;
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return 0;
  });

//Para a função de sort, organizando hackatons de anos anteriores
   export const Hackaton_Year_Section = [
    {
        ano: "2023",
        evento: Hackaton,
    },
  ]