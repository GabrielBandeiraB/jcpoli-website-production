<template>
  <v-layout>
    <v-dialog v-model="dialog" persistent max-width="450">
      <v-card>
        <v-card-title class="headline">{{organizacao.nome}}</v-card-title>
        <v-card-text>
          <p
            v-for="(participante, index) in organizacao.participantes"
            :key="index"
            class="font-italic"
          >{{participante}}</p>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="darken-1" flat="flat" @click="hide">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Comissao extends Vue {
  @Prop({ type: Boolean, default: false }) private showDialog: boolean;
  @Prop(Object) private organizacao!: any;
  private dialog: boolean = false;

  @Watch("showDialog")
  private showDialogChanged(newValue: boolean, oldValue: boolean) {
    this.dialog = newValue;
  }

  private hide() {
    this.$emit("hidden");
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
}
</style>