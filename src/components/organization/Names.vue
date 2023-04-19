<template>
  <div class="organization-container">
    <div>
      <h2 class="mt-3">COMITÊ CIENTÍFICO</h2>
      <hr />
      <div class="comite-container">
        <div
          class="text-center"
          v-for="(organizador, index) in cientific"
          :key="index"
        >
          <a
            href="javascript:void(0);"
            :class="{ 'no-dialog': !organizador.participantes }"
            @click="showInfo(organizador)"
            >{{ organizador.coordenador }}</a
          >
          <p class="text-center font-italic">{{ organizador.area }}</p>
        </div>
      </div>
      <Comissao
        :organizacao="comite"
        :showDialog="showComissao"
        @hidden="hideComissao"
      />
    </div>

    <div>
      <h2 class="mt-3">COMITÊ DE ORGANIZAÇÃO</h2>
      <hr />
      <div class="comite-container">
        <div
          class="text-center"
          v-for="(organizador, index) in organizacao"
          :key="index"
        >
          <a
            href="javascript:void(0);"
            :class="{ 'no-dialog': !organizador.participantes }"
            @click="showInfo(organizador)"
            >{{ organizador.coordenador }}</a
          >
          <p class="text-center font-italic">{{ organizador.area }}</p>
        </div>
      </div>

      <Comissao
        :organizacao="comite"
        :showDialog="showComissao"
        @hidden="hideComissao"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import PhotoHeader from '@/components/organization/PhotoHeader.vue'
import Main from '@/components/organization/Main.vue'
import Comissao from '@/components/dialogs/Comissao.vue'
import {
  ComiteListOrganization,
  ComiteListCientific
} from '@/storage/programacao/comites'

@Component({
  components: {
    PhotoHeader,
    Main,
    Comissao
  }
})
export default class Organization extends Vue {
  private showComissao = false
  private comite = {}
  private organizacao = ComiteListOrganization
  private cientific = ComiteListCientific
  private showInfo(organizador: any) {
    if (organizador.participantes) {
      this.comite = organizador
      this.showComissao = true
    }
  }

  private hideComissao() {
    this.showComissao = false
  }
}
</script>

<style lang="scss" scoped>
a,
h2 {
  text-transform: uppercase;
  font-weight: 540;
  color: #fff;
}

p {
  color: #ececec;
}

hr {
  border: 2px solid #fff;
  border-radius: 2px;
  margin-bottom: 20px;
}

.no-dialog:hover {
  text-decoration: none;
  cursor: inherit;
}

.organization-container {
  display: flex;
  align-items: start;
  justify-content: space-evenly;
  background: #373b44; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #4286f4,
    #3077f0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #4286f4,
    /*#373b44*/ #3077f0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

.comite-container {
  column-count: 2;
}

@media (max-width: 800px) {
  .organization-container {
    font-size: 0.9rem;
    flex-direction: column;
  }
  .organization-container h2 {
    font-size: 1.5rem;
  }

  .comite-container {
    margin-bottom: 3rem;
  }
}
</style>
