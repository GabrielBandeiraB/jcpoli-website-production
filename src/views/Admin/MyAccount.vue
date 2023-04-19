<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon v-if="isAdminOrProofreader" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Conta</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat @click="signOut">Sair</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list class="pa-1">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" />
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list class="pt-0" dense>
        <v-divider></v-divider>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>Reviões</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Submissões</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <Submissions />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mixins } from "vue-class-component";
import LoaderMixin from "@/mixins/loader";
import Submissions from "@/components/admin/Submissions.vue";
import { logOut } from "@/services/authentication";

@Component({
  components: {
    Submissions
  }
})
export default class MyAccount extends mixins(LoaderMixin) {
  private drawer: any = null;

  private signOut() {
    logOut();
    this.$router.push("/");
  }

  get isAdminOrProofreader() {
    return this.$store.state.user.type !== "user";
  }
}
</script>

