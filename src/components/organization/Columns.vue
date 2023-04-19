<template>
  <div class="columns-component">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Columns extends Vue {
  constructor() {
    super();
  }
}
</script>

<style>
.columns-component {
  display: flex;
  flex-wrap: wrap;
  margin: -7.5px;
}
.columns-component > * {
  flex: 1;
  margin: 7.5px;
  min-width: 220px;
}
.columns-component > * p {
  text-align: inherit;
}
</style>