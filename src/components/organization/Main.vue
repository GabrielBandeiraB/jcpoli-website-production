<template>
  <main>
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Main extends Vue {
  constructor() {
    super();
  }
}
</script>

<style>

main {
  text-align: left;
  padding: 100px 14.6484375vw;
}
main h1, main h2, main h3, main h4, main h5, main h6 {
  text-transform: uppercase;
  font-weight: 540;
  color: #2776f5;
}
main p {
  text-align: justify;
}
main > div:not(:last-child) {
  margin-bottom: 45px;
}
@media screen and (max-width: 425px) {
  main {
    padding: 35px 35px 100px;
  }
}
@media screen and (min-width: 1440px) {
  main {
    padding: 100px calc(50vw - 500px);
  }
}



</style>

