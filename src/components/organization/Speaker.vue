<template>
  <div class="speaker">
    <div class="avatar">
      <div
        v-bind:style="{backgroundImage: avatar, backgroundPosition: speaker.offset, backgroundSize: customSize}"
      ></div>
    </div>
    <span class="name">
      <h4>{{speaker.name}}</h4>
    </span>
    <div class="institution">{{speaker.institution}}</div>
    <div class="speaking">
      <i>{{speaker.speaking}}</i>
      <br>
      <i>{{speaker.speaking2}}</i>
    </div>
    <div class="more">
      <v-btn color="primary" @click="showProfile(speaker.name)">Leia completo</v-btn>
    </div>

    <div class="n1"></div>
    <div class="n2"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Speaker extends Vue {
  @Prop(Object) private speaker: any;

  private avatar: string;
  private customSize: any;

  constructor() {
    super();

    this.avatar = this.speaker.img
      ? `url(${this.speaker.img})`
      : `url(https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg)`;

    this.customSize = this.speaker.customSize
      ? this.speaker.customSize
      : "100%";
  }

  private showProfile(name: string) {
    this.$router.push({ path: "/profile", query: { name } });
  }
}
</script>

<style scoped>
.speaker {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: repeat(5, auto);
  grid-template-areas: "avatar n1" "avatar name" "avatar institution" "avatar speaking" "avatar more" "avatar n2";
}
.speaker > * {
  margin: 0;
  padding: 0;
}
.speaker > * button {
  margin: 0;
}
.speaker .avatar {
  grid-area: avatar;
}
.speaker .avatar > div {
  width: 240px;
  height: 240px;
  margin-right: 25px;
  border-radius: 50%;
  background-image: url(https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg);
  background-size: cover;
  background-color: black;
}
.speaker .name {
  font-weight: 350;
  grid-area: name;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.speaker .name h1,
.speaker .name h2,
.speaker .name h3,
.speaker .name h4,
.speaker .name h5,
.speaker .name h6 {
  font-weight: inherit;
  text-transform: uppercase;
}
.speaker .institution {
  grid-area: institution;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.speaker .speaking {
  grid-area: speaking;
  font-weight: bold;
}
.speaker .description {
  grid-area: description;
  margin: 15px 0;
}
.speaker .more {
  grid-area: more;
}
.speaker .n1,
.speaker .n2 {
  display: initial;
}
@media screen and (max-width: 768px) {
  .speaker {
    grid-template-columns: auto;
    grid-template-rows: repeat(6, auto);
    grid-template-areas: "avatar" "name" "institution" "speaking" "description" "more" "n1" "n2";
    text-align: center;
  }
  .speaker .avatar > div {
    display: inline-block;
    margin: 0;
    margin-bottom: 22px;
  }
}
@media screen and (max-width: 425px) {
  .speaker .avatar > div {
    width: 180px;
    height: 180px;
  }
}
@media screen and (max-width: 375px) {
  .speaker .avatar > div {
    width: 160px;
    height: 160px;
  }
}
@media screen and (max-width: 320px) {
  .speaker {
    grid-template-columns: 100%;
  }
  .speaker .avatar > div {
    width: 140px;
    height: 140px;
  }
}
</style>