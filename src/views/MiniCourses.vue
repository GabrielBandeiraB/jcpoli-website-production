<template>
  <div>
    <PhotoHeader
      :title="title"
      :description="description"
      :image="background"
      offset="calc((-100/523)*100vw + 67.304015296px)"
    ></PhotoHeader>

    <Main id="root">
      <h4 class="text-center">HACKATHON</h4>      
      <div class="button-container">
        <button class="button" v-on:click="mostrar_apenas_geral">Geral</button>
        <button class="button" v-on:click="mostrar_apenas_checkpoint">Checkpoints</button>
        <button class="button" v-on:click="filterCourses">Minicursos</button>
        <button class="button" v-on:click="mostrar_apenas_mentores">Mentores</button>
        <!--<button class="button" v-on:click="filterCourses">12/05</button>
        <button class="button" v-on:click="filterCourses">13/05</button>-->
      </div>
      <div class="courses-list" id="cursos">
        <div v-for="(props, index) in filtered_courses" :key="index">
          <!--<h3 class="section-course">{{ props.curso }}</h3> -->
          <div v-for="(course, index) in props.minicurso" :key="index">
            <MiniCourse :course="course"></MiniCourse>
            <hr />
          </div>
        </div>
      </div>                                  
    </Main>

    <div id="mentores">
      <Main>
        <Paragraph title="Mentores"></Paragraph>
        <Speakers :speakers="speakers" :paginate="1" />            
      </Main>
    </div>    

    <div id="geral">
      <h2>Hackapuc 2023</h2>
      <hr style="border-top: 3px solid #333; margin: 20px auto;">
      <p style="font-size: 18px;">
        Temos a alegria de anunciar a Hackapuc 2023, que será realizada 
        de 17 a 19 de outubro. A Hackapuc é um grande evento que envolve 
        o desenvolvimento de uma solução inovadora para um determinado 
        problema ou desafio. Os interessados devem formar grupos para 
        participarem.
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>      
      <h3 style="text-align: left;">Inscrições</h3>
      <hr style="border-top: 3px solid #333; margin: 20px auto;">
      <p style="text-align: left; font-size: 18px;">
        As incrições podem ser feitas no dia 17/09 às 18:30, na 
        abertura da Hackapuc. Os interessados devem formar grupos 
        e efetuar as incrições por meio de um formulário que será 
        disponibilizado.
      </p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>      
      <h3 style="text-align: left;">Como Funciona</h3>
      <hr style="border-top: 3px solid #333; margin: 20px auto;">
      <p style="text-align: left; font-size: 18px;">
        A abertura da Hackathon será no dia 17/09. Nesse dia, o tema 
        do desafio será revelado. As equipes devem trabalhar para 
        poderem cuprir os checkpoints. Cada checkepoint representa 
        um marco no hackathon em que as equipes devem apresentar 
        os trabalhos solicitados dentro de um prazo chamdo de 
        checkpoint. Os checkpoints são de caráter eliminatório, o que 
        sifnifica que a cada checkpoint menos equipes vão estar na 
        disputa, funcionando como uma espécie de filtro.
      
      </p>
    </div>

    <div id="checkpoint">
      <Programacao></Programacao>
    </div>

    
    
  </div>

    
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PhotoHeader from '../components/organization/PhotoHeader.vue'
import Main from '../components/organization/Main.vue'
import Paragraph from '@/components/organization/Paragraph.vue'
import Speakers from '@/components/organization/Speakers.vue'
import MiniCourse from '../components/miniCourse/index.vue'



import { miniCourses_Section } from '@/models/miniCourses'
import Programacao from './Programacao.vue'

@Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse,
    Paragraph,
    Speakers,
    Programacao
  }
})
export default class MiniCourses extends Vue {
  private speakers: any = null
  private coursesList: any
  private filtered_courses: any

  private title = 'Minicursos'
  private description = 'Minicursos da jornada'
  private background = 'assets/img/lab.jpg'
  
  
  //variáveis de estados:
  private visibleCheckpoint = false;
  private visibleMentores = false;
  private visibleCursos = true;
  private visibleGeral = false;


  ocultar_mentores() {
    const mentores = document.getElementById("mentores");
    mentores.style.visibility = "hidden"

    this.visibleMentores = false;
  }

  ocultar_lista_cursos() {
    const cursos = document.getElementById("cursos")
    cursos.style.visibility = "hidden"
    cursos.style.height = "0px";
    cursos.style.marginBottom = "0px";

    this.visibleCursos = false;
  }

  ocultar_checkpoint() {
    const checkpoint = document.getElementById("checkpoint")
    checkpoint.style.visibility = "hidden";

    this.visibleCheckpoint = false;

  }

  ocultar_geral() {
    const geral = document.getElementById("geral")
    geral.style.visibility = "hidden";

    this.visibleGeral = false;
  }



  mostrar_apenas_mentores() {
    
    if (this.visibleMentores) return

    if (this.visibleCheckpoint)
      this.ocultar_checkpoint()

    if (this.visibleCursos)
      this.ocultar_lista_cursos()

    if (this.visibleGeral)      
      this.ocultar_geral();

    const mentores = document.getElementById("mentores");
    mentores.style.visibility = "visible"
    
    this.visibleMentores = true;
  }

  mostrar_apenas_lista_cursos() {
    
    if (this.visibleCursos) return

    if (this.visibleCheckpoint)
      this.ocultar_checkpoint()

    if (this.visibleMentores)
      this.ocultar_mentores()

    if (this.visibleGeral)      
      this.ocultar_geral();

    const cursos = document.getElementById("cursos")
    cursos.style.visibility = "visible"

    this.visibleCursos = true;
  }


  mostrar_apenas_checkpoint() {

    if (this.visibleCheckpoint) return

    if (this.visibleCursos)
      this.ocultar_lista_cursos()

    if (this.visibleMentores)
      this.ocultar_mentores()

    if (this.visibleGeral)      
      this.ocultar_geral();

    const checkpoint = document.getElementById("checkpoint")
    checkpoint.style.visibility = "visible"

    this.visibleCheckpoint = true;
  }

  mostrar_apenas_geral() {
    if (this.visibleGeral) return

    if (this.visibleCursos)
      this.ocultar_lista_cursos()

    if (this.visibleMentores)
      this.ocultar_mentores()

    if (this.visibleCheckpoint)      
      this.ocultar_checkpoint();

    const geral = document.getElementById("geral")
    geral.style.visibility = "visible"

    this.visibleGeral = true;
  }


  filterCourses(e: any) {
    this.mostrar_apenas_lista_cursos()
    //let data = e.target.innerText
    let data = '09/05'
    this.filtered_courses = this.coursesList.map(item => {
      const minicurso = item.minicurso.filter(aux => {
        return aux.date == data
      })

      return { ...item, minicurso }
    })
  }

  clearFilter() {
    this.mostrar_apenas_lista_cursos()
    this.filtered_courses = this.coursesList
  }

  constructor() {
    super()    
    this.speakers = [
      {
        name: 'Michael Machado',
        institution: 'Senior Partner da FlexSim Brasil em Campinas-SP',
        speaking: 'Tendências na Simulação: casos e oportunidades',
        description: `Engenheiro químico pela UEM (Universidade Estadual de Maringá) e consultor especializado em simulação dinâmica usando o FlexSim e otimização utilizando outros software específicos, com diversos modelos desenvolvidos para grandes empresas no Brasil como Vale, Harsco, Coca-Cola, Falcare, Fiat, DHL, Jabil, ViaStore, Ambev e outros. Capacitado pela FlexSim, USA, onde também participou de alguns projetos com clientes dos EUA. Pós-graduado em Gestão de Negócios & Operações pelo INSPER-SP (Ibmec-SP), mestrado pela UNICAMP em Pesquisa Operacional.  Pós-graduado em Marketing e Gestão de Negócios pelo INSPER-SP e MBA pela University of Denver (Colorado).
`,
        subjectResume: `
    Simulação iniciou há alguns anos no Brasil como um assunto obscuro e que gerava um certo desconforto para as pessoas por se tratar de um hard skill que demandava muito conhecimento em programação para gerar soluções reativas no planejamento industrial, logístico e na área de saúde. Nos últimos anos, temos visto uma vertente bastante alterada com o surgimento de soluções modernas, que podem fazer com que métodos de Machine Learning e soluções de AI, quando trabalham em conjunto com simulação, podem desenvolver uma solução proativa e preventiva no planejamento operacional das empresas.
`,
        
        customSize: '10%',
        datentime: {
          date: '11/05',
          time: '19:00 - 20:30',
          place: 'Online: Youtube'
        }
      },

      {
        name: 'Tereza Cristina da Silva Paes Ferreira Del Papa',
        institution: 'Paes Del Papa Arquitetura',
        speaking: 'Arquitetura Hospitalar',
        description: `Formada pela FAMIH-BH/MG, possui especialização em Arquitetura Hospitalar pelo IAB-SP e Administração Hospitalar pela São Camilo, em São Paulo. Em seu escritório, desenvolve projetos relevantes em várias cidades do país, de diversas naturezas e escalas. Com passagem pela docência, hoje tem tido a oportunidade de dividir seu trabalho com estudantes de arquitetura por meio de palestras. Além disso, em seu escritório recebe eventualmente estagiários,  contribuindo assim também com a formação de futuros profissionais.
`,
        subjectResume: `
  As práticas profissionais da Arquitetura Hospitalar – um campo de atuação e o mercado de trabalho segundo a experiência da arquiteta urbanista
`,
        img: '/assets/img/speakers/Tereza_Cristina.jpg',
        customSize: '100%',
        datentime: {
          date: '11/05',
          time: '07:30 - 09:00',
          place: 'Auditório Marisa Roriz, área III'
        }
      },

      {
        name: 'Mateus Aparecido de Souza Gentile',
        institution: 'GTMax',
        speaking: 'Impressão 3D com a empresa nacional GTMax',
        description: `Atuo a 7 anos na empresa GTMAX3D líder nacional em fabricação de impressoras 3D, iniciei minha carreira na empresa como estagiário de técnico em eletrônica, durante meus primeiros 3 anos na empresa lidei diretamente com o setor de montagem dos equipamentos onde pude adquirir o máximo de conhecimento técnico possível.
  Com o reconhecimento da empresa ha 3 anos atuo como suporte técnico lidando diretamente com cliente e manutenções dos equipamentos comercializados pela empresa.

    `,
        subjectResume: `
  Experiências da empresa com o mercado de impressão 3D, seus produtos, oportunidades e mercado de trabalho.
`,
        img: '/assets/img/speakers/Mateus_Aparecido.jpg',
        customSize: '100%',
        datentime: {
          date: '11/05',
          time: '10:00 - 11:30',
          place: 'Online: Youtube'
        }
      }      
    ]

    this.coursesList = miniCourses_Section
    this.filtered_courses = this.coursesList
  }
}
</script>

<style scoped>
.courses-list > div:not(:first-child) {
  margin-top: 35px;
}

.section-course {
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  background-color: whitesmoke;
  box-shadow: 0 0.46875rem 2.1875rem rgba(0, 0, 0, 0.03),
    0 0.9375rem 1.40625rem rgba(0, 0, 0, 0.03),
    0 0.25rem 0.53125rem rgba(0, 0, 0, 0.05),
    0 0.125rem 0.1875rem rgba(0, 0, 0, 0.03);
  padding: 1rem;
}
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 5rem;
}

.button {
  padding: 1rem;
  border: 0.1rem solid white;
  border-radius: 5rem;
  font-weight: 700;
  background-color: #006ca3;
  margin-right: 2rem;
  color: white;
  transition: all 0.2s ease-in-out;
}

.button:hover {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

.button:focus {
  background-color: #20407d;
  transform: background-color;
  transform: scale(1.1);
}

@media screen and (max-width: 576px) {
  .button-container {
    flex-direction: column;
  }
  .button {
    margin-bottom: 1rem;
  }
}

@media screen and (min-width: 800px) {
  .button {
    width: 10.5rem;
  }
}

h4 {
  color: black;
  margin-bottom: 3rem;
}

#mentores {
  position: relative;
  margin-top: "-600px";
  bottom: 175px;
  visibility: hidden;
  margin-bottom: 0px;
}

#root {
  position: relative;
  margin-bottom: 0px;
  
}

#cursos {
  position: relative;
  margin-bottom: 0px;
}

#checkpoint {
  position: relative;
  margin-bottom: -1200px;
  padding-top: 0px;
  bottom: 800px;
  visibility: hidden;
}

#geral {
  position: relative;
  margin-bottom: 0px;
  visibility: hidden;
  bottom: 700px;
  width: 70%;
  margin: 20px auto;
}

#geral h2, h3 {
  color: #2776f5;
}


</style>




