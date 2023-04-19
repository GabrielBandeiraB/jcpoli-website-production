<template>
  <v-container class="robot-card">
    <v-layout row wrap>
      <v-flex xs12 md5 class="rb-icon">
        <div>
          <img src="/assets/img/robot/rb1.jpg" width="80%" />
          <div></div>
        </div>
      </v-flex>
      <v-flex xs12 md5 offset-md-1>
        <div class="name-robot">
          <span class="name">
            <h2>Competição de robôs</h2>
          </span>
        </div>
        <div class="f-desc text-justify">
          <p>
            As competições de robôs reúnem construtores de robôs que competem para mostrar qual deles é
            capaz de cumprir da melhor forma um determinado objetivo especificado anteriormente à competição. As
            competições podem ser diferenciadas segundo alguns critérios básicos, a saber: propósitos científicos e
            acadêmicos, grau de autonomia exigida dos protótipos de robôs para a realização das tarefas a eles
            solicitadas, restrições para a construção do protótipo, ou seja, o quão livre é a escolha das plataformas
            robóticas que podem ser empregadas na construção dos protótipos e Ua maneira como a organização da
            equipe está vinculada a iniciativas de instituições educacionais ou organizações formais. A competição de
            robôs da IV JCECEC tem vai explorar dois dos critérios propósitos científicos e acadêmicos, grau de
            autonomia exigida dos protótipos de robôs para a realização das tarefas a eles solicitadas.
          </p>
          <div class="more">
            <v-btn color="primary" @click="goToCompetition">Saiba mais</v-btn>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class Speakers extends Vue {
  constructor() {
    super();
  }

  private goToCompetition() {
    this.$router.push("/competicao");
  }
}
</script>

<style scoped>
img {
  border-radius: 50%;
  padding: 10px;
}

.more {
  text-align: start;
}

.more button {
  width: 140px;
}

.img-robot {
  border: 1px solid #ececec;
}

.name-robot {
  text-align: left;
  margin-top: 40px;
}

@media screen and (max-width: 576px) {
  .img-robot img {
    width: 375px !important;
    height: 440px !important;
  }
  .more {
    margin-left: 10px !important;
  }
}

.robot-card {
  margin: 0 auto;
}

.name {
  font-size: 30px !important;
  font-style: normal;
  font-weight: 700;
  line-height: 38px;
  color: #2776f5;
  text-align: left;
}

.name h2 {
  margin-left: 10px;
}

.f-desc,
.s-desc {
  font-family: "Poppins", sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 14px;
  color: #626262;
  text-align: center;
  margin-top: 30px;
  padding: 0 20px;
}

.f-desc {
  font-size: 16px;
}

.s-desc {
  line-height: 1.7;
}

.container {
  max-width: 1170px;
}

h2 {
  font-family: "Roboto", Helvetica, Arial, sans-serif !important;
}

/* Higor's resources */
.rb-icon {
  display: flex;
  justify-content: center;
}

.rb-icon > div {
  position: relative;
}

.rb-icon > div img {
  mix-blend-mode: multiply;
}
</style>
