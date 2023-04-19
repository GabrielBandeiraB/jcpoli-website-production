<template>
  <div class="hlist">
    <h3 v-bind:style="{backgroundColor: color ? color : '#2776f5'}">{{title}}</h3>
    <div v-bind:style="{borderBottom: color ? `2px solid ${color}` : '2px solid #2776f5'}">
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class HorizontalList extends Vue {
  @Prop(String) private title: string;
  @Prop(String) private color: string;

  constructor() {
    super();
  }
}
</script>

<style scoped>
.hlist > h3 {
  padding: 15px 0;
  background-color: #2776f5;
  color: white;
  text-align: center;
  text-transform: uppercase;
}
.hlist > div {
  padding: 42px 0;
  border-bottom: 2px solid #2776f5;
}
.hlist > div > div {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: -7.5px;
}
.hlist > div > div > * {
  margin: 7.5px;
}
</style>

