<template>
  <div id="container-sobre">
    <v-layout p-3 row wrap>
      <v-flex xs12 class="text-xs-left" mt-5>
        <h2>Hackathon 2023</h2>
      </v-flex>
      <v-flex id="sobre" xs12 class="text-xs-left" mt-3>
        <p>
          Temos a alegria de anunciar a Hackapuc 2023, que será 
          realizada de 17 a 19 de outubro. A Hackapuc é um grande 
          evento que envolve o desenvolvimento de uma solução 
          inovadora para um determinado problema ou desafio. 
          Os interessados devem formar grupos para participarem.
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
