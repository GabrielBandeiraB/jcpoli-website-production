let Hackaton = [

    {
        type: "",
        title: "",
        instructor: "",
        institution: "",
        desc: ``,
        date: "",
        time: "",
        place: "",
        link: ""
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
  
export const Hackaton_Year_Section = [
    {
        ano: "2023",
    },
    /*

    */
  ]