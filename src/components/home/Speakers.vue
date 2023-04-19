<template>
  <v-container class="speaker-card">
    <v-layout row wrap>
      <v-flex xs12 md3 offset-md-1>
        <span class="img-speaker">
          <img :src="img" height="240" width="240" />
        </span>
      </v-flex>
      <v-flex xs12 md8>
        <div class="name-speaker">
          <span class="name">
            <h4>{{ name }}</h4>
          </span>
        </div>
        <div class="institution">{{ institution }}</div>
        <div class="speaking">{{ speaking }}</div>
        <div class="description">
          <p>{{ description }}</p>
        </div>
        <div class="more">
          <v-btn color="primary">Leia completo</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class Speakers extends Vue {
  @Prop(String) private name: string
  @Prop(String) private institution: string
  @Prop(String) private speaking: string
  @Prop(String) private description: string
  @Prop(String) private img: string

  constructor() {
    super()
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

.img-speaker {
  border: 1px solid #ececec;
}

.name-speaker {
  text-align: left;
  margin-top: 10px;
}

.speaker-card {
  margin: 60px auto;
}

@media screen and (max-width: 576px) {
  .speaker-card {
    margin: 20px auto !important;
  }
  .description p {
    padding-right: 20px !important;
  }
}

.name {
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  color: #0068a2;
}

.institution,
.speaking,
.description {
  font-family: 'Poppins', sans-serif;
  font-weight: normal;
  font-style: normal;
  font-size: 16px;
  color: #626262;
  text-align: left;
}

.description {
  margin-top: 20px;
}

.institution {
  margin-top: 20px;
}

.speaking {
  font-weight: bold;
}

.container {
  max-width: 1170px;
}

h4 {
  font-family: 'Montserrat', sans-serif;
}
</style>
