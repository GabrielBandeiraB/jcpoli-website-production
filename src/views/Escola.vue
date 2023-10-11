<template>
  <div class="obs-page view">
    <PhotoHeader
      title= "Escola Politécnica e de Artes"
      image="/assets/img/banner_escola.jpeg"
      description=""
    ></PhotoHeader>

    <Main>
      <Paragraph title="Cursos">
        A Escola Politécnica e de Artes da Pontifícia Universidade 
        Católica de Goiás (PUC Goiás) foi criada em agosto de 2021 
        com a junção de três escolas: Escola de Artes e Arquitetura, 
        Escola de Ciências Exatas e da Computação e Escola de 
        Engenharia. Atualmente são oferecidos 18 cursos de graduação, 
        sendo 11 presenciais, 5 semipresenciais e 2 ensino à distância.

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
        <br/>
        <br/>
        <br/>
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
  </div>
</template>

<script lang="ts">

import PhotoHeader from '@/components/organization/PhotoHeader.vue'
import Main from '@/components/organization/Main.vue'
import Paragraph from '@/components/organization/Paragraph.vue'


  export default {

    components: {
      PhotoHeader,
      Main,
      Paragraph
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
