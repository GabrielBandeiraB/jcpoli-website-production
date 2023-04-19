<template>
  <div>
    <h3 v-if="title">{{title}}</h3>
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Paragraph extends Vue {
  @Prop(String) private title: string;

  constructor() {
    super();
  }
}
</script>

<style scoped>
</style>