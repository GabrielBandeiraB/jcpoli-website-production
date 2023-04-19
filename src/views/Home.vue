<template>
  <v-app class="home" id="inspire">
    <Carousel />

    <About />

    <Dates />

    <v-layout row wrap>
      <v-flex xs12 sm12>
        <v-parallax
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        >
          <v-layout id="whenwhere">
            <div>
              <!-- <v-flex> -->
              <div class="icontitle">
                <i class="fas fa-clock"></i>
                <h5>QUANDO</h5>
              </div>
              <span id="quando">
                De 09 a 11 de
                <br />maio de 2022
              </span>
              <!-- </v-flex> -->
              <!-- <v-flex> -->
              <div class="icontitle">
                <i class="fas fa-map-marked"></i>
                <h5>ONDE</h5>
              </div>
              <div>
                <v-flex class="onde">Escola Politécnica</v-flex>
                <v-flex class="onde"
                  >Pontifícia Universidade Católica de Goiás</v-flex
                >
              </div>
              <span id="onde-endereco">
                Av, 1ª Avenida, 458-590 - Setor Leste Universitário,
                <br />Goiânia - GO, 74605-020
              </span>
              <!-- </v-flex> -->
            </div>
          </v-layout>
        </v-parallax>
      </v-flex>
    </v-layout>

    <Main>
      <Speakers :speakers="speakersList" :paginate="1" />

      <!-- <Supporters /> -->
    </Main>

    <div mt-5 mb-5 id="inscricoes" class="footer-subscription">
      <div>
        <v-container>
          <v-layout class="call">
            <v-flex>
              <p>INSCREVA-SE JÁ</p>
            </v-flex>
          </v-layout>
          <v-layout class="subcall text-left">
            <v-flex>
              <p class="text-justify text-center">
                A I JCPOLI será realizada de 9 a 11 de Maio de 2022, com tema:
                Cultura, Inovação e Empreendedorismo. É com alegria que o
                convidamos para enviar um artigo para o comitê científico.
              </p>
            </v-flex>
          </v-layout>

          <v-layout row wrap class="button-actions">
            <!--
            <v-flex offset-md3 xs12 md3>
              <v-btn @click="goToSubscription" color="primary" large>Faça sua inscrição</v-btn>
            </v-flex>
          -->
            <v-flex>
              <v-btn
                @click="goToSubmission"
                large
                class="btn-submission"
                color="primary"
                >Submeta seu artigo</v-btn
              >
            </v-flex>
          </v-layout>
          <v-layout class="line rights-reserved">
            <v-flex>
              <hr />
              <p>
                &copy; 1º Jornada Científica da Escola Politécnica - I JCPOLI 2022
              </p>
            </v-flex>
          </v-layout>
        </v-container>
      </div>
    </div>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import Carousel from '@/components/home/Carousel.vue'
import Speakers from '@/components/organization/Speakers.vue'
import About from '@/components/home/About.vue'
import Robot from '@/components/home/Robot.vue'
import Main from '@/components/organization/Main.vue'
import Paragraph from '@/components/organization/Paragraph.vue'
import Dates from '@/components/home/Dates.vue'
//import Supporters from '@/components/organization/Supporters.vue'

//import { speakers_list } from '@/storage/programacao/speakers'

@Component({
  components: {
    HelloWorld,
    Carousel,
    Speakers,
    About,
    Robot,
    Main,
    Paragraph,
    Dates
    //Supporters
  }
})
export default class Home extends Vue {
  private speakersList: any = null

  constructor() {
    super()
    this.speakersList = [
      {
        name: 'Michael Machado',
        institution: 'Senior Partner da FlexSim Brasil em Campinas-SP',
        speaking: 'Tendências na Simulação: casos e oportunidades',
        description: `Engenheiro químico pela UEM (Universidade Estadual de Maringá) e consultor especializado em simulação dinâmica usando o FlexSim e otimização utilizando outros software específicos, com diversos modelos desenvolvidos para grandes empresas no Brasil como Vale, Harsco, Coca-Cola, Falcare, Fiat, DHL, Jabil, ViaStore, Ambev e outros. Capacitado pela FlexSim, USA, onde também participou de alguns projetos com clientes dos EUA. Pós-graduado em Gestão de Negócios & Operações pelo INSPER-SP (Ibmec-SP), mestrado pela UNICAMP em Pesquisa Operacional.  Pós-graduado em Marketing e Gestão de Negócios pelo INSPER-SP e MBA pela University of Denver (Colorado). 
`,
        subjectResume: `
    Simulação iniciou há alguns anos no Brasil como um assunto obscuro e que gerava um certo desconforto para as pessoas por se tratar de um hard skill que demandava muito conhecimento em programação para gerar soluções reativas no planejamento industrial, logístico e na área de saúde. Nos últimos anos, temos visto uma vertente bastante alterada com o surgimento de soluções modernas, que podem fazer com que métodos de Machine Learning e soluções de AI, quando trabalham em conjunto com simulação, podem desenvolver uma solução proativa e preventiva no planejamento operacional das empresas. 
`,
        img: '/assets/img/speakers/Michael_Machado.jpg',
        customSize: '100%',
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
      },

      {
        name: 'Wanderlei Malaquias Pereira Junior',
        institution: 'Universidade Federal de Catalão (UFCAT)',
        speaking: 'Aplicações da otimização em problemas de engenharia',
        description: `Possui graduação em Engenharia Civil pela Universidade Estadual de Goiás (2010), mestrado em Geotecnia, Estruturas e Construção Civil pela Universidade Federal de Goiás (2014) e doutorado em Ciências Exatas e Tecnológicas pela Universidade Federal de Goiás (2020). Atualmente é professor assistente do Departamento de Engenharia Civil da Universidade Federal de Catalão (UFCAT). Tem experiência nas áreas de Engenharia Civil, com ênfase em mecânica das estruturas e matemática aplicada. Atua principalmente nos seguintes temas: otimização em engenharia, inteligência artificial, solução de problemas inversos para update/calibração de modelos.
   
`,
        subjectResume: `
  Quem nunca ouviu a palavra "otimização"?! Ou talvez a frase "vou otimizar o meu tempo!!!". Conceitos abstratos de otimização já são empregados na humanidade desde os tempos mais remotos, porém o advento da computação científica permitiu que estes métodos pudessem ser amplamente estudados e testados, inclusive em problemas reais. Portanto esta palestra tem como objetivo esclarecer alguns conceitos de otimização, apresentar algumas aplicações no campo da engenharia e apresentar ferramentas que permitem o uso destes métodos 
`,
        img: '/assets/img/speakers/Wanderlei_Malaquias.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '17:00 - 18:30',
          place: 'Microsoft Teams'
        }
      },

      {
        name: 'Henrique Sanábio Vilela',
        institution: '3D Fila',
        speaking: 'A responsabilidade da Impressão 3D na humanidade',
        description: `Engenheiro + MBA - Trabalha com pesquisa e desenvolvimento há mais de 20 anos.   
`,
        subjectResume: `
  Abordaremos o potêncial da tecnologia, o que já foi feito e o que está sendo desenvolvido para o nosso benefício
`,
        img: '/assets/img/speakers/Henrique_Sanabio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '10:00 - 11:30',
          place: 'Microsoft Teams'
        }
      },

      {
        name: 'Katiúscia Christiane Freitas ',
        institution: 'Secretaria Estadual de Saúde',
        speaking: 'Processo de Doação de Órgãos e Tecidos para Transplantes ',
        description: `Gerente de Transplantes da Secretaria Estadual de Saúde; e  Enfermeira do Sistema Integrado de Atendimento ao Trauma e Emergência da Secretaria Estadual de Saúde; Graduada em enfermagem pela Pontifícia Universidade Católica de Goiás (PUC-GO); Pós-graduada em enfermagem oncológica pela Universidade Federal de Goiás (UFG); Pós-graduada em Gestão de Clínicas nos Hospitais do SUS pelo Hospital Sírio Libanês e pós graduação em  Gestão de Sistemas e Serviço de Saúde com ênfase em hemoterapia  pela Universidade Federal da Bahia (UFBA).   
`,
        subjectResume: `
  Palestra sobre a situação atual dos transplantes no Brasil e em Goiás e sobre as etapas do processo de doação de órgãos e tecidos para transplantes.
`,
        img: '/assets/img/speakers/Katiuscia_Christiane.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:00 - 12:00',
          place: 'Auditório 1, área II'
        }
      },

      {
        name: 'Filipe Fraga',
        institution: 'SENAI Ítalo Bologna',
        speaking:
          'O mercado de automação industrial e como conseguir oportunidades',
        description: `Mestre em Sistemas Mecatrônicos pela Universidade de Brasília (UnB), Graduação em Engenharia de Controle e Automação pela Pontifícia Universidade Católica de Goiás (PUC-GO). Atualmente como Coordenador de Pesquisa (Núcleo de Estudo, Pesquisa e Extensão - NEPE) e Docente de Nível Superior pela Faculdade SENAI Ítalo Bologna. Pesquisador no ramo de robótica, visão computacional, automação e IA. Experiência em Industria nos setores de Manutenção/Utilidades e projetos industriais voltados para automação.   
`,
        subjectResume: `

`,
        img: '/assets/img/speakers/Filipe_Fraga.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '09:00 - 10:00',
          place: 'YouTube'
        }
      },

      {
          name: "Maycon Silva",
          institution: "Askblue",
          speaking: "De Goiânia para o mundo",
          description: `Maycon Silva, 34 anos, formado em Análise de Sistemas, militar do Exército Brasileiro por 4 anos, iniciou a carreira em Tecnologia da Informação em 2010. Atou em funções como suporte, desenvolvedor, analista de processos, analista de indicadores, consultor OutSystems, Tech Lead e gestor de projetos e atualmente mora em Portugal.
 
Apesar de ser gestor de uma área extremamente técnica, para além da tecnologia também tem um grande foco em gestão de pessoas.
 
Possui 6 certificações e 2 Especializações OutSystems, sendo elas: Associate Traditional Web Developer, Professional Tradional Web Developer, Expert Traditional Web Developer, Associate Reactive Developer, Associate Tech Lead, Professional Platform Ops Engineer, Architecture Specialist e Mobile Developer Specialist.
 
Integra o Comité Operacional da Askblue e é gestor de uma Unidade de Negócio técnica chamada Innovation Lab.
`,
          subjectResume: `Partilha de experiência de o que é sair do Brasil para morar fora e o foco em uma carreira sustentável imerso em uma cultura diferente.

      `,
          img: "/assets/img/speakers/Maycon_Silva.jpeg",
          customSize: "100%",
          datentime: {
            date: "10/05",
            time: "19:00 - 20:30",
            place: "Auditório 2, área II",
          },
        },

      {
        name: 'Ávinner Prado',
        institution: 'NATO Arquitetura',
        speaking:
          'A importância da interdisciplinaridade nos projetos e nos negócios',
        description: `Ávinner Prado, arquiteto e urbanista pela UFG - Universidade Federal de Goiás, empreendedor desde quando se entende por gente, empresário com empresas na área de arquitetura, design, engenharia e tecnologia. Sócio-Diretor na NATO, com foco no desenvolvimento de processos e novos negócios. 
`,
        subjectResume: `A importância da interdisciplinaridade nos projetos e nos negócios. 

    Mais do que desenvolver projetos, solucionamos problemas, criamos oportunidades de negócios e impactamos a vida das pessoas. Quando temos um time com diferentes habilidades, trabalhando juntos em prol de um objetivo em comum, criamos mais possibilidades e diferenciais estratégicos.
`,
        img: '/assets/img/speakers/Ávinner_Prado_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Microsoft Teams'
        }
      },

      {
        name: 'Paulo Gustavo Perini',
        institution: 'NATO Arquitetura',
        speaking:
          'A importância da interdisciplinaridade nos projetos e nos negócios',
        description: `Paulo Gustavo Perini, arquiteto e urbanista pela UFG - Universidade Federal de Goiás, criativo e solucionador desde criança, empresário com empresas na área de arquitetura, design, engenharia e tecnologia. Sócio-Diretor na NATO, com foco na criação de atmosferas. 
`,
        subjectResume: `A importância da interdisciplinaridade nos projetos e nos negócios. 

    Mais do que desenvolver projetos, solucionamos problemas, criamos oportunidades de negócios e impactamos a vida das pessoas. Quando temos um time com diferentes habilidades, trabalhando juntos em prol de um objetivo em comum, criamos mais possibilidades e diferenciais estratégicos.
`,
        img: '/assets/img/speakers/Paulo_Gustavo_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Microsoft Teams'
        }
      },

      {
        name: 'Vitor Paulo David da Silva Filho',
        institution: 'Hand Talk',
        speaking: 'O que são e o que fazem os Ux/Ui Designers',
        description: `Ux Designer focado em acessibilidade, Bacharelado em Design e MBA em Mídia Sociais. Designer carioca com muita determinação em aprender e crescer. Busco no Ux a oportunidade de impactar de forma positiva a vida das pessoas. Atualmente foco em Acessibilidade para realmente poder focar nas pessoas e criar produtos inclusivos.
`,
        subjectResume: `Nesta palestra iremos conversar um pouco sobre a área de atuação do Ux/Ui Design. Como é o dia a dia desses profissionais e o que é necessário para se tornar um Ux/Ui Designer. 
`,
        img: '',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '20:30 - 22:00',
          place: 'YouTube'
        }
      },

      {
        name: 'Alexandre Pontes de Queiroz',
        institution: 'Invillia/Pagseguro',
        speaking:
          'Domain-Driven Design - Principais Conceitos e algumas provocações',
        description: `Sou desenvolvedor back-end, com 2 anos de experiência em desenvolvimento web. Trabalho em algumas aplicações com grande tráfego (da ordem de milhões de visitas diárias). Possuo sólidos conhecimentos em programação orientada a objetos, containers (Docker, Kubernetes), Java (Spring Boot, Spring Data JPA, Spring Cloud, Spring Security), uso de tecnologias de Mensageria (RabbitMQ, Kafka) e de Observabilidade (New Relic, Splunk). Tenho interesse em escalabilidade de aplicações, infraestrutura, melhores práticas de desenvolvimento, bem como TDD e técnicas associadas como Clean Code e SOLID. 
              Trabalho há mais de 1 ano na Invillia em parceria com a Pagseguro. De outubro de 2019 a março de 2020 fui estagiário em documentação e testes de software na Siagri Software para o Agronegócio (hoje com o nome de Aliare). 
              Graduado na PUC GOIÁS no curso de Tecnologia em Análise e Desenvolvimento de Sistemas. 
              Cursando Especialização Lato-Sensu em Engenharia de Software com Java no Instituto INFNET/Rio de Janeiro.  
`,
        subjectResume: `O objetivo do tema a ser abordado é despertar nos discentes e docentes da academia a necessidade de estudo sistemático no que tange a modelagem de sistemas usando a metodologia Domain-Driven Design (DDD). Abordaremos as motivações do uso desta metodologia em contextos de manutenção de softwares legados e de projetos criados do zero. Falaremos também de como usar as ferramentas que as modelagens estratégica e tática oferecem para conceber softwares mais manuteníveis e com mais bem escritos.
`,
        img: '/assets/img/speakers/Alexandre_Queiroz_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '20:30 - 22:00',
          place: 'Auditório 2, área II'
        }
      },

      {
        name: 'Marcos Costa de Freitas',
        institution:
          'Marcos Costa – designer, artista e professor independente e PUC Goiás',
        speaking:
          'Mesa redonda: Povos primordiais – o resgate inédito da imagem de etnias desaparecidas',
        description: `Mestre em História pela PUC-GO na área de concentração de Cultura e Poder; Bacharel em Artes Visuais / Comunicação Visual,
               pela Universidade Federal de Goiás. Professor no ensino superior de design há 23 anos. Atuou como coordenador por 13 anos, 
               participou da elaboração de Planos de Desenvolvimento Institucional e Projetos Pedagógicos de vários cursos, atuou em CPA, CONSUP, CIPA e Conselho Técnico Científico de diversas IES. 
               Foi membro da Comissão Assessora de área do Exame Nacional de Desempenho dos Estudantes — Enade, de Tecnologia em Design Gráfico 2018 e 2019.
               Foi docente na UFG, PUC-GO e Faculdade Senac GO. Desenvolve pesquisas e trabalhos visuais a partir do resgate da imagem de povos originários do Brasil.   
`,
        subjectResume: `A palestra aborda o mesmo tema da exposição que deve abrir na mesma data. Os povos originários são guardiões de tradições de verdadeiros tesouros imateriais, infelizmente esta é uma ideia recente. No passado muito se perdeu por falta consciência do valor e de registros adequados. Em busca do resgate da memória perdida, o designer Marcos Costa iniciou um trabalho autoral para reconstruir imagens de alguns desses povos. 
            Será uma mesa redonda com mediação feita pela coordenadora do curso de Design, Genilda Alexandria, sobre o trabalho de pesquisa, levantamento histórico e reprodução artística em carvão dos desenhos de Marcos Costa. A participação da professora dra. Maria Cristina Nunes F. Neto fará o evento interdisciplinar, fortalecendo o vínculo com o fazer científico e com a conexão antropológica do tema. `,
        img: '/assets/img/speakers/Marcos_Costa.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:30 - 12:00',
          place: 'Auditório 2, área II'
        }
      },
      {
        name: 'Maria Cristina Nunes F. Neto',
        institution: '',
        speaking:
          'Mesa redonda: Povos primordiais – o resgate inédito da imagem de etnias desaparecidas',
        description: `Graduada em História pela Universidade Federal de Uberlândia (1995), Mestrado em História pela Universidade Estadual de Campinas (1998) e Doutorado em História pela Universidade Estadual de Campinas (2002). Atualmente é professora adjunto da Pontifícia Universidade Católica de Goiás (PUC-GO), no Mestrado de História, nos cursos de graduação de História e Relações Internacionais.   
`,
        subjectResume: `A palestra aborda o mesmo tema da exposição que deve abrir na mesma data. Os povos originários são guardiões de tradições de verdadeiros tesouros imateriais, infelizmente esta é uma ideia recente. No passado muito se perdeu por falta consciência do valor e de registros adequados. Em busca do resgate da memória perdida, o designer Marcos Costa iniciou um trabalho autoral para reconstruir imagens de alguns desses povos. 
            Será uma mesa redonda com mediação feita pela coordenadora do curso de Design, Genilda Alexandria, sobre o trabalho de pesquisa, levantamento histórico e reprodução artística em carvão dos desenhos de Marcos Costa. A participação da professora dra. Maria Cristina Nunes F. Neto fará o evento interdisciplinar, fortalecendo o vínculo com o fazer científico e com a conexão antropológica do tema. `,
        img: '/assets/img/speakers/Maria_Cristina.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:30 - 12:00',
          place: 'Auditório 2, área II'
        }
      },
      {
        name: 'José Assumpção Rodrigues de Almeida',
        institution: 'Superintendente de Tecnologia da Informação da ANAC',
        speaking: 'Agência Nacional de Aviação Civil',
        description: `Possui mestrado em Engenharia de Produção pela Universidade de São Paulo – USP (2009). Graduação em Engenharia de Produção pela Universidade de São Paulo – USP (2006). Atualmente é Gerente de Sistemas e Informações da Superintendência de Tecnologia da Informação da Agência Nacional de Aviação Civil - ANAC (2018-presente), e instrutor das disciplinas de Gestão de Processos com Foco em Inovação (2017-presente) e Análise e Melhoria de Processos (2012-presente) da Escola Nacional de Administração Pública - ENAP. Possui cargo efetivo de Especialista em Regulação de Aviação Civil da ANAC (2010-presente). Anteriormente foi Gerente Técnico de Escritório de Processos (2015-2018) e Gerente Técnico de Planejamento Institucional (2014-2015) da Superintendência de Planejamento Institucional da ANAC, Gerente Técnico de Processos e Capacitação (2012-2014) da Superintendência de Infraestrutura Aeroportuária da ANAC, Professor Substituto da Universidade Estadual Júlio de Mesquita Filho - UNESP (2008-2009), Gerente de Projetos de Manufatura Enxuta (2007-2009) da Proenx Consultoria e Treinamento Empresarial e Coordenador de Projetos de Manufatura Enxuta (2006-2007) da Hominiss Lean Consulting. Tem experiência na área de Gestão de Processos, Fluxos de Informação, Melhoria Organizacional, Desenvolvimento de Sistemas, Lean Office, Governança de Dados, Gestão por Competências e Regulação Pública.
        `,
        subjectResume: `
        `,
        img: '/assets/img/speakers/Jose_Assumpção.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:00 - 11:30 ',
          place: 'YouTube'
        }
      },
      {
        name: 'Luan Fernandes Barcelos',
        institution: 'Syncode Sistemas e Tecnologia',
        speaking: `"Na minha máquina funciona": Desenvolvendo em docker para nunca mais ter estes problemas.
        `,
        description: `Graduando em análise e desenvolvimento de sistemas na PUC-GO e Programador Backend Trainee com 2 anos de experiencia em desenvolvimento backend de aplicações web em python e infra. Experiencia em desenvolvimento e uso de linux.
        `,
        subjectResume: `Motivação de uso e introdução ao docker. Criando containers a partir de imagens oficiais. Criando suas próprias imágens. Comunicação de máquina local com docker e docker com docker. Encerramento com exemplo de uso real.
        `,
        img: '/assets/img/speakers/Luan_Fernandes_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '17:00 - 18:30',
          place: 'Laboratório 101, bloco C, área II'
        }
      },
      {
        name: 'Danielle Moreira',
        institution: 'GRUPO HAUS – Stefanini group',
        speaking: `Carreiras Digitais no grupo HAUS.
        `,
        description: `PEOPLE & CULTURE MANAGER, Professional & Self Coaching e Practitioner Programação Neurolinguística e Neurociência. 
        Mais de 10 anos ajudando as pessoas a se desenvolverem através do autoconhecimento. Experiência com Gestão de Talentos, HRBP, People Engagement, Performance Review, Employer Brand, Talent Acquisition e nos últimos 4 anos no processo de aquisições de novas empresas.
        `,
        subjectResume: `Se olharmos nos últimos 10 anos o quanto o consumidor evoluiu, procurando uma melhor experiência, buscando mais agilidade, bom atendimento e se tornando mais exigente, 
        e consequentemente os nossos clientes também. E aí que o Grupo Haus surge, a nossa missão é ajudar nossos clientes a se relacionarem melhor com seus consumidores. 
        E nosso DNA é composto por um amplo ecossistema de empresas, ventures e startups que oferecem as mais diversificadas soluções tecnológicas e inovadoras do mercado, investimos em transformação digital, 
        comunicação, cobertura de eventos, live commerce, gestão de branding, reputação da marca, gestão de crises, digital analytics e User Experience (UX).
        `,
        img: '/assets/img/speakers/Dani_Moreira_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '08:00 - 09:30',
          place: 'YouTube'
        }
      },
      {
        name: 'Hector Grecco',
        institution: 'CTO na Suney (@suneybr)',
        speaking: `Hackeando o transporte público: Como descobri uma falha de segurança que me deixaria andar de metrô de graça para sempre.
        `,
        description: `Engenheiro de Software com foco em Fintechs e Pesquisador de Segurança da Informação nas horas vagas com passagens por empresas como PagSeguro, 
                  Kovi e EBANX. Atualmente é co-fundador e CTO da Suney: uma fintech de crédito para energia solar. Formado em Análise de Sistemas (PUC/GO e UCB) e Pós-Graduando em Computação Forense e Perícia Digital (IPOG).
        `,
        subjectResume: `Os ouvintes aprenderão um pouco sobre como funciona a área de Segurança da Informação nas grandes empresas, alguns tipos de ataques hacker, como começar na área e por fim o caso de 
                  como hackeei o sistema de tickets de metrô de uma grande capital brasileira e quais seriam as consequências disso caso tivesse sido feito por um hacker malicioso.
        `,
        img: '/assets/img/speakers/Hector_Grecco_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '20:30 - 22:00',
          place: 'Auditório 1, área II'
        }
      },
      {
        name: 'Paulo Alexandre Bernardo dos Santos Nunes',
        institution: 'Askblue',
        speaking: `AskBlue, dos 0 aos 500
        `,
        description: `Paulo Nunes, 56 anos, iniciou a sua carreira no INESC, tendo posteriormente assumido posições de Manager na Link Consulting, Link Management Solutions e Link África, onde liderou vários projetos de Sistemas de Informação para o mercado Nacional, Cabo Verde a Angola.

        Antes de ter ingressado na askblue teve funções de Business Development Manager na Pessoas & Processos, onde desenvolveu a área internacional, tendo sido responsável vários projetos internacionais.
        
        Com uma carreira de 32 anos, desenvolvida na área de tecnologia de informação, consultoria, gestão de projetos e desenvolvimento de negócio, o Paulo Nunes frequentou a Pós-Graduação em Sistemas de Informação (POSI) ministrada pelo Instituto Superior Técnico, tendo feito a sua formação base no Instituto Português de informática.
        
        Conta, ainda, com as seguintes certificações : Chief Happiness Officer (CHO): Certified Project Manager pelo PMI; OutSystems Traditional Web Developer; OutSystems Mobile Developer, entre outras.
        
        Faz parte da Comissão Executiva da AskBlue, onde lidera a área Internacional e a Junior Talent Unit. 
        `,
        subjectResume: `AskBlue, Uma breve história de sucesso; O processo de internacionalização; Visão para 2025.
        `,
        img: '/assets/img/speakers/Paulo_Nunes.jpeg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '19:00 - 20:30',
          place: 'Auditório 1, área II'
        }
      },
      {
        name: 'José Hosanan Inácio',
        institution: 'Megasoft Informática',
        speaking: `Automação Residencial Uma Realidade de Futuro.
        `,
        description: `Graduado em Engenharia de Computação, PUC-GO, desenvolvedor de Sistemas Senior, Diretor Técnico da Megasoft Informática, empresa especializada em desenvolvimento de Sistemas para gestão pública e 
                  integração das Prefeituras aos Tribunais de Contas, Pós Graduando em Growth Hacking & Agile Mindset pela HSM University.
        `,
        subjectResume: `Abordagem dos conceitos de automação, internet das coisas, algumas novidades atuais e a tendência do mercado.
        `,
        img: '/assets/img/speakers/Jose_Hosanan_Provisorio.png',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '10:00 - 11:30 ',
          place: 'Auditório 3, área II'
        }
      },
      {
        name: 'Paula Leocadio',
        institution: 'Universidade de Cork - Irlanda',
        speaking: `Internacionalização na área de Design – série Trajetórias, com Paula Leocadio.
        `,
        description: `Atualmente phd researcher at university college cork. 
                  Certificada com proficiência em Comunicação Visual e Design pela Assabet Valley Regional Technical High School de Marlborough, MA nos EUA e Bacharel com excelência em Design Gráfico, Produtos e Ambientes pela PUC Goiás. 
                  Destacando também por méritos na movimentação estudantil da cidade. Idealizadora e organizadora da Semana Integrada de Design - seintegra! 2013 e Comissão Organizadora do Encontro Nacional de Estudantes de Design, N_Design 2014. 
                  Selecionada pelo Edital Conexão Cultura Intercâmbios realizado pelo Ministério da Cultura para sua capacitação profissional no curso Design Contemporâneo Italiano e Tendências no Istituto Europeu di Design Milano.
        `,
        subjectResume: `A palestra aborda a trajetória da egressa do curso de Design da PUC Goiás e suas experiências exitosas em atividades profissionais e acadêmicas internacionalmente.
Paula atualmente é doutoranda pela University College Cork e Cork University Hospital, Irlanda, tendo como foco de sua pesquisa o design de serviços para inovação na área da saúde. Foi bolsista do Ministério da Cultura do Brasil em 2015 para formação profissional em tendências e design no Instituto Europeo di Design Milano, Italia.
        `,
        img: '/assets/img/speakers/Paula_Leocadio_Provisorio.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '10:30 - 12:00',
          place: 'YouTube'
        }
      },
      {
        name: 'Nivia Barboza Ferreira',
        institution: 'Auckland University of Technology - Aotearoa/New Zealand',
        speaking: `Internacionalização na área de Design – série Trajetórias, com Nivia Boz
        `,
        description: `Nivia Ferreira, designer de UX/UI, pesquisadora e palestrante com interesse particular em Artes e Design. Possuo mestrado, com dissertação sobre game design e experiência do jogador, e sou doutorando, 
                  com tese sobre game design e neurociência, ambos em Design pela Universidade Anhembi Morumbi (UAM-SP), Brasil. Sou bacharel em Design de Comunicação pela Pontifícia Universidade Católica de Goiás (PUC-GO) com pesquisa prática sobre interfaces para plataformas de e-learning. 
        `,
        subjectResume: `A palestra aborda a trajetória da egressa do curso de Design da PUC Goiás e suas experiências exitosas em atividades profissionais e acadêmicas internacionalmente.
Nivia tem estado continuamente envolvida na investigação acadêmica. Faz parte do DEED – Design, Entertainment, and Education Research Cluster e do Global South Practices Design Research Cluster. Além disso, é uma das fundadoras do “Gaming for all”, um evento para promover a diversidade na indústria de jogos e na academia no Brasil.
        `,
        img: '/assets/img/speakers/Nivia_Boz.png',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '08:30 - 10:00',
          place: 'YouTube'
        }
      },
      {
        name: 'Faos Pereira Lopes',
        institution: 'Head de Experiência do Cliente (Cofundador iCrop)',
        speaking: `Irrigação de Alta Performance
        `,
        description: ``,
        subjectResume: ``,
        img: '/assets/img/speakers/Faos_Pereira.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '08:00 - 09:30',
          place: 'Microsoft Teams'
        }
      },
      {
        name: 'Roberto Márcio dos Santos',
        institution: 'PUC Goiás',
        speaking: `Navegação Aérea
        `,
        description: `Capitão RF Especialista em Aeronáutica - Controlador de Tráfego Aéreo - pela Força Aérea Brasileira (1981). Psicopedagogo, pela PUC-GOIÁS (2019). Possui experiência na área de Educação, 
                com ênfase em Métodos e Técnicas de Ensino para o ensino regular e para a educação especial, em particular, para autistas e outros problemas do desenvolvimento, e na área da Aviação, com ênfase em Formação de Pessoal, 
                Controle do Espaço Aéreo, Segurança Operacional, Segurança da Aviação Contra Atos de Interferência Ilícita (AESEC) Novas Tecnologias Satelitais (CNS-ATM), História da Aviação e Medicina Aeroespacial. `,
        subjectResume: `Planejamento de voo, procedimentos de saída, TOC, voo em rota, efeitos do vento, TOD, procedimentos de aproximação. Cálculos de razão de subida, descida, velocidades e estimados.`,
        img: '/assets/img/speakers/Roberto_Márcio.png',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '13:30 - 17:00',
          place: 'Auditório 3, área II'
        }
      },
      {
        name: 'Salmen Chaquip Bukzem',
        institution: 'PUC Goiás',
        speaking: `Planejamento de Voo
        `,
        speaking2:'Estrutura do Espaço Aéreo Brasileiro',
        description: `Graduado em Desenvolvimento de Sistemas de Informação, Especialista em Docência do Ensino Superior e em Gestão de Segurança da Informação e Comunicações pela Universidade de Brasília. Militar da reserva da Força Aérea onde exerceu a função de Supervisor e Instrutor de órgãos de controle de tráfego aéreo, com atuação na Prevenção e Investigação de Acidentes Aeronáuticos, Gerenciamento de Sistemas de Segurança Operacional, Inspeção em Prestadores de Serviço de Navegação Aérea e instrução em diversos cursos do SISCEAB. Atualmente é Coordenador do Curso de Ciências Aeronáuticas da Pontifícia Universidade Católica de Goiás. `,
        subjectResume: `Interpretação de cartas, ROTAER, análise e escolha dos aeródromos; escolha da rota a ser percorrida; análise da meteorologia atual e prevista; cálculos de performance da aeronave; preenchimento e envio do formulário de plano de voo, conferência da documentação necessária ao voo. `,
        img: '/assets/img/speakers/Salmen_Chaquip.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '13:30 - 17:00',
          place: 'Auditório 2, área II'
        }
      },
      {
        name: "Profa Luri Sabina Cosme da Silva Matos",
        institution: "PUC Goiás",
        speaking: `Uso da ferrramenta CANVA para apresentação de trabalho acadêmico 
        `,
        description: `Graduação em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Goiás e Design Gráfico pela Universidade Federal de Goiás, especialização e mestrado em Geotecnia e Construção Civil pela Universidade Federal de Goiás, MBA em Recursos Hídricos e Engenharia Sanitária. Trabalhou 12 anos no setor de obras da Pontifícia Universidade Católica de Goiás, foi professora substituta no Instituto Federal de Goiás - Campus Aparecida de Goiânia, foi Coordenadora de Projetos na Serpal Engenharia (SP), foi arquiteta na Navarrete Engenharia (GO), Coordenou o laboratório de Engenharia elétrica da PUC Goiás de 2018 a 2020. Atualmente é professora horista assistente na Pontifícia Universidade Católica de Goiás, assessora na Coordenação de Extensão da PUC Goiás (CDEX) e coordena a Comissão de Comunicação, gerencia as redes sociais dos programas de extensão.
        `,
        subjectResume: `O minicurso tem como objetivo apresentar o aplicativo CANVA como ferramenta para o desenvolvimento de trabalho acadêmico, enfatizar os tópicos mais relevantes para montar uma apresentação interessante e abordar sobre a postura adequada durante a explanação do trabalho.
        `,
        img: "/assets/img/speakers/Luri_Sabina.jpg",
        customSize: "100%",
        datentime: {
          date: "09/05",
          time: "15:00 - 16:30",
          place: "Microsoft Teams",
        },
      },
      {
        name: "Prof. Sandeco Macedo",
        institution: "",
        speaking: `Campus Party Goiás 2 – Reiniciando tudo em 3, 2, 1 
        `,
        description: `Embaixador Campus Party Brasil.  
        Professor e Pesquisador em Inteligência Artificial e Data Science pelo Instituto Federal de Goiás - IFG.
        Coordenador da Revista Científica Campus Party
        Mentor e Apresentador do Canal Sandeco - Inteligência Artificial Descomplicada no youtube.
        `,
        subjectResume: `No final da palestra ocorrerá um sorteio de 15 ingressos para Campus Party Goiás 2.
        `,
        img: "/assets/img/speakers/Sandeco_Macedo.jpeg",
        customSize: "100%",
        datentime: {
          date: "11/05",
          time: "10:00-11:30",
          place: "Auditório 1, área II",
        },
      },
      {
        name: "Prof. Msc. Carbio Almeida Waqued",
        institution: "Coordenador Incubadora PUC GOIÁS",
        speaking: `Como a Incubadora PUC Goiás pode transformar a sua ideia em um projeto real
        `,
        description: `Presidente da Rede Goiana de Inovação, Mentor de carreira,  Administrador, Especialista em Marketing e mestre em Engenharia de Produção. Atualmente é Consultor da Merkado de Ideias Estratégicas, atendendo empresas de Serviços, Indústria e Varejo Goiano. Professor de graduação, pós graduação, coordenador da Incubadora de Empresas na PUC Goiás. Ministra aulas de especialização pelo Brasil.Tem experiência na área de Administração, Desenvolvimento de pessoas, Comunicação e Publicidade. Palestrante na área de Mentoria de carreira, potencial humano e Marketing.
        `,
        subjectResume: `A incubadora PUC Goiás é uma instituição que auxiliará micro e pequenas empresas nascentes ou que estejam em operação, que tenham como principal característica a oferta de produtos e serviços com significativo grau de diferenciação. Ela oferece suporte técnico, gerencial e formação complementar ao empreendedor e facilitará o desenvolvimento tecnológico e o acesso a mercados e a investimentos.
        As empresas que buscarem a incubadora PUC Goiás, além de receberem suporte gerencial, administrativo e mercadológico, recebem apoio técnico para o desenvolvimento de sua tecnologia. Com isso, o empreendimento pode ser acompanhado desde a fase de ideação, onde o conceito e o modelo de negócio ainda não estão claros e precisam ser validados pelo mercado, até a consolidação de suas atividades, onde estarão aptas a serem graduadas, ou seja, obter a emancipação da incubadora com condições competitivas de ir ao mercado.
        Nossa incubadora de empresas favorece ao empreendedor, por meio de assessorias: Gestão empresarial; Gestão tecnológica; Comercialização de produtos e serviços; Contabilidade; Marketing; Assistência jurídica entre outras.
        
        `,
        img: "/assets/img/speakers/Carbio_Almeida.jpg",
        customSize: "100%",
        datentime: {
          date: "09/05",
          time: "20:30",
          place: "YouTube",
        },
      },
      {
        name: "João Asmar Júnior",
        institution: "Emater Goiás",
        speaking: `A Importância da Agronomia no Cenário do Agronegócio Brasileiro e os Desafios e perspectivas da Emater para Goiás 
        `,
        description: `Engenheiro Agrícola pela Universidade Estadual de Goiás (2009). Diplomado pela ASSOCIAÇÃO DOS DIPLOMADOS DA ESCOLA SUPERIOR DE GUERRA, com o XXII curso de Política e Estratégia em 2009. Pós-graduado Formação de Professores e Didática e Gestão Educacional. Pós-graduado em Logística e Distribuição de Produtos. Mestre em Ciências Ambientais, na área de Sociedade Tecnologia e Meio Ambiente. Doutorando em Ciências Ambientais, na área de Sociedade Tecnologia e Meio Ambiente. Professor no Centro Universitário Ânima - Jataí/GO. Diretor de Pesquisas Agropecuárias da Emater Goiás.  
        `,
        subjectResume: `
        `,
        img: "/assets/img/speakers/Joao_Asmar.png",
        customSize: "100%",
        datentime: {
          date: "11/05",
          time: "08:00 - 09:30",
          place: "Microsoft Teams",
        },
      },
      {
        name: 'Fernando Felipe',
        institution: 'Plano D Design de produtos',
        speaking: 'Design de mobiliário - vivências, experiências profissionais e sintonias entre arquitetura e design ',
        description: `Plano D Design de produtos  

        Design autoral brasileiro. 
        
        Através da experiênca proporcionada pelos produtos, acreditamos ter a capacidade de poder interferir positivamente na vida e no propósito das pessoas. Pessoas que movem e são o sustento físico do nosso imenso universo concreto e criativo. 
        
        Viver design, respirar design, conviver com o design é entender o mundo e como ele funciona, como podemos melhorá-lo.  
        
        O design é humano e ser designer é uma escolha feita por amor e prazer de ver acontecer e fazer funcionar. Isso é ser Plano D. `,
        subjectResume: `A palestra aborda o case do desenvolvimento de peças com design autoral e projeto inovador para a ambientação de um espaço Casa Cor trabalhado por meio da arquitetura de ambientes. Com este case em apresentação, os palestrantes abrem diálogo sobre suas vivências, experiências profissionais e o chão de fábrica da produção de peças e artefatos de design. 
        `,
        img: '/assets/img/speakers/Fernando_Felipe.png',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '08:30 - 10:00',
          place: 'Auditório Marisa Roriz, área III'
        }
      },
      {
        name: 'Thiago Ribeiro',
        institution: 'Plano D Design de produtos',
        speaking: 'Design de mobiliário - vivências, experiências profissionais e sintonias entre arquitetura e design ',
        description: `Plano D Design de produtos  

        Design autoral brasileiro. 
        
        Através da experiênca proporcionada pelos produtos, acreditamos ter a capacidade de poder interferir positivamente na vida e no propósito das pessoas. Pessoas que movem e são o sustento físico do nosso imenso universo concreto e criativo. 
        
        Viver design, respirar design, conviver com o design é entender o mundo e como ele funciona, como podemos melhorá-lo.  
        
        O design é humano e ser designer é uma escolha feita por amor e prazer de ver acontecer e fazer funcionar. Isso é ser Plano D. `,
        subjectResume: `A palestra aborda o case do desenvolvimento de peças com design autoral e projeto inovador para a ambientação de um espaço Casa Cor trabalhado por meio da arquitetura de ambientes. Com este case em apresentação, os palestrantes abrem diálogo sobre suas vivências, experiências profissionais e o chão de fábrica da produção de peças e artefatos de design. 
        `,
        img: '/assets/img/speakers/Thiago_Ribeiro.png',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '08:30 - 10:00',
          place: 'Auditório Marisa Roriz, área III'
        }
      },
      {
        name: 'Prof. Dr. Jefferson Lins da Silva',
        institution: 'EESC/USP',
        speaking: 'Aplicação de geossintéticos em pavimentação rodoviária',
        description: `Professor Associado da USP na Escola de Engenharia de São Carlos (EESC) junto ao Departamento de Geotecnia (SGS). 
        Bolsista de Produtividade em Pesquisa do CNPq - Nível 2
        Responsável pelo Laboratório de Geossintéticos da EESC/USP. 
        Coordenador do Curso de Engenharia Civil da EESC/USP desde 2019. 
        Vice-Chefe do Departamento de Geotecnia (SGS) da EESC/USP desde 2021. 
        Coordenador da Comissão de Estudo Especial de Geossintéticos da ABNT de 2014 a 2020.
        `,
        subjectResume: `
        `,
        img: '/assets/img/speakers/Jefferson_Lins.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '20:00 - 21:00',
          place: 'Microsoft Teams'
        }
      },
      {
        name: 'Profa. Dra. Marta Pereira da Luz',
        institution: 'POLI/PUC Goiás',
        speaking: 'Aplicação de geossintéticos em pavimentação rodoviária',
        description: `Professora Adjunta PUC Goiás 
        Bolsista de Produtividade em Pesquisa do CNPq - Nível 2
        Secretária Geral do Núcleo Regional Centro-Oeste da Associação Brasileira de Mecânica dos Solos e Engenharia Geotécnica - NRCO ABMS
        Pós-Doutorado em Geotecnia e Construções Sustentáveis - Heriot-Watt University Reino Unido.
        `,
        subjectResume: `
        `,
        img: '/assets/img/speakers/Marta_Pereira.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '20:00 - 21:00',
          place: 'Microsoft Teams'
        }
      },
      {
        name: 'Eng. Civil Paulo Rocha',
        institution: 'Geo Soluções',
        speaking: 'Aplicação de software para análise de estabilidade de taludes',
        description: `Engenheiro Civil graduado pela Escola de Engenharia de São Carlos EESC USP, Pós Graduado em Gerenciamento de Projetos PMI, e aluno do programa de pós graduação da UFSCar
    
        Professor de Mecânica dos Solos, Obras de Terra, entre outras disciplinas de 2014 a 2019.
        
        Trabalha com geossintéticos desde 2007, dimensionando, especificando, ensaiando, avaliando, apresentando e instalando estes materiais em toda a América Latina.
        
        Especialista em geossintéticos na Geo Soluções Engenharia Geotécnica.    
        `,
        subjectResume: `
        `,
        img: '/assets/img/speakers/Paulo_Rocha.jpg',
        customSize: '100%',
        datentime: {
          date: '11/05',
          time: '19:00 - 20:00',
          place: 'Microsoft Teams'
        }
      },
      {
        name: 'Victor Honorato Cunha ',
        institution: 'Norven',
        speaking: 'Mercado e competências dos profissionais de regulação do setor elétrico',
        description: `Graduado em Engenharia Elétrica pela Pontifícia Universidade Católica de Goiás. Foi bolsista FAPEG como aluno de iniciação científica na área de planejamento de redes de telecomunicações e algoritmos genéticos. Fez seu estágio curricular no Instituto Senai de Tecnologia em Automação-Goiás, com foco na área de eletrônica e sistemas de controle. Realizou a transição da área técnica para gestão como estagiário na ORBIS Engenharia Clínica, desempenhando atividades gestão dos equipamentos de saúde. No setor elétrico iniciou suas atividades como estagiário na Setra Soluções, consultoria especializada na gestão da Base de Remuneração Regulatória (BRR) de distribuidoras de energia elétrica. Hoje, ainda na Setra soluções, segue como especialista de BRR realizando atividades de apoio na tomada de decisões estratégicas.     
        `,
        subjectResume: `Nesta palestra será abordada a estrutura do setor elétrico, os tipos de regulação existentes e o perfil do profissional desse setor. Ao final do evento os ouvintes serão capazes de responder as seguintes perguntas: 
1-Regulação o que é isso e por que é importante? 
2-Por que existe apenas uma concessionária de energia? 
3-Quais oportunidades existem nesse setor? 
4-Quais habilidades necessárias para aproveitar essas oportunidades?
        `,
        img: '/assets/img/speakers/Victor_Honorato.jpeg',
        customSize: '100%',
        datentime: {
          date: '11/05',
          time: '09:00 - 10:00',
          place: 'Auditório 3, área II'
        }
      },
      {
        name: 'Cleber Margarida',
        institution: 'LG Lugar de Gente',
        speaking: 'Como Começar sua carreira na tecnologia.',
        description: `Cleber Margarida é desenvolvedor Backend .Net & Instrutor de Programação Avançada na LG Lugar de Gente.
        `,
        subjectResume: `Cleber ministrará a palestra "Como Começar sua carreira na tecnologia", que irá abordar assuntos que todo o inciante em programação deve seguir para garantir sucesso no seu aprendizado. Etapas que evitem você travar ou se desmotivar no caminho.
        `,
        img: '/assets/img/speakers/Cleber_Margarida.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Auditório 3, área II'
        }
      },
      {
        name: 'Matheus Dias Ferlin Moura',
        institution: 'LG Lugar de Gente',
        speaking: 'Depoimento sobre experiência como estagiário e desenvolvedor.',
        description: `Aluno do 8o. período do curso de Engenharia de Computação, estagiário por 5 meses e Desenvolvedor há 10 meses na LG.
        `,
        subjectResume: `Daniel ministrará a palestra "Aprendizado direcionado ao mercado de TI", o qual levantará questionamentos, reflexões e buscará direcionar o público para a solução das seguintes dúvidas: “O que de fato estudar para o mercado de TI? O que eu estudo na faculdade é suficiente e aplicável?”, “Quando eu sei que estou pronto para iniciar no mercado de trabalho?”
        `,
        img: '/assets/img/speakers/Matheus_Dias.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Auditório 3, área II'
        }
      },
      {
        name: 'Cinthia Gracielle Martins',
        institution: 'LG Lugar de Gente',
        speaking: 'Programa de Estágio na LG Lugar de Gente.',
        description: `Cinthia Gracielle Martins é psicóloga, possui 10 anos de atuação com Recrutamento e Seleção e há 1 ano e 5 meses na LG como Tech Recruiter.
        `,
        subjectResume: `
        `,
        img: '/assets/img/speakers/Cinthia_Gracielle.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Auditório 3, área II'
        }
      },
      {
        name: 'Ana Paula Santos Bernardo',
        institution: 'LG Lugar de Gente',
        speaking: 'Programa de Estágio na LG Lugar de Gente.',
        description: `Ana Paula Santos Bernardo é psicóloga, possui 8 anos de experiência, 2 anos na LG como Supervisora de Atração e Seleção.
        `,
        subjectResume: `Cinthia, Ana Paula e Adrielly falarão sobre o Programa de Estágio na LG Lugar de Gente.`,
        img: '/assets/img/speakers/Ana_Paula.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Auditório 3, área II'
        }
      },
      {
        name: 'Adrielly Betania Alves Barbosa',
        institution: 'LG Lugar de Gente',
        speaking: 'Programa de Estágio na LG Lugar de Gente.',
        description: `Adrielly Betania Alves Barbosa é graduanda do 7º período de psicologia pela UNIFAN. Atuação em RH desde 2020, atuando nas empresas Big Lar Utilidades e LG lugar de gente. Desde janeiro de 2021 atua como estagiária de Psicologia na LG lugar de gente realizando processos de Recrutamento e Seleção.
        `,
        subjectResume: `Cinthia, Ana Paula e Adrielly falarão sobre o Programa de Estágio na LG Lugar de Gente.`,
        img: '/assets/img/speakers/Adrielly_Betania.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00 - 20:30',
          place: 'Auditório 3, área II'
        }
      },
    ]
  }

  private goToSubscription() {
    this.$router.push('/cadastro')
  }

  private goToSubmission() {
    this.$router.push('/orientacoes')
  }
}
</script>

<style>
li {
  list-style-type: none !important;
}

#sobre p {
  font-size: 24px;
}

#inscricoes span {
  font-size: 18px;
}

.line {
  margin-top: 42px;
  justify-content: center;
  z-index: 100;
}

.call p {
  text-transform: uppercase;
}

.call p {
  font-size: 32px;
  font-weight: bold;
  color: #ddd;
}

.subcall {
  justify-content: center;
  padding: 0 15px;
}

.subcall p {
  font-size: 14px;
  color: #ddd;
}

.button-actions {
  margin-top: 20px;
}

.subcall > div {
  max-width: 900px !important;
}

.btn-submission {
  background-color: transparent !important;
  color: #eee !important;
  border: 1px solid #eee;
}

.line > div {
  max-width: 1150px !important;
}

.line hr {
  border: 1px solid #4e6083;
}

.rights-reserved p {
  color: #eee;
  padding: 20px 0 5px;
  justify-content: start;
}

#quando {
  font-size: 32px;
  font-weight: 600 !important;
}

.onde {
  font-size: 24px;
}

@media screen and (max-width: 576px) {
  .onde {
    padding: 0 20px !important;
  }
}

div > hr {
  color: #cecece;
}

.footer-subscription {
  background-color: #13264a;
  /* background-color: white; */
}

div > span {
  color: white;
}

/* .v-parallax__image {
  transform: none !important;
  width: 100% !important;
} */

/* Higor's resources */

.banner .logo {
  position: absolute;
  width: auto;
  height: 480px;
  left: -50px;
  bottom: -80px;
  z-index: 101;
  filter: brightness(2);
}
.banner .back {
  z-index: 100;
  filter: blur(1px);
}
@media screen and (max-width: 768px) {
  .banner {
    padding: 30px 100px !important;
  }
  .banner .logo {
    display: none;
  }
}
@media screen and (max-width: 576px) {
  .banner {
    padding: 30px 5px !important;
  }
}

#sobre p {
  text-align: justify;
  font-size: 1.2em;
}

.icontitle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
}
.icontitle > i {
  font-size: 18pt;
  margin-right: 15px;
}
.icontitle > h5 {
  margin: 0;
  margin-top: 4px;
}

#whenwhere {
  display: flex;
  align-items: center;
  text-align: center;
}
#whenwhere > div {
  max-width: 1170px;
  margin: 0 auto !important;
  display: inline-grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas: 't1 t2' 'c1 c2' 'nn cc2';
}
#whenwhere > div > .icontitle {
  grid-area: t1;
}
#whenwhere > div > .icontitle:nth-child(3) {
  grid-area: t2;
}
#whenwhere > div #onde-endereco {
  grid-area: cc2;
}
@media screen and (max-width: 768px) {
  #whenwhere > div {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto);
    grid-template-areas: unset;
  }
  #whenwhere > div > .icontitle {
    grid-area: unset !important;
  }
  #whenwhere > div > .icontitle:nth-child(3) {
    margin-top: 22px;
  }
  #whenwhere > div #onde-endereco {
    grid-area: unset !important;
  }
  #whenwhere > div > span:nth-child(5) {
    margin-top: 5px;
  }
}
@media screen and (max-width: 425px) {
  #whenwhere > div span:nth-child(2) {
    font-size: 28px;
  }
  #whenwhere > div > div:nth-child(4) {
    font-size: 18px;
  }
  #whenwhere > div > div:nth-child(4) > div {
    font-size: inherit;
  }
}
</style>
