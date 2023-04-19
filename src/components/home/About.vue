<template>
  <div id="container-sobre">
    <v-layout p-3 row wrap>
      <v-flex xs12 class="text-xs-left" mt-5>
        <h2>I Jornada Científica da Escola Politécnica</h2>
      </v-flex>
      <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
        <p>
          Temos a alegria de anunciar a realização da I Jornada Científica da
          Escola Politécnica (I JCPOLI) da Pontifícia Universidade Católica de
          Goiás (PUC Goiás) que será realizada de 9 a 11 de Maio de 2022. A I
          JCPOLI tem como o tema Cultura, Inovação e Empreendedorismo,
          oferecendo 51 atividades: palestras, mesa redonda, minicursos,
          competições e exposições.
        </p>
      </v-flex>
      <v-flex xs12 class="text-xs-left" mt-5>
        <h2>Trabalhos de conclusão de curso</h2>
      </v-flex>
      <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
        <p>
          Nesta edição da Jornada serão aceitos artigos de alunos de Trabalho de
          Conclusão de Curso – TCC II. Os artigos aceitos e publicados nos anais
          da I Jornada Científica da Escola Politécnica podem substituir a
          escrita da monografia para os alunos da Escola Politécnica da PUC
          Goiás, exceto os cursos de Arquitetura e Urbanismo e Design, dada a
          especificidade do caráter projetual destes. Os autores dos artigos
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
  color: #2776f5;
}

@media screen and (max-width: 576px) {
  #sobre p {
    font-size: 18px !important;
  }
}
</style>
