<template>
  <header
    v-bind:style="{backgroundImage: image ? `url(${image})` : `url(/assets/img/slider/3.jpg)`, 
    height: size ? size : '320px', backgroundPositionY: offset ? offset : null}"
  >
    <div>
      <div>
        <h2>{{title}}</h2>

        <p v-if="description">{{description}}</p>
      </div>
      <div>
        <slot></slot>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class PhotoHeader extends Vue {
  @Prop(String) private title: string;
  @Prop(String) private description: string;
  @Prop(String) private image: string;
  @Prop(String) private size: string;
  @Prop(String) private offset: string;

  constructor() {
    super();
  }
}
</script>

<style scoped>

header {
  height: 320px;
  display: flex;
  align-items: flex-end;
  background-image: url(/assets/img/slider/3.jpg);
  background-size: cover;
}
header > div {
  text-align: left;
  width: 100%;
  padding: 35px 14.6484375vw;
  display: flex;
  justify-content: space-between;
  color: white;
  background-image: linear-gradient(0deg, black, rgba(255, 255, 255, 0));
}
header > div > div p {
  font-size: 13pt;
}
header > div > div:first-child {
  max-width: calc(50% - 7.5px);
}
header > div > div:last-child {
  text-align: right;
  max-width: calc(50% - 7.5px);
  display: flex;
  align-items: flex-end;
}
@media screen and (max-width: 425px) {
  header > div {
    flex-direction: column;
    padding: 15px 35px;
  }
  header > div > div {
    max-width: unset !important;
  }
  header > div > div:last-child {
    text-align: initial;
  }
}
@media screen and (min-width: 1440px) {
  header {
    height: calc(0.1607*100vw + 88.5714px) !important;
  }
  header > div {
    padding: 35px calc(50vw - 500px);
  }
}


</style>

