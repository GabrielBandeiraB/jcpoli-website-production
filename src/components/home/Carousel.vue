<template>
  <v-layout row wrap class="jcecec-slider">
    <v-flex xs12>
      <v-carousel hide-controls  height="800px">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          hide-controls
          cover
        >
          <v-container fill-height>
            <v-layout align-center fill-height justify-center>
              
              <!--<div class="banner">-->
                <!--<img src="assets/img/logo-clean.webp" class="logo" />
                <img src="assets/img/logo-clean.webp" class="logo back" />
                <img src="assets/img/logo.png" class="logo-opacity" />-->

                <!--
                <div>
                  <div>
                    <span class="date">08 a 10 de Maio de 2023</span>
                  </div>
                  <hr />
                  <div>
                    <span class="jcecec">II JCPOLI</span>
                  </div>
                  <div>
                    <span class="jcecec-sub">
                      Jornada Científica da Escola Politécnica e de Artes
                    </span>
                  </div>
                  <hr />
                  <div>
                    <span id="description">
                      O uso da Inteligência Artificial e suas tecnologias para a melhoria da qualidade de vida
                    </span>
                  </div>
                </div>


              -->

                <!--
                <div class="logo-container">
                  <img
                    id="cienciaemcasa"
                    src="assets/img/cienciaemcasa_preto-removebg.png"
                  />
                  <img id="logo" src="assets/img/logo.png" />
                </div>
              -->

              <!--</div>-->
            </v-layout>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Carousel extends Vue {
  private items: any

  constructor() {
    super()

    this.items = [
      {
        src: '/assets/img/slider/1.png'
      },
      {
        src: "/assets/img/slider/2.png"
      }
    ]
  }
}
</script>

<style scoped>


.logo-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  align-items: flex-start;
  width: 7rem;
  margin-right: 0rem;
  margin-left: 2rem;
}

.banner {
  display: flex;
  opacity: 0.8;
  background-color: white;
  color: #fff;
  position: relative;
  padding: 3rem 3rem 3rem 4rem;
}

@media screen and (max-width: 576px) {
  .banner {
    padding: 30px 5px;
  }
}

.banner span {
  text-align: center;
}

#description {
  letter-spacing:
}

.jcecec {
  text-transform: uppercase;
  font-size: 5em;
  font-weight: 300;
}

.jcecec-sub {
  font-size: 0.9em;
}

#logo {
  width: 10rem;
  height: 6rem;
  position:relative;
  right: 1rem;
}

#cienciaemcasa {
  width: 8rem;
}

hr {
  border: 1px solid black;
}

.date {
  font-weight: bold;
}

span {
  color: black;
  font-weight: normal;
}

@media only screen and (max-width: 760px) {
  .jcecec-slider {
    display: none;
  }
}
</style>
