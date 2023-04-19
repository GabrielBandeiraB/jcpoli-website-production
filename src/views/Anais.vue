<template>
  <div class="obs-page view">
    <Main>
      <h3>Anais da IV Jornada Científica da ECEC</h3>
      <table>
        <tbody>
          <tr>
            <th>Título</th>
            <th>Autor</th>
          </tr>
          <tr v-for="(props, index) in all_anais" :key="index">
            <td class="title">
              <a :href="props.path" target="_blank" class="text-justify">
                {{ props.title }}
              </a>
            </td>
            <td class="autor">
              {{ props.autor }}
            </td>
          </tr>
        </tbody>
      </table>
    </Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import Main from '../components/organization/Main.vue'
import { Anais } from '@/storage/programacao/anais'

@Component({
  components: {
    Main
  }
})
export default class anais extends Vue {
  private all_anais: any

  private title = 'Anais'

  constructor() {
    super()

    this.all_anais = Anais
  }
}
</script>

<style scoped>
tr,
a,
td {
  font-size: 1.3rem;
  text-transform: uppercase;
}

th,
td {
  padding: 0.5rem;
  text-align: left;
}

table {
  margin-top: 2rem;
  width: 60vw;
}

@media screen and (max-width: 425px) {
  a,
  tr {
    font-size: 0.8rem;
  }

  table {
    width: 90vw;
  }

  .autor {
    font-size: 0.9rem;
  }
}
</style>
