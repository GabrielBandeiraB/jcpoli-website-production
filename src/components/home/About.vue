<template>
  <div id="container-sobre">
    <v-layout p-3 row wrap>
      <v-flex xs12 class="text-xs-left" mt-5>
        <h2>II Jornada Científica da Escola Politécnica e de Artes</h2>
      </v-flex>
      <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
        <p>
          Temos a alegria de anunciar a realização da II Jornada Científica da
          Escola Politécnica e de Artes (II JCPOLI) da Pontifícia Universidade Católica de
          Goiás (PUC Goiás) que será realizada de 8 a 10 de Maio de 2023. A II
          JCPOLI tem como tema O uso da Inteligência Artificial e suas tecnologias para a melhoria da qualidade de vida,
          oferecendo atividades: palestras, mesa redonda, minicursos, competições e exposições.
        <p/>
        
        <v-flex xs12 class="text-xs-left" mt-5>
          <h3>Escola promove arrecadação de alimentos durante a JCPOLI</h3>
        </v-flex>
        <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
          <p>
            A direção da Escola Politécnica e de Artes, em parceria com os C.A's e a Coordenação de Extensão (CDEX/PROEX) da PUC Goiás, convida você para participar de uma campanha de doação de alimentos.
          Você também pode doar roupas novas ou seminovas para compor o Bazar Solidário, a ser realizado na Escola em junho.
          A arrecadação acontece durante a programação presencial da Jornada Científica da Escola.
          Ao doar alimentos e roupas, o acadêmico ganha selos que poderão ser trocados por peças de roupas no Bazar Solidário.
        </p>
        </v-flex>

        <v-flex xs12 class="text-xs-left" mt-5>
          <h3>Como funciona os selos</h3>
        </v-flex>
        <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
          <p>O selo pode ser adquirido a cada um quilo de alimento doado, assim como a cada  participação em uma palestra presencial ou com a doação de uma peça de roupa seminova. Três selos dá o direito a troca por uma peça de roupa no bazar.
          </p>
        </v-flex>

        <v-flex xs12 class="text-xs-left" mt-5>
          <h3>Importante</h3>
        </v-flex>
        <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
          <p>
            Os alimentos doados devem ser não perecíveis (são aqueles que podem ser guardados por períodos longos e trazem menores dificuldades à conservação) e as roupas em boas condições (devem ser roupas novas ou seminovas com pouco uso).
          </p>
        </v-flex>
        </p>
      </v-flex>
      
      <v-flex xs12 class="text-xs-left" mt-5>
        <h2>Trabalhos de conclusão de curso</h2>
      </v-flex>
      <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
        <p>
          Nesta edição da Jornada serão aceitos artigos de alunos de Trabalho de
          Conclusão de Curso – TCC II. Os artigos aceitos e publicados nos anais
          da II Jornada Científica da Escola Politécnica e de Artes podem substituir a
          escrita da monografia para os alunos da Escola, exceto os cursos de Arquitetura e 
          Urbanismo e Design, dada a especificidade do caráter projetual destes. Os autores dos artigos
          devem ser o(s) aluno(s), o(s) orientador(es) e co-orientador(es). A
          submissão de artigos deve ser feita para o e-mail
          <a href="mailto:politecnica.jc@pucgoias.edu.br"
            >politecnica.jc@pucgoias.edu.br</a
          >.
        </p>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class About extends Vue {}
</script>

<style>
#container-sobre {
  max-width: 1000px !important;
  padding: 0 24px;
  margin: auto;
  
}
#container-sobre h2 {
  color: #337ef6;
  
}

#container-sobre h3 {
  color: #337ef6;
}

@media screen and (max-width: 576px) {
  #sobre p {
    font-size: 18px !important;
  }
}
</style>
