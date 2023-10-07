let Hackaton = [

    {
        type: "Programação geral",
        title: "Boas vindas e Inscrições",
        instructor: "Professoras Carmen e Lucilia",
        institution: "PUC Goias",
        desc: `Os organizadores explicarão como funcionará o hackaton, apresentando o tema que 
                deve ser seguido. Após isso serão feitas as incrições das equipes`,
        date: "17/10",
        time: "18:30",
        place: "Auditorio",
        //link: ""
    },
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
    },
  ]