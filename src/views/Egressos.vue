<template>
  <div class="obs-page view">
    <Main>
      <Paragraph title="Encontro de Egressos Ciência da Computação">
        Para comemorar os 30 anos do curso de Ciência da Computação da PUC Goiás
        não há nada melhor do que relembrar o passado. No dia 14/05/2022 de 9:00
        as 11:00 no hall entre os auditórios 2 e 3 da área II estaremos
        esperando você que fez a história do curso. Teremos uma exposição de
        fotos e muitas histórias para contar e relembrar. Caso tenha alguma foto
        que queira enviar para fazer parte de nosso “photo booking” envie para
        cecilia@pucgoias.edu.br com uma breve descrição da mesma. Vamos escrever
        nosso livro de memórias, e você faz parte dele. Esperamos você para nos
        contar a sua participação na conquista desses 30 anos de sucesso. Espero
        vocês!!! Carmen Cecilia – egressa do curso de Ciência da Computação.
      </Paragraph>
      <div class="gallery">
        <div
          class="gallery-panel"
          v-for="(photo, index) in photos"
          :key="index"
        >
          <img :src="photo" />
        </div>
      </div>
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
  private photos: any

  constructor() {
    super()

    this.photos = [
      '/assets/img/egressos/10.jpeg',
      '/assets/img/egressos/11.jpeg',
      '/assets/img/egressos/12.jpeg',
      '/assets/img/egressos/13.jpeg',
      '/assets/img/egressos/14.jpeg',
      '/assets/img/egressos/15.jpeg',
      '/assets/img/egressos/16.jpeg',
      '/assets/img/egressos/8.jpeg',
      '/assets/img/egressos/1.jpeg',
      '/assets/img/egressos/2.jpeg',
      '/assets/img/egressos/3.jpeg',
      '/assets/img/egressos/4.jpeg',
      '/assets/img/egressos/5.jpeg',
      '/assets/img/egressos/6.jpeg',
      '/assets/img/egressos/7.jpeg'
    ]
  }
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  grid-gap: 2rem;
  margin: 5rem auto;
}

.gallery-panel img {
  height: 15rem;
  width: 25rem;

  object-fit: cover;
  border-radius: 0.75rem;
}

@media screen and (min-width: 800px) {
  .gallery {
    grid-gap: 5rem;
  }

  .gallery-panel img {
    height: 25rem;
    width: 22rem;

    object-fit: cover;
    border-radius: 0.75rem;

    transition: transform 0.5s;
  }

  .gallery-panel img:hover {
    object-fit: contain;

    transform: scale(1.5);

    padding: 2rem;
    border-radius: 2rem;
  }
}
</style>
