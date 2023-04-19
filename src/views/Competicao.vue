<template>
  <div>
    <Main>
      <div v-for="(props, index) in all_competicoes" :key="index">
        <div
          v-for="(comp, index) in props.competicoes"
          :key="index"
          class="competicoes"
        >
          <div class="title">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M144 48C144 21.49 165.5 0 192 0C218.5 0 240 21.49 240 48C240 74.51 218.5 96 192 96C165.5 96 144 74.51 144 48zM152 512C134.3 512 120 497.7 120 480V256.9L91.43 304.5C82.33 319.6 62.67 324.5 47.52 315.4C32.37 306.3 27.47 286.7 36.58 271.5L94.85 174.6C112.2 145.7 143.4 128 177.1 128H320V48C320 21.49 341.5 .0003 368 .0003H592C618.5 .0003 640 21.49 640 48V272C640 298.5 618.5 320 592 320H368C341.5 320 320 298.5 320 272V224H384V256H576V64H384V128H400C417.7 128 432 142.3 432 160C432 177.7 417.7 192 400 192H264V480C264 497.7 249.7 512 232 512C214.3 512 200 497.7 200 480V352H184V480C184 497.7 169.7 512 152 512L152 512z"
              />
            </svg>
            <h3 :title="comp.title">
              {{ comp.title }}
            </h3>
          </div>

          <div class="desc">
            <img :src="comp.image" id="maratona-photo" />

            <div class="desc-text">
              <P>
                {{ comp.desc }}
              </P>
              <h5 :title="comp.instructor">Instrutor: {{ comp.instructor }}</h5>
              <h6 class="patrocinador" v-if="comp.patrocinador">
                Patrocinador: {{ comp.patrocinador }}
              </h6>
            </div>
          </div>
          <div class="info-h">
            <div class="date-time-place">
              <i class="far fa-calendar-alt"></i>
              <i class="far fa-clock"></i>
              <i class="fas fa-map-marker-alt"></i>
              <div>{{ comp.date }}</div>
              <div>{{ comp.time }}</div>
              <div>
                {{ comp.place }}
                <a v-if="comp.link" :href="comp.link" target="_blank">{{
                  comp.place2
                }}</a>
                {{ comp.place3 }}
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import PhotoHeader from '../components/organization/PhotoHeader.vue'
import Main from '../components/organization/Main.vue'
import MiniCourse from '../components/miniCourse/index.vue'
import SectionCourse from '../components/organization/SectionCourse.vue'

import { Competicoes } from '@/storage/programacao/competicao'

@Component({
  components: {
    PhotoHeader,
    Main,
    MiniCourse
  }
})
export default class competicoes extends Vue {
  private all_competicoes: any

  private title = 'Competições'
  private background = 'assets/img/slider/logo-maratona.jpg'

  constructor() {
    super()

    this.all_competicoes = Competicoes
  }
}
</script>

<style scoped>
.courses-list > div:not(:first-child) {
  margin-top: 35px;
}

h3,
h4,
h5 {
  color: #2c3e50;
}

.desc {
  display: flex;
  align-items: center;
}

.desc img {
  margin-right: 3rem;
}

#maratona-photo {
  height: 20rem;
}

svg {
  height: 3rem;
}

.title {
  display: flex;
}

.title svg {
  margin-right: 3rem;
}

.competicoes .title {
  grid-area: title;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  border-bottom: 2px solid;
  margin-bottom: 22px;
}
.competicoes .title i {
  font-size: 25pt;
  margin-right: 15px;
}

.competicoes .info-h {
  grid-area: info;
  padding-right: 15px;
}
.competicoes .info-h > div:first-child {
  font-style: italic;
}
.competicoes .info-h > div:first-child h5,
.competicoes .info-h > div:first-child h6 {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.competicoes .info-h .date-time-place {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 15px;
  margin-top: 35px;
}
.competicoes .info-h .date-time-place i {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 15px;
}
.competicoes .info-h .date-time-place > div {
  text-align: center;
  font-size: 12pt;
  font-weight: 700;
}

.desc-text p {
  font-size: 1.1rem;
}

.desc-text h5 {
  font-style: italic;
  color: black;
  font-weight: normal;
  font-size: 1.2rem;
  text-align: right;
  text-transform: capitalize;
}

.competicoes {
  margin-bottom: 4rem;
}

.patrocinador {
  text-align: right;
}

@media screen and (max-width: 425px) {
  .desc {
    display: flex;
    flex-direction: column;
    width: 80vw;
    flex-wrap: wrap;
  }

  .title {
    display: flex;
    align-items: center;
    flex-direction: row;
  }
  .title svg {
    height: 3rem;
    margin-right: 1.5rem;
  }

  .title h3 {
    font-size: 1.5rem;
  }

  .desc-text {
    display: block;
    margin-top: 1.5rem;
    text-align: justify;
  }

  #maratona-photo {
    margin-right: 0;
    height: 15rem;
  }
}
</style>
