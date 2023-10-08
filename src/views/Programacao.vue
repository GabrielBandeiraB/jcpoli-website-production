<template>
  <div class="programacao">
    <Main>
      <div v-for="(event, i) in events" :key="i">
        <div class="title">
          <Paragraph :title="event.title" style="text-align: center;"></Paragraph>
          <h5 v-if="event.description">
            <i> {{ event.description }} </i>
          </h5>
        </div>
        <div class="list">
          <div class="item" v-for="(o, i) in event.activities" :key="i">
            <div style="margin: 20px auto;">
              <i :style="{gridArea: 'id'}" class="far fa-calendar-alt" title="Data" style="margin-right: 30px;"></i>
              <i :style="{gridArea: 'ip'}" class="far fa-clock" title="Hora" style="margin-left: 30px;"></i>
              <p :style="{gridArea: 'd'}" style="margin-right: 30px;">{{ o.date }}</p>
              <p :style="{gridArea: 'p'}" style="margin-left: 30px;"> {{ o.time }} </p>
              <br>
              <br>
            </div>
            <div>
              <h4> {{ o.description }} </h4>
              <h6> {{ o.speaker }} </h6>
            </div>
          </div>
        </div>
      </div>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PhotoHeader from "@/components/organization/PhotoHeader.vue";
import Main from "@/components/organization/Main.vue";
import Paragraph from "@/components/organization/Paragraph.vue";
import HorizontalList from "@/components/organization/HorizontalList.vue";
import Speakers from "@/components/organization/Speakers.vue";
import Columns from "@/components/organization/Columns.vue";
import Organization from "@/components/organization/Names.vue";
import Supporters from "@/components/organization/Supporters.vue";
import speakers from "@/models/speakers";

@Component({
  components: {
    PhotoHeader,
    Main,
    HorizontalList,
    Paragraph,
    Speakers,
    Columns,
    Organization,
    Supporters
  }
})
export default class Programacao extends Vue {
    
    private hackaton: any;

    private events: any;

    constructor(){
      super();
      
      this.hackaton = require('@/storage/programacao/hackaton').default;

      this.events = [
        
        {
          title: 'Lista de Checkpoints',
          description: '',
          activities: this.hackaton,
        },
      ];
    }
}
</script>

<style scoped>
.programacao .title {
  padding: 20px;
  background-color: whitesmoke;
  box-shadow: 0 .46875rem 2.1875rem rgba(0,0,0,.03),0 .9375rem 1.40625rem rgba(0,0,0,.03),0 .25rem .53125rem rgba(0,0,0,.05),0 .125rem .1875rem rgba(0,0,0,.03);;
}
.programacao .list {
  display: initial;
}
.programacao .list .item {
  display: flex;
  margin-top: 22px;
}
@media screen and (max-width: 630px) {
  .programacao .list .item {
    flex-direction: column-reverse;
  }
  .programacao .list .item h3 {
    font-size: 14pt !important;
  }
  .programacao .list .item h4 {
    font-size: 12pt !important;
  }
  .programacao .list .item h6 {
    font-size: 10pt !important;
  }
}
.programacao .list .item > div:first-child {
  flex: 5;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: repeat(4, auto);
  grid-template-areas: "id ip" "d p" "it it" "t t";
  text-align: center;
  padding: 10px;
  background-color: whitesmoke;
  box-shadow: 0 .46875rem 2.1875rem rgba(0,0,0,.03),0 .9375rem 1.40625rem rgba(0,0,0,.03),0 .25rem .53125rem rgba(0,0,0,.05),0 .125rem .1875rem rgba(0,0,0,.03);;
}
@media screen and (max-width: 630px) {
  .programacao .list .item > div:first-child {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    grid-template-areas: "id ip it" "d p t";
    background-color: unset;
    box-shadow: unset;
  }
}
.programacao .list .item > div:first-child i {
  font-size: 18pt;
  font-weight: bold;
}
.programacao .list .item > div:first-child p {
  margin-top: 10px;
  font-size: 10pt;
  text-align: inherit;
}
@media screen and (max-width: 320px) {
  .programacao .list .item > div:first-child p {
    padding: 0 8px;
  }
}
.programacao .list .item > div:nth-child(2) {
  flex: 18;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
}
@media screen and (max-width: 630px) {
  .programacao .list .item > div:nth-child(2) {
    margin-left: unset;
    margin-bottom: 15px;
    text-align: center;
  }
}

h6 {
  color: black;
}


</style>