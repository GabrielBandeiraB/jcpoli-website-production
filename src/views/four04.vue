<template>

    <div id="four04" class="view">
        <span>
            404
        </span>
        <div>
            Página não encontrada, volte para a primeira página clicando&nbsp;
            <router-link to="/">aqui.</router-link>
        </div>
    </div>

</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {
  }
})

export default class four04 extends Vue {
    constructor(){
        super();
    }
}

</script>

<style scoped>
#four04 {
  color: #8395a7;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
}
#four04 span {
  color: inherit;
  font-size: 72pt;
  font-family: Roboto;
}
#four04 > * {
  height: auto;
}
#four04 > div:nth-child(2) {
  color: inherit;
}
</style>