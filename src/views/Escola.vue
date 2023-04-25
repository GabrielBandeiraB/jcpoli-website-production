<template>
  <div class="obs-page view">
    <PhotoHeader
      title="Escola"
      image="/assets/img/puc_sub.jpeg"
      description="Informações da Escola"
    ></PhotoHeader>

    <Main>
      <Paragraph title="Cursos">
        A Escola Politécnica e de Artes da Pontifícia Universidade Católica de Goiás (PUC
        Goiás) foi criada em agosto de 2021 com a junção de três escolas: Escola
        de Artes e Arquitetura, Escola de Ciências Exatas e da Computação e
        Escola de Engenharia. Atualmente são oferecidos 18 cursos de graduação,
        sendo 12 presenciais, 4 semipresenciais e 2 ensino à distância

        <div class="list-container">
          <ul class="list-cursos">
            <h5>Presenciais</h5>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/agronomia/"
              target="_blank"
            >
              <li>
                Agronomia
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/analise-e-desenvolvimento-de-sistemas/"
              target="_blank"
            >
              <li>
                Análise e Desenvolvimento de Sistemas
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/arquitetura-e-urbanismo/"
              target="_blank"
            >
              <li>
                Arquitetura e Urbanismo
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/ciencias-aeronauticas/"
              target="_blank"
            >
              <li>
                Ciências Aeronáuticas
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/ciencia-da-computacao/"
              target="_blank"
            >
              <li>
                Ciência da Computação
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/design/"
              target="_blank"
            >
              <li>
                Design
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-civil/"
              target="_blank"
            >
              <li>
                Engenharia Civil
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-de-controle-e-automacao/"
              target="_blank"
            >
              <li>
                Engenharia de Controle e Automação
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-de-computacao/"
              target="_blank"
            >
              <li>
                Engenharia de Computação
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-eletrica/"
              target="_blank"
            >
              <li>
                Engenharia Elétrica
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/engenharia-de-producao/"
              target="_blank"
            >
              <li>
                Engenharia de Produção
              </li>
            </a>
          </ul>
          <ul class="list-cursos">
            <h5>SemiPresenciais</h5>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/engenharia-eletrica-ead"
              target="_blank"
            >
              <li>
                Engenharia Elétrica
              </li>
            </a>

            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/engenharia-civil-ead"
              target="_blank"
            >
              <li>
                Engenharia Civil
              </li>
            </a>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/engenharia-de-controle-e-automacao-ead"
              target="_blank"
            >
              <li>
                Engenharia de Controle e Automação
              </li>
            </a>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/engenharia-mecanica-ead"
              target="_blank"
            >
              <li>
                Engenharia Mecânica
              </li>
            </a>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/engenharia-de-producao-ead"
              target="_blank"
            >
              <li>
                Engenharia de Produção
              </li>
            </a>
          </ul>
          <ul class="list-cursos">
            <h5>Ensino à Distância</h5>
            <a
              href="https://ead.pucgoias.edu.br/cursos-graduacao/analise-e-desenvolvimento-de-sistemas-ead"
              target="_blank"
            >
              <li>
                Análise e Desenvolvimento de Sistemas
              </li>
            </a>
            <a
              href="https://www.pucgoias.edu.br/cursos/graduacao/big-data-e-inteligencia-artificial-ead/"
              target="_blank"
            >
              <li>
                Big Data e Inteligência Artificial
              </li>
            </a>
          </ul>
        </div>
        Além de oferecer os seus próprios cursos, a Escola Politécnica e de Artes também é
        responsável pela área de Física, Matemática e Química com a criação do
        Núcleo de Pesquisa, Ensino e Extensão de Ciências Exatas. Escola Politécnica e de Artes 
        oferece o programa de pós-graduação intitulado Mestrado de
        Engenharia de Produção e Sistemas(
        <a
          id="mepros"
          href="https://sites.pucgoias.edu.br/pos-graduacao/mestrado-engenharia-producao-sistemas/"
          target="_target"
          >MEPROS</a
        >
        ), criado em 2009. Atualmente oferece vários cursos de especializações e
        extensão.
        <br />
        Um dos principais objetivos da Escola é a qualificação da pesquisa e a
        Jornada Científica tem por objetivo oportunizar e estimular os
        discentes, egressos, docentes de graduação e pós-graduação a
        participarem da produção e divulgação do conhecimento científico.
      </Paragraph>
    </Main>

    <Organization />
    <Main>
      <Paragraph title="palestrantes">
        <Speakers :speakers="speakers" :paginate="1" />
      </Paragraph>

      <!--<Supporters /> -->
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PhotoHeader from '@/components/organization/PhotoHeader.vue'
import Main from '@/components/organization/Main.vue'
import Paragraph from '@/components/organization/Paragraph.vue'
import HorizontalList from '@/components/organization/HorizontalList.vue'
import Speakers from '@/components/organization/Speakers.vue'
import Columns from '@/components/organization/Columns.vue'
import Organization from '@/components/organization/Names.vue'
//import Supporters from '@/components/organization/Supporters.vue'
//import { speakers_list } from '@/storage/programacao/speakers'

@Component({
  components: {
    PhotoHeader,
    Main,
    HorizontalList,
    Paragraph,
    Speakers,
    Columns,
    Organization
    //Supporters
  }
})
export default class Escola extends Vue {
  private speakers: any = null

  constructor() {
    super()
    this.speakers = [
        {
        name: 'Prof. Me. Alberto Vilela Chaer',
        institution: 'PUC Goiás',
        speaking: 'Aplicações em Engenharia utilizando o software Smath Solver',
        description: `O minicurso “Aplicações em Engenharia utilizando o software Smath Solver” tem como objetivo apresentar as possibilidades que este programa – gratuito a partir de download em página oficial na web (https://en.smath.com/view/SMathStudio/summary) – oferece para elaboração de cálculos e geração da respectiva memória de cálculo de um problema qualquer que tenha sua resolução a partir de utilização de expressões matemáticas.  Trata-se de um programa bastante robusto e amplamente conhecido pelo nome de “SMath Studio” utilizado em universidades do Brasil e exterior, sendo uma ferramenta de sedimentação do processo ensino-aprendizagem, através da simulação dos eventos envolvidos em um cálculo. O benefício da utilização deste programa é utilizar da rapidez dos cálculos feitos por meio da máquina, cujas operações e lógica são conduzidas pelo desenvolvimento do usuário, para que se possa tomar conclusões e decisões a partir dos resultados. Uma ferramenta que se constitui em um “caderno de exercícios” de Professores, Estudantes e Profissionais de Engenharia. Recomenda-se que os participantes do referido minicurso acessem a sessão por meio de computador pessoal (sistema operacional Windows e Linux; também por versão Open in browser) para melhor rendimento durante a preleção e atividades propostas, apesar de que o software também tem sua versão gratuita para ser instalada em aparelho celular no sistema Android.`,
        subjectResume: `Mestre em Engenharia Civil / Estruturas pela Pontifícia Universidade Católica do Rio de Janeiro (1991). Graduado em Engenharia Civil pela Universidade Federal de Goiás (1986). Atualmente é Professor Adjunto-I do Curso de Engenharia Civil da Escola de Engenharia da Pontifícia Universidade Católica de Goiás (desde 1989) e Professor Assistente-I do Curso de Engenharia Civil da Escola de Engenharia Civil da Universidade Federal de Goiás (desde 2009). Tem experiência na área de Engenharia Civil, com ênfase em Estruturas de Concreto Armado e Protendido (Experiência Acadêmica: Magistério do Ensino Superior; Experiência Profissional: Elaboração de Projetos de Estruturas em Concreto Armado e Protendido; Consultoria em Estruturas). Poeta. Escreve poemas desde 1980. Artista visual. Produz poesia visual desde 2005.`,
        img: '/assets/img/speakers/albertovilela.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '14:30-17:30',
          place: 'Online: Microsoft Teams'
        }
      },

      {
        name: 'Alessandro Miguel de Oliveira',
        institution: 'PUC Goiás',
        speaking: 'Ferramentas computacionais para o desenho de projeto de arquitetura',
        description: `Uso do AutoCAD para o desenho de projeto, geometria descritiva, elementos constitutivos das edificações e representação arquitetônica.`,
        subjectResume: `Graduado em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Goiás (2008) e pós-graduado lato sensu em Projeto de Arquitetura pela Faculdade Ávila de Ciências Humanas e Exatas (2011). Atualmente exerce a atividade de docência como Professor Horista Auxiliar I pela Pontifícia Universidade Católica de Goiás desde 2014, nas disciplinas: desenho projetivo; expressão e representação; informática aplicada à arquitetura e projeto arquitetônico; e atua como arquiteto em escritório próprio. Tem experiência em Arquitetura e Urbanismo nas áreas de docência em arquitetura, arquitetura hospitalar, industrial, residencial, arquitetura de interiores, arquitetura promocional, representação gráfica, informática aplicada à Arquitetura e Urbanismo e computação gráfica.`,
        img: '/assets/img/speakers/alessandromiguel.jpg',
        customSize: '100%',
        datentime: {
          date: '08, 09 e 10/05',
          time: '14:00-17:00',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Lucas Ribeiro Camargo Mendes',
        institution: 'MRV Engenharia',
        speaking: 'Processo construtivo da parede de concreto e produtividade.',
        description: `Processo construtivo da parede de concreto e produtividade.`,
        subjectResume: `Engenheiro Civil, formado na Uni-Goiás em 2019/2, atuando a 7 anos na construção civil e a 2 anos como Engenheiro residente de obras em parede de concreto pela MRV ENGENHARIA. Pós-Graduando em Gestão de Projetos e Processos pelo IPOG.`,
        img: '/assets/img/speakers/lucasribeiro.png',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '09:00-10:30',
          place: 'Presencial: A definir'
        }
      },


      {
        name: 'Karine de Souza Costa',
        institution: 'URBS Connect',
        speaking: 'Mesa Bistrô URBS',
        description: `Mesa Bistrô URBS`,
        subjectResume: `Formada em Recursos Humanos pela Uni-Anhanguera. Pós -graduada em RH 4.0. Responsável pela área de treinamentos da URBS Connect.`,
        img: '/assets/img/speakers/karinesouza.png',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '19:00-20:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Jefferson Lins',
        institution: 'Universidade de São Paulo',
        speaking: 'Geossintéticos aplicados a Engenharia Civil.',
        description: `Geossintéticos aplicados a Engenharia Civil.`,
        subjectResume: `Professor Associado da USP, Depto. de Geotecnia da EESC. Graduado em Engenheiro Civil - UFAL (2004), Mestre em Geotecnia - EESC/USP (2006), Doutor em Eng. Civil (Eng. de Estruturas) - EESC/USP (2011) com período sanduíche na University of Nebraska-Lincoln - EUA (2010). Pós-Doutor em Eng. Civil pela EESC/USP (2013) e pela Universidade do Porto - Portugal (2017). Livre-docente em Geotecnia pelo SGS-EESC-USP (2019). Leciona para os cursos de graduação em Engenharia Civil e Engenharia Ambiental sobre temas relacionados à Mecânica dos solos e Geossintéticos. É professor permanente no Programa de Pós-Graduação em Geotecnia e no Programa de Pós-graduação em Engenharia de Transportes, ambos na EESC/USP. Responsável pelo Laboratório de Geossintéticos da EESC/USP. Coordenador do Curso de Engenharia Civil da EESC/USP desde 2019. Vice-Chefe do Departamento de Geotecnia (SGS) da EESC/USP desde 2021. Coordenador da Comissão de Estudo Especial de Geossintéticos da Associação Brasileira de Normas Técnicas (ABNT) de 2014 a 2020. Parecerista de agências de fomento e de congressos e revistas nacionais e internacionais. Membro de sociedades de cunho científico e tecnológico, cultural e profissional: ABMS, ANPET, IGS e ABRATEC.`,
        img: '/assets/img/speakers/jeffersonlins.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '19:00 - 20:30',
          place: 'Online: A definir'
        }
      },

      {
        name: 'Engº André Luiz Dias da Silva',
        institution: 'DN Engenharia',
        speaking: 'Engenharia de Segurança no Agronegócio',
        description: `A engenharia de segurança no Agronegócio é importante para garantir a segurança dos trabalhadores e do ambiente de trabalho, bem como para aumentar a eficiência e a produtividade das atividades agrícolas. Conta com planejamento de medidas de prevenção e controle de incêndios nas áreas de plantio e armazenamento de produtos agrícolas, Desenvolvimento de estratégias para prevenção de acidentes com máquinas agrícolas, Implantação de medidas de segurança alimentar, como a adoção de boas práticas agrícolas e o controle de qualidade dos alimentos produzidos, Projeto de instalações de armazenamento de produtos agrícolas seguras e eficientes, incluindo sistemas de ventilação e controle de temperatura.`,
        subjectResume: `Engenheiro de Controle e Automação e Engenheiro de Segurança do Trabalho que atua na DN Engenharia com ênfase em segurança do trabalho no Agronegócio. `,
        img: '/assets/img/speakers/andreluiz.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '08:00-09:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Engª Agrª Scheila Ronconi Da Rolt',
        institution: 'Araguaia produtos agropecuários ',
        speaking: 'Controle fitossanitário em hortaliças',
        description: `Controle fitossanitário em hortaliças é o conjunto de medidas adotadas para proteger as plantas cultivadas de doenças, pragas e outros agentes que possam afetar sua saúde e qualidade. Essas medidas podem incluir a adoção de práticas culturais adequadas, como rotação de culturas e manejo do solo, o uso de defensivos agrícolas quando necessário e a adoção de estratégias de controle biológico e integrado de pragas. O objetivo do controle fitossanitário é garantir a saúde e a produtividade das plantas, bem como a segurança alimentar e a proteção do meio ambiente. Além disso, o controle fitossanitário também pode contribuir para a sustentabilidade da produção agrícola, reduzindo o uso de defensivos químicos e promovendo práticas preventivas e curativas mais sustentáveis e ecologicamente corretas.`,
        subjectResume: `Engenheira Agrônoma, Coordenadora Técnica de Hortifruti - GO/MT na empresa Araguaia produtos agropecuários.`,
        img: '/assets/img/speakers/scheilaronconi.jpg',
        customSize: '100%',
        datentime: {
          date: '08/05',
          time: '08:00-09:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Lorenzo Czepak Gaston e Ana Makowich ',
        institution: 'Drones on Farm e MIP-UFG ',
        speaking: 'Uso de drones para liberação de macrobiológicos ',
        description: `O uso de drones para liberação de macrobiológicos é uma técnica inovadora que tem sido cada vez mais utilizada na agricultura para controle biológico de pragas. Macrobiológicos são organismos vivos, como insetos, ácaros e nematoides, que são utilizados para o controle de pragas agrícolas, em substituição aos agrotóxicos.
        Os drones são utilizados para liberar os macrobiológicos nas áreas de cultivo de forma mais eficiente e precisa, em comparação com a liberação manual. Com o uso dos drones, é possível alcançar áreas de difícil acesso e distribuir os macrobiológicos de maneira uniforme, reduzindo o desperdício e aumentando a eficácia do controle biológico.
        Além disso, o uso de drones para liberação de macrobiológicos também pode reduzir os custos e o tempo necessários para a aplicação dos organismos de controle biológico, em comparação com as técnicas convencionais. A técnica também pode contribuir para a redução do uso de defensivos químicos e a promoção de práticas mais sustentáveis na agricultura.
        A tendência é que essa tecnologia se torne cada vez mais popular e acessível, com a evolução da tecnologia e a demanda por práticas mais sustentáveis na agricultura.`,
        subjectResume: `Lorenzo Czepak Gaston é sócio proprietário da Drones on Farm, empresa especializada na liberação de macrobiológicos através de drones agrícolas e possui mais de 5 anos de experiência com manutenção e operação de drones agrícolas. 
        Ana Makowich é engenheira agrônoma formada pela Universidade Federal de Goiás, coordenadora em Aviação Agrícola e mestranda em Fitossanidade no PPGA/EA/UFG.`,
        img: '/assets/img/speakers/lorenzoana.jpg',
        customSize: '100%',
        datentime: {
          date: '08/05',
          time: '10:00-11:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Jefferson Lins',
        institution: 'Universidade de São Paulo',
        speaking: 'Durabilidade de Geossintéticos',
        description: `Durabilidade de Geossintéticos`,
        subjectResume: `Professor Associado da USP, Depto. de Geotecnia da EESC
        Graduado em Engenheiro Civil - UFAL (2004), Mestre em Geotecnia - EESC/USP (2006), Doutor em Eng. Civil (Eng. de Estruturas) - EESC/USP (2011) com período sanduíche na University of Nebraska-Lincoln - EUA (2010). Pós-Doutor em Eng. Civil pela EESC/USP (2013) e pela Universidade do Porto - Portugal (2017). Livre-docente em Geotecnia pelo SGS-EESC-USP (2019). Leciona para os cursos de graduação em Engenharia Civil e Engenharia Ambiental sobre temas relacionados à Mecânica dos solos e Geossintéticos. É professor permanente no Programa de Pós-Graduação em Geotecnia e no Programa de Pós-graduação em Engenharia de Transportes, ambos na EESC/USP. Responsável pelo Laboratório de Geossintéticos da EESC/USP. Coordenador do Curso de Engenharia Civil da EESC/USP desde 2019. Vice-Chefe do Departamento de Geotecnia (SGS) da EESC/USP desde 2021. Coordenador da Comissão de Estudo Especial de Geossintéticos da Associação Brasileira de Normas Técnicas (ABNT) de 2014 a 2020. Parecerista de agências de fomento e de congressos e revistas nacionais e internacionais. Membro de sociedades de cunho científico e tecnológico, cultural e profissional: ABMS, ANPET, IGS e ABRATEC.
        `,
        img: '/assets/img/speakers/jeffersonlins.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '19:00 - 20:30',
          place: 'Online: A definir'
        }
      },

      {
        name: 'MSc. Maria Alejandra Aparicio Ardila',
        institution: 'Nortene Plásticos',
        speaking: 'Aplicações geotécnicas e ambientais das geomembranas.',
        description: `Atualmente, a geomembrana de Polietileno é o único tipo de geossintético exigido pelos órgãos ambientais para garantir a segurança na destinação dos resíduos gerados em diversos tipos de indústrias. É um material polimérico de baixíssima permeabilidade, que atua como barreira, impedindo a passagem de fluidos, gases e vapores. Está presente em todos os sistemas de impermeabilização, desde a barreira simples até a barreira composta. É utilizado em diferentes trabalhos hidráulicos para o armazenamento ou condução de água. Nesta palestra serão abordadas algumas aplicações da geomembrana de polietileno.`,
        subjectResume: `Possui graduação em Engenheira Civil pela Universidade Industrial de Santander- Colômbia (2016) e mestrado em Geotecnia pela Universidade de São Paulo - EESC/USP (2020) na linha de pesquisa de geossintéticos. No mercado profissional tem experiência em elaboração e gerenciamento de projetos, realização de orçamentos e execução e acompanhamento de obras civis. Experiência na realização de ensaios geotécnicos e de geossintéticos. No âmbito acadêmico, desenvolve estudos nas áreas de Melhoria dos Solos, Geossintéticos e Bioengenharia, através da participação de grupos de pesquisa associados ao laboratório de geossintéticos da USP. Atualmente é doutoranda no programa de Geotecnia da EESC/USP estudando desaguamento de resíduos por meio de tubos geotêxteis. Secretária da Comissão de Estudo Especial de Geossintéticos (ABNT/CEE-175) desde 2021 e membro do núcleo jovem da IGS Brasil desde 2019.`,
        img: '/assets/img/speakers/mariaalejandra.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '09:00-10:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Patrick Morais de Souza Lima',
        institution: '',
        speaking: 'TI: Caminhos e oportunidades dentro de um mar de possibilidades',
        description: ``,
        subjectResume: ``,
        img: '/assets/img/speakers/user-vector-woman.jpg',
        customSize: '100%',
        datentime: {
          date: '08/05',
          time: '19:00-20:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Rangel Henrique Brandão Silva, Frederico André Rabelo e Guilherme de Andrade Bento',
        institution: 'Rangel Henrique Brandão Silva - UEG e RGB Estúdio | Frederico André Rabelo - PUC Goiás, UFG e RGB Estúdio | Guilherme de Andrade Bento - PUC Goiás e RGB Estúdio',
        speaking: 'Concursos de Projeto',
        description: `Abordagem dos concursos públicos de projetos de Arquitetura e Urbanismo, a partir da experiência do escritório RGB Estúdio.`,
        subjectResume: `Rangel Henrique Brandão Silva - Mestre em Arquitetura - Projetos digitais pela FAV-UFG (2019), MBA em Gestão de Projeto em Engenharia e Arquitetura pelo IPOG (2014), Graduação em Arquitetura e Urbanismo pela PUC-GO (2011) . Sócio-fundador da RGB Estúdio, parceiro da Espaço Equipe de Planejamento e Arquitetura (Arquitetos Fernando Carlos Rabelo e Frederico André Rabelo). Experiência em projetos de médio e grande porte de Arquitetura e Urbanismo com ênfase na tecnologia BIM. Participa de concursos de projetos de arquitetura já obteve premiações e menções honrosas. Professor no curso de Arquitetura e Urbanismo da Universidade Estadual de Goiás - UEG.

        Frederico André Rabelo - Possui graduação em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Goiás (1994) e mestrado em Arquitetura pela Universidade Federal do Rio Grande do Sul (2007). Atualmente é diretor técnico da Espaço Equipe de Planejamento Arquitetura e Consultoria ltda. e da Tecto Construtora ltda., Professor Assistente 1 da Pontifícia Universidade Católica de Goiás, lotado na Escola de Artes e Arquitetura e atual Coordenador do Curso e Professor Adjunto 2 da Universidade Federal de Goiás, lotado na Faculdade de Artes Visuais. Tem experiência na área de Arquitetura e Urbanismo, com ênfase em Planejamento e Projetos de Edificação e Urbanismo e Construção de Edificações.
        
        Guilherme de Andrade Bento - Possui graduação pela Pontifícia Universidade Católica de Goiás (2011) e Especialista em Docência no Ensino Superior pela FABEC (2014). Atualmente é sócio-fundador da RGB Estúdio, trabalha em parceria com o escritório Espaço Equipe de Planejamento e Arquitetura (Arquitetos Fernando Carlos Rabelo e Frederico André Rabelo), professor na Pontifícia Universidade Católica de Goiás (PUC GO). Experiência na área de Arquitetura e Urbanismo com ênfase em projetos de médio a grande porte.
        `,
        img: '/assets/img/speakers/rangel.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '09:00-11:00',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Ms. Evelyn Cristine Moreira Soares',
        institution: 'PUC Goiás',
        speaking: 'Estudos de Impactos Urbanos e Engenharia de Tráfego',
        description: `O que são os Estudos de Impactos – Ambiental (EIA), de Vizinhança (EIV) e de Trânsito (EIT), a importância dos conhecimentos específicos, atuação profissional, mercado de trabalho.`,
        subjectResume: `UNB, na área de concentração Projeto e Planejamento e Linha de Pesquisa Projeto e Planejamento Urbano e Regional (PP). Mestre pelo Programa de Pós Graduação Projeto e Cidade da Universidade Federal de Goiás (UFG/FAV/2016).  
        Possui graduação em Arquitetura e Urbanismo pela Pontifícia Universidade Católica de Goiás (2004) e Pós Graduação em Construção Civil pela Universidade Federal de Goiás (2010). 
        Em 2012 iniciou carreira docente nos cursos de Engenharias, Design e Arquitetura e Urbanismo na Pontifícia Universidade Católica de Goiás - hoje leciona no ramo de Planejamento Urbano Municipal. Foi professora conteudista do IESB / DF e Professora Mestre da Instituição de 2017 a 2019, coordenou o TFC do curso de Engenharia Civil EAD.    
        Também se dedica, desde 2015, à elaboração de Estudos de Impacto de Trânsito e de Vizinhança, de empreendimentos diversos. Em 2018/2019 atuou como analista de empreendimentos (PGV) no Município de Aparecida de Goiânia, na Secretaria de Mobilidade e Defesa Social, Departamento de Engenharia de Tráfego.   
        Atualmente coordena o Curso de Especialização em Mobilidade Urbana e Infraestrutura (IDS) e os cursos de Engenharia de Tráfego e Impactos de Trânsito (PUC GO) e Estudos de Impacto Urbano e Ambiental (PUC GO).   
        `,
        img: '/assets/img/speakers/evelyncristine.png',
        customSize: '100%',
        datentime: {
          date: '08/05',
          time: '19:00-20:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Dr. Bruno de Andrade Martins',
        institution: 'IFGoiano - Campus de Hidrolândia',
        speaking: 'Sistema Agroflorestal Biodiverso no Cerrado: Princípios e Dinâmicas',
        description: `Os SAFs são sistemas agroflorestais biodiversos e possuem alta capacidade para melhorar o meio ambiente. São formados por plantios de diversas/diferentes espécies vegetais na mesma área e, ao mesmo tempo (consórcios). Nesses sistemas incluem-se árvores e arbustos nativos ou exóticos e culturas agrícolas de diferentes ciclos. 
        Um dos importantes serviços ambientais que esses sistemas proporcionam é a melhoria do microclima. Ou seja, tanto a temperatura do ar como a do solo ficam mais estáveis, mais agradáveis aos agricultores(as) e a todas as espécies vegetais cultivadas, bem como aos organismos nativos que vivem nos SAFs, os quais ajudam a melhorar a qualidade do solo e o equilíbrio biológico.
        Outro serviço ambiental destacável é a melhoria do ciclo da água, pois facilita a sua infiltração no solo, alimentando o lençol freático e, consequentemente, fortalecendo as nascentes e os mananciais superficiais de água.
        Vários estudos também mostram o aumento da fertilidade, estrutura e da vida do solo, melhorando a sua qualidade, reduzindo e até dispensando o uso de fertilizantes.
        Com o aumento do equilíbrio biológico nesses sistemas, ocorre baixo ataque de pragas e doenças nos cultivos agrícolas, tornando-se desnecessária a utilização de defensivos e, consequentemente, facilitando a viabilização da produção orgânica.
        `,
        subjectResume: `Engenheiro de Alimentos (PUC-GO), Mestre em Ecologia e Produção Sustentável (PUC-GO) e Doutor em Tecnologia de Alimentos (UNICAMP)`,
        img: '/assets/img/speakers/brunoandrade.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:00-11:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Engº Agrº Rafael Gonçalves ',
        institution: 'Butchart Gardens ',
        speaking: 'Como trabalhar no lugar mais bonito do mundo.',
        description: ``,
        subjectResume: `Engenheiro Agrônomo`,
        img: '/assets/img/speakers/rafael.jpg',
        customSize: '100%',
        datentime: {
          date: '08/05',
          time: '19:00-20:30',
          place: 'Online: A definir'
        }
      },

      {
        name: 'Prof. Dr. Leônidas Albano e Profa. Dra. Maria José Pereira Dantas',
        institution: 'PUC Goiás',
        speaking: 'LION XPRO: DO BIM AO BEM INTELIGÊNCIA ARTIFICIAL APLICADA AO DESENVOLVIMENTO DE PROJETOS DE EDIFÍCIOS SUSTENTÁVEIS',
        description: `Discussões com o time da startup Lion xPRO a respeito das possibilidades atuais de inovação tecnológica, a partir da aplicação de inteligência artificial a ferramentas de avaliação ambiental e energética integradas ao desenvolvimento de projetos de edifícios, contribuindo com processos evolutivos de metodologias BIM (Building Information Modeling) a conceitos BEM (Building Energy Model).`,
        subjectResume: `Leônidas Albano 
        Arquiteto e Urbanista. Doutor pela ETSA Barcelona, Universitat Politècnica de Catalunya, com dupla titulação pela UnB, obtido com a menção máxima “Excelente Cum Laude”, com a tese intitulada “Ambiente y Crítica”, perpassando temas relacionados a projeto, conforto ambiental, eficiência energética e sustentabilidade. Mestre em Integração de Energias Renováveis na Arquitetura pela Fundació Politècnica de Catalunya. Atualmente, dirige a startup Lion xPRO e o Instituto de Arquitetura e Conforto. É Membro de Comissões de Estudos na ABNT e professor e pesquisador na PUC Goiás. Colaborou em diferentes escritórios e empresas do Brasil e da Espanha, com trabalhos em diferentes países da Europa, África Mediterrânea e América Latina. Foi Coordenador de Extensão (2016-2018) e Coordenador da Pós-Graduação Lato Sensu da Universidade (2019-2021); Conselheiro titular do Conselho de Arquitetura e Urbanismo, por duas gestões (2012-2014 e 2015-2017); e Membro da Câmara da Indústria da Construção (FIEG).
        
        Maria José Pereira Dantas
        Matemática pela Universidade Católica de Goiás (1988), Especialista em Estatística pela PUC-MG (1992), Mestre em Engenharia Elétrica e da Computação, pela Universidade Federal de Goiás (2000), Dra. em Engenharia Elétrica pela Universidade de Brasília (2008), com a tese intitulada “Metodologia de Síntese de Filtros de Micro-ondas de Topologias Arbitrárias utilizando Algoritmo Evolucionário Híbrido (Memético) Associado a Conhecimento Especialista”. Atualmente é Professora e pesquisadora da Escola Politécnica e de Artes, da Pontifícia Universidade Católica de Goiás (PUC GO), atuando na graduação nos cursos de Computação e Engenharias; e na pós-graduação, no Mestrado em Engenharia de Produção e Sistemas. Coordena o Laboratório de Estatística e Modelagem Matemática. Atua nas Linhas de Pesquisa de Probabilidade e Estatística e Modelagem e Simulação de Sistemas. Tem experiência nas Áreas de Estatística Aplicada, Engenharia Elétrica e Ciência da Computação; com ênfase em Predição, Simulação e Otimização. Orienta alunos de iniciação científica e projetos finais de curso em otimização e predição, e alunos de mestrado, em modelagem e simulação de sistemas, desenvolvendo modelagens matemáticas e soluções de inteligência computacional, para resolver problemas de otimização combinatória e problemas não lineares.
        `,
        img: '/assets/img/speakers/leonidasalbano.png',
        customSize: '100%',
        datentime: {
          date: '08/05',
          time: '10:00-11:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Deusa Maria Rodrigues Boaventura e Sandra Catharinne Pantaleão Resende ',
        institution: 'PUC Goiás',
        speaking: 'PESQUISA E PÓS-GRADUAÇÃO NA ARQUITETURA, NO URBANISMO E NO DESIGN',
        description: `Discussões a respeito da realização de projeto de pesquisa e de cursos de pós-graduação ligados aos cursos da Escola Politécnica e de Artes.`,
        subjectResume: `Deusa Maria R. Boaventura, possui graduação em Arquitetura e Urbanismo pela Universidade Católica de Goiás (1986), especialização em Educação do Ensino Superior pela PUC-GO, especialização em História Cultural, pela Universidade Federal de Goiás; mestrado em Arquitetura e Urbanismo pela Escola de Engenharia de São Carlos- USP (2001) e doutorado em Arquitetura e urbanismo pela Universidade de São Paulo (2007). Atualmente é professora adjunto da Pontifícia Universidade Católica de Goiás (PUC- Go), onde trabalha na graduação e no Programa de Pós-graduação em História. Atua também, como docente, na Universidade Estadual de Goiás (UEG). Tem experiência na área de Arquitetura e Urbanismo, com ênfase em História da Arquitetura e Urbanismo, atuando principalmente nos seguintes temas: história das cidades coloniais e moderna. 

        Sandra C. Pantaleão Resende tem Doutorado em Arquitetura e Urbanismo pela Universidade de Brasília (2016). Mestre em Geografia - Dinâmica Sócio-Ambiental, pela UEL (2010). Graduada em Arquitetura e Urbanismo pela PUC Goiás (2006) e em Artes Visuais - habilitação Design Gráfico pela UFG (2000).  Líder do Grupo de Pesquisa Cidade, Morfologia, Paisagem e Morfologia (CIMPARQ - CNPQ/PUC Goiás). Professora do curso de Arquitetura e Urbanismo UEG e PUC Goiás e dos Mestrados de História e Desenvolvimento e Planejamento Territorial - PUc Goiás. Desenvolve pesquisas sobre historiografia urbana e dinâmicas contemporâneas, relacionadas às transformações da paisagem urbana, com os seguintes temas: expansão urbana, ordenamento territorial, metrópoles, aglomerados urbanos e cidades-região.
        `,
        img: '/assets/img/speakers/deusamaria.png',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '19:00 - 20:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Santiago Meireles Rocha e Luciana Casaletti',
        institution: 'PUC Goiás',
        speaking: 'Desafio Produtivo',
        description: `Será proposto um desafio para equipes, onde cada uma será responsável por analisar uma das empresas indicadas e defender sua aquisição por parte dos investidores.`,
        subjectResume: `Santiago Meireles Rocha: Mestre em Engenharia de Produção e Sistemas na PUC-GO (2017), MBA em Gerenciamento de Projetos - FGV (2011), Especialista em Engenharia de Software - Unicamp(2001). Graduação em Ciência da Computação - Faculdades Objetivo (1999). Professor na Pontifícia Universidade Católica de Goiás - PUC GO desde 2012, efetivo desde 2014, lecionando as disciplinas Sistemas de Informação Gerencial e Apoio à Decisão, Gerência de Projetos, Linguagem de Programação, Estágio Supervisionado, Integração e Avaliação de Sistemas e Professor orientador de trabalhos de conclusão de curso para os cursos de Engenharia de Produção, Engenharia Elétrica e Engenharia de Controle e Automação. Coordenador dos programas de Monitoria e Estágio Curricular Supervisionado da Escola de Engenharia da PUC-GO. Professor convidado dos programas de MBA em Operações Logísticas, Gestão Estratégica de Negócios e Gestão Comercial do Centro Universitário Alves Faria - UNIALFA, desde 2014. Vasta experiência em Tecnologia da Informação com ênfase em Gerenciamento de Projetos, Planejamento Estratégico e Governança de TI, Sistemas de Informação, Banco de Dados e Lógica e Linguagens de Programação. `,
        img: '/assets/img/speakers/santiagomeireles.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '09:00-12:15',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'Lucia Bertazzo',
        institution: 'Lisboa, Portugal',
        speaking: 'Experimentações Editoriais',
        description: `A palestra da egressa do curso de Design da PUC Goiás, Lucia Bertazzo, vai abordar sua trajetória com experimentações gráficas que busca a melhor forma de unir artes plásticas e literatura. Seu trabalho é transformar livros em verdadeiras obras de arte com uma série de edições que contam com uma grande pesquisa de materiais e a colaboração de dezenas de tipógrafos, impressores de gravuras ou serigrafias, marceneiros, artífices em acrílico ou aço, fabricantes de papéis artesanais, moldureiros...e importantes artesãos. `,
        subjectResume: `Doutoranda em Museologia, com bolsa da Cátedra Unesco na Universidade Lusófona, possui graduação em Design - PUC-Goiás e mestrado em Cultura Visual pela UFG. 
        Trabalhou com produção no ateliê do artista Siron Franco entre 2005 e 2010. 
        No Rio de Janeiro inaugurou UQ! Editions com Leonel Kaz e começou a editar livros-objetos de importantes artistas e escritores brasileiros, entre eles: 
        - A revelação do avesso, de Ferreira Gullar
        - galáxias, de Antonio Dias e Haroldo de Campos
        - Galpão Gaveta, de Paulo Climachauska
        - Sem pé nem cabeça, de Roberto Magalhães
        - Outra natureza, de Frans Krajcberg
        - Série Envolvimento, de Wanda Pimentel
        - Minhas impressões, de Luiz Zerbini
        - Cântico Negro, de Pedro Cabrita Reis
        - Gramática do Instante e do Infinito, Alex Flemming e José Eduardo Agualusa
        - As esferas da percepção, de Leo Battistelli
        - 4CM, de Daniel Mattar
        `,
        img: '/assets/img/speakers/luciabertazzo.png',
        customSize: '100%',
        datentime: {
          date: '08/05',
          time: '10:00-11:30',
          place: 'Online: A definir'
        }
      },

      {
        name: 'Representante da Pormade Portas - em definição',
        institution: 'Pormade Portas',
        speaking: 'Projeto Pormade Móvel',
        description: `Independente de onde você estiver, a Pormade vai até você! O projeto do Pormade Móvel tem como objetivo divulgar os produtos e serviços da empresa além das barreiras geográficas. O veículo passa por eventos de inúmeras cidades para que a comunidade local possa conhecer de perto o que a Pormade oferece ao mercado.
        O primeiro Showroom Móvel da Pormade estreou na “Feicon Batimat em 2019, depois dos comentários positivos sobre a novidade, a frota cresceu e os veículos passaram por vários eventos importantes e tradicionais de diferentes cidades, como Design Fair, Expoingá, Kiwi Fest, Feicon, High Design, Equipotel, ConstruSul, lojas de materiais de construção, entre outros.
        Ele apresenta em sua carroceria os modelos de portas da Pormade, as estampas dos papéis de parede, piso vinilico, rodapés e fechaduras. Além disso, mesas e cadeiras ficam dispostas próximas aos veículos para que os visitantes conversem com os especificadores e analisem os catálogos.
        A arquitetura dos veículos do projeto conta ainda com uma televisão, na qual vídeos sobre a cultura Pormade são exibidos durante as participações nas feiras.
        O Pormade Móvel participa de vários eventos, feiras e faz visitas aos seus parceiros como lojas, arquitetos, engenheiros e instaladores.
        `,
        subjectResume: `Desde 1939 a Pormade trabalha para manter a mais alta qualidade de suas portas. A empresa tem um papel marcante na comunidade e na preservação ecológica. Com grandes áreas de florestas plantadas e um parque industrial completo, com 106.000 m² construídos, a Pormade controla a produção das portas desde o seu corte.
        Toda essa estrutura permite que a empresa tenha um dos melhores padrões de qualidade da América do Sul, com certificação ABNT atendendo a NBR 15930 Portas de Madeiras para Edificações, assegurando a excelência da produção, processo de venda e documentação da fábrica. E, além disso, nosso produto é fabricado com madeira reflorestada. Plantando a ideia da preservação e fazendo o manejo ambiental correto, mantemos a natureza a nosso favor, protegemos as próximas gerações e deixamos o mundo mais vivo.
        `,
        img: '/assets/img/speakers/user-vector-woman.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '09:00-10:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'João Paulo de Morais Alves',
        institution: 'PUC Goiás',
        speaking: 'Ai.rtista, uma imersão na construção da imagem digital através do Midjourney e suas barreiras no mercado da arte',
        description: `A palestra "Ai.rtista: uma imersão na construção da imagem digital através do Midjourney e suas barreiras no mercado da arte" aborda o desafio dos artistas em construir uma imagem digital coerente e atraente, que possa ajudá-los a se destacar no mercado da arte. O palestrante apresenta o conceito de Midjourney, que é uma ferramenta que ajuda os artistas a desenvolverem sua marca pessoal e construírem uma presença online consistente e eficaz. No entanto, o palestrante também aborda as barreiras que os artistas enfrentam nesse processo, como a falta de conhecimento técnico em marketing digital e a dificuldade em conciliar a produção artística com a gestão da imagem digital. A palestra busca oferecer insights e dicas práticas para que os artistas possam superar essas barreiras e construir uma imagem digital sólida e impactante.`,
        subjectResume: `Possui graduação em Design pela Pontifícia Universidade Católica de Goiás(2005) e especialização em Publicidade e Audiovisual pela Universidade Estadual de Goiás(2008). Atualmente é Professor Auxiliar da Pontifícia Universidade Católica de Goiás. Tem experiência na área de Artes, com ênfase em DESIGN GRÁFICO.`,
        img: '/assets/img/speakers/joaopaulo.png',
        customSize: '100%',
        datentime: {
          date: '08/05',
          time: '08:00-09:30',
          place: 'Online: A definir '
        }
      },

      {
        name: 'Frederico Mael e Marcos Costa de Freitas',
        institution: 'PUC Goiás',
        speaking: 'CRÔNICAS DO IGPA',
        description: `O IGPA possui um acervo muito vasto, para cada peça há uma história, às vezes uma aventura perigosa, às vezes uma história engraçada. Assim, parte da "vida" dos artefatos está nessas histórias que expandem os seus sentidos. Nessa proposta vamos valorizar as crônicas e expor algumas peças do acervo. 
        Faremos uma apresentação breve de alguns cortes de vídeos que retratam momentos de produção de registros do acervo. Os relatos das crônicas do trabalho de campo serão trabalhados ao longo da projeção.
        `,
        subjectResume: `Marcos Costa, Doutorando do Programa de Pós-graduação em Arte e Cultura Visual PPGACV UFG, na linha de pesquisa de Poéticas Artísticas e Processos de Criação. Mestre em História pela PUC-GO na área de concentração de Cultura e Poder; Bacharel em Artes Visuais, habilitado para Comunicação Visual pela Universidade Federal de Goiás. Professor no ensino superior de design há 24 anos. Atuou como coordenador por 13 anos, participou da elaboração de Planos de Desenvolvimento Institucional e Projetos Pedagógicos de cursos diversos. Atuou como consultor do MEC/INEP na Comissão Assessora do Exame Nacional de Desempenho dos Estudantes dos Cursos Superiores de Tecnologia em Design Gráfico

        Federico Mael, Advogado e Historiador. É bacharel em Direito, especialista em Direito Civil e Processo Civil, licenciado e mestre em História pela Pontifícia Universidade Católica de Goiás. No mestrado, foi bolsista pesquisador da Fundação de Amparo à Pesquisa do Estado de Goiás (FAPEG) e na licenciatura foi bolsista de iniciação científica pelo Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPQ). Atualmente advoga na área cível e trabalha no Instituto Goiano de Pré-história e Antropologia do IGPA/PUC Goiás.
        `,
        img: '/assets/img/speakers/user-vector-woman.jpg',
        customSize: '100%',
        datentime: {
          date: '09/05',
          time: '10:00-11:30',
          place: 'Presencial: A definir'
        }
      },

      {
        name: 'José Alecrim e Marcos Costa de Freitas',
        institution: 'Ciranda da Arte - Governo de Goiás e PUC Goiás',
        speaking: 'A IMAGEM DOS POVOS ORIGINÁRIOS BRASILEIROS ',
        description: `Roda de conversa sobre a representação dos povos originários brasileiros. Propõe-se um passeio rápido ao longo da história, cobrindo momentos chave do Brasil colônia até a atualidade. A representação iconográfica, arquétipos e os estereótipos produzidos dos povos originários. O tema será apresentado por duas pessoas na condição de coordenadores da roda de conversa. `,
        subjectResume: `José Alecrim, artista indígena e arte educador do Centro de Estudo e Pesquisa Ciranda da Arte da Secretaria de Estado da Educação de Goiás (Seduc).

        Marcos Costa, Doutorando do Programa de Pós-graduação em Arte e Cultura Visual PPGACV UFG, na linha de pesquisa de Poéticas Artísticas e Processos de Criação. Mestre em História pela PUC-GO na área de concentração de Cultura e Poder; Bacharel em Artes Visuais, habilitado para Comunicação Visual pela Universidade Federal de Goiás. Professor no ensino superior de design há 24 anos. Atuou como coordenador por 13 anos, participou da elaboração de Planos de Desenvolvimento Institucional e Projetos Pedagógicos de cursos diversos. Atuou como consultor do MEC/INEP na Comissão Assessora do Exame Nacional de Desempenho dos Estudantes dos Cursos Superiores de Tecnologia em Design Gráfico
        `,
        img: '/assets/img/speakers/josealecrim.jpg',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '08:00-09:30',
          place: 'Online: Youtube'
        }
      },

      {
        name: 'Thiago da Mata Santos',
        institution: 'Oficina Damata',
        speaking: 'Oficina Damata - Design e marcenaria tradicional',
        description: `A Oficina Damata é uma marcenaria com foco em trabalhos em madeira, não uma Indústria. Aqui as peças são produzidas a partir de técnicas de marcenaria tradicional. Penso em peças que tragam conexão! Desejo que a textura, a cor, o cheiro, de cada cadeira, banco ou mesa, que você se sentará para sua refeição ou trabalho, te levem a vivências e lembranças.`,
        subjectResume: `Prazer, meu nome é Thiago Damata!

        A Oficina Damata é uma marcenaria com foco em trabalhos em madeira, não uma Indústria. Aqui as peças são produzidas a partir de técnicas de marcenaria tradicional.
        
        Um hobby do meu pai (que produzia peças no sítio da nossa família), um avô materno marceneiro (que infelizmente se foi quando eu era criança, mas de onde trago o nome Da Mata com muito orgulho) e o amor por uma matéria prima única, renovável, com corpo, alma e coração, me trouxeram até aqui. 
        
        Minha produção, sob encomenda ou não, é pensada em acompanhar seus donos por toda vida e por isso o uso de encaixes, no lugar de pregos ou parafusos. Por falar em encaixes, mora aí minha grande paixão ... O móvel com encaixes tem a beleza e durabilidade que acredito que a madeira mereça.
        `,
        img: '/assets/img/speakers/thiagodamata.png',
        customSize: '100%',
        datentime: {
          date: '10/05',
          time: '10:00-11:30',
          place: 'Online: Youtube'
        }
      },
    ]
  }
}
</script>

<style scoped>
.list-container {
  /*position: relative;
  width: 70vw;
  left: calc(-15vw + 15%);
  */
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around;
  max-height: 80vh;

  padding: 0.5rem;
  margin: 2rem 0;

  text-align: center;
}

@media screen and (min-width: 800px) {
  .list-container {
    max-height: 50vh;
  }
}

@media screen and (max-width: 680px) {
  .list-container {
    max-height: 200vh;
    margin-right: 2rem;
  }
}

.list-container h5 {
  margin: 2rem 0;
  color: black;
}

.list-cursos li {
  background-color: #006ca3;

  margin-bottom: 0.5rem;
  border-radius: 0.3rem;
  width: 25rem;

  transition: transform 0.4s;
}

.list-cursos li:hover {
  transform: scale(1.1);
}

.list-cursos a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.1rem;
}

#mepros {
  text-decoration: none;
  background-color: #006ca3;
  color: white;
  border-radius: 0.3rem;
  padding: 0.15rem;

  transition: transform 0.4s;
}

#mepros:hover {
  transform: scale(1);
}
</style>
