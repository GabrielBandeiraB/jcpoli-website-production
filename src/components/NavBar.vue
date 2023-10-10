<template>
  <div class="navbar-h mx-auto">
    <input type="checkbox" id="open-mmenu" :style="{ display: 'none' }" />
    <div class="mobile menu-mobile">
      <div>
        <dir>
          <label for="open-mmenu">
            <i class="fa fa-times"></i>
          </label>
        </dir>
      </div>
      <ul>
        <!--<router-link to="/" tag="li">Home</router-link>
        <router-link to="/escola" tag="li">Escola</router-link> -->
        <router-link to="/" tag="li">Home</router-link>  
        <router-link to="/hackaton" tag="li">Hackathon</router-link>
        <router-link to="/manutencao" tag="li">Desafios</router-link>
        <router-link to="/manutencao" tag="li">TCC</router-link>
      </ul>
    </div>

    <div class="nav-info">
      <div id="logo-nav-bar">
        <a href="/">
          <img id="logo" src="assets/img/logopuc.png" 
            style="                   
                  position: absolute; 
                  float: right; 
                  top: -20px;"
          >          
        </a>

        <span class="title">Escola de Ciencias Exatas e de Artes</span>
        <br />
        <span>
          
        </span>
      </div>
<!--
      <div class="nav-date">
        <span class="desktop" :style="{ textAlign: 'right' }">
          <br />Escola de Ciencias Exatas e de Artes <br />PUC GO
        </span>

        <span id="span-data-mobile" class="mobile sm-device">          
          Escola de Ciencias Exatas e de Artes
        </span>
      </div>
-->
      <div id="barra-mobile" class="mobile">
        <label for="open-mmenu">
          <i class="fas fa-bars"></i>
        </label>
      </div>
    </div>
    <div class="nav-container desktop">
      <ul>
        <!--<router-link to="/" tag="li">Home</router-link>
        <router-link to="/escola" tag="li">Escola</router-link> -->
        <router-link to="/" tag="li">Home</router-link>  
        <router-link to="/hackaton" tag="li">Hackathon</router-link>
        <router-link to="/manutencao" tag="li">Desafios CD</router-link>
        <router-link to="/manutencao" tag="li">TCC</router-link>        
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Programacao from '@/views/Programacao.vue'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { NavigationGuard } from 'vue-router'

@Component
export default class NavBar extends Vue {
  private closeMenuOnRouteChange: NavigationGuard = (to, from, next) => {
    const checkbox = document.getElementById('open-mmenu') as HTMLInputElement
    if (checkbox.checked) {
      checkbox.checked = false
    }
    next()
  }

  created() {
    this.$router.beforeEach(this.closeMenuOnRouteChange)
  }
}
</script>

<style scoped>
#logo {
  left: -6rem;
  height: 5rem;
  top: -0.5rem;
  width: 180px; 
  height: 110px;
}

#logo-nav-bar {
  text-align: left;
  right: 300px;
  padding-left: 40px;
  margin-left: 40px;  
  margin-top: 15px;
  
}

.navbar-h {
  position: relative;
  padding: 20px 0;
  background-color: white;
  max-width: 1000px;  
}

.navbar-h .nav-info {
  color: #576574;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.navbar-h .nav-info img {
  position: absolute;
  height: 113px;
  left: -80px;
}
.navbar-h .nav-info .title {
  text-align: left;
  position: relative;
  left: 250px;
  font-size: 30px;
}
.navbar-h .nav-info > div {
  position: relative;
}
.navbar-h .nav-info > div:nth-child(2) {
  text-align: left;
}
.navbar-h .nav-info > div:last-child {
  text-align: right;
}
.navbar-h .nav-info span,
.navbar-h .nav-info p,
.navbar-h .nav-info h1,
.navbar-h .nav-info h2,
.navbar-h .nav-info h3 {
  color: inherit;
}
.navbar-h .nav-date {
  font-style: italic;
  font-size: smaller;
  display: flex;
  align-items: flex-end;
}
.navbar-h .nav-container {
  display: flex;
  justify-content: center;
}
.navbar-h .nav-container > ul {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  border-top: 2px solid #576574;
}
.navbar-h .nav-container > ul li {
  position: relative;
  padding: 15px 45px;
  font-family: 'Montserrat', sans-serif;
  color: #576574;
  transition: all 50ms ease;
  height: 51px;
}
.navbar-h .nav-container > ul li:hover {
  border-bottom: 2px solid #576574;
  cursor: pointer;
}
.navbar-h .nav-container > ul li a {
  color: inherit;
}
.navbar-h .nav-container > ul li a:link {
  color: inherit;
  text-decoration: none;
}
.navbar-h .nav-container > ul li a:active {
  text-decoration: none;
}
.navbar-h .nav-container > ul li a:visited {
  text-decoration: none;
}
.navbar-h .nav-container > ul li a:hover {
  border: none;
  text-decoration: none;
}

@media screen and (max-width: 1350px) {
  #logo-nav-bar{
    right: 220px;
  }
}

@media screen and (max-width: 1190px) {
  #logo-nav-bar{
    right: 150px;

  }
}

@media screen and (max-width: 816px) {
 

  

}



@media screen and (max-width: 768px) {
  .navbar-h {
    position: unset;
    padding: 10px 0;
    margin: 0 15px;
  }
  .navbar-h .nav-info {
    margin: 0;
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-template-rows: repeat(2, auto);
    grid-template-areas: 'lg t1 mn' 'lg t2 mn';
  }
  .navbar-h .nav-info label {
    margin: 0;
  }
  .navbar-h .nav-info img {
    grid-area: lg;
    position: unset;
    left: unset;
    height: 90px;
    margin-right: 22px;
  }
  .navbar-h .nav-info > div {
    grid-area: t1;
  }
  .navbar-h .nav-info > div:last-child {
    grid-area: mn;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22pt;
  }
  .navbar-h .nav-info > div:last-child i {
    margin: 15px;
  }
  .navbar-h .nav-info .nav-date {
    grid-area: t2;
  }

  #barra-mobile {
    left: 150px;
  }
}

@media screen and (max-width: 570px) {
  #barra-mobile {
    left: 100px;
  }
}

@media screen and (max-width: 455px) {
  #barra-mobile {
    left: 50px;
  }
}

@media screen and (max-width: 425px) {
  .navbar-h .nav-info > div:last-child i {
    margin: 5px;
  }
}
@media screen and (max-width: 375px) {
  .navbar-h .nav-info span {
    font-size: 12px;
    text-align: left;
  }

  #barra-mobile {
    left: 20px;
  }

}
@media screen and (max-width: 320px) {
  .navbar-h {
    margin: 0 5px;
  }
  .navbar-h .nav-info img {
    margin-right: 10px;
  }
}

#open-mmenu:checked + div {
  right: 0;
}

.menu-mobile {
  position: fixed;
  z-index: 1000;
  background-color: white;
  padding: 15px;
  top: 0;
  right: -100%;
  bottom: 0;
  box-shadow: -2px -2px 16px;
  transition: right 800ms ease-in-out;
}
.menu-mobile ul {
  padding: 0;
  margin: 0;
}
.menu-mobile ul li {
  padding: 15px;
}
.menu-mobile > div {
  display: flex;
  justify-content: flex-end;
}
.menu-mobile > div i {
  margin: 15px;
}
.menu-mobile a {
  color: inherit;
}
.menu-mobile a:link {
  color: inherit;
  text-decoration: none;
}
.menu-mobile a:active {
  text-decoration: none;
}
.menu-mobile a:visited {
  text-decoration: none;
}
.menu-mobile a:hover {
  border: none;
  text-decoration: none;
}

@media screen and (max-width: 1140px) {
  #logo-nav-bar{
    right: 150px;
    
  }
}



@media screen and (max-width: 980px) {
  .navbar-h {
    left: 80px;
  }
}

@media screen and (min-width: 769px) {
  .mobile {
    display: none !important;
  }
}
@media screen and (max-width: 768px) {
  .desktop {
    display: none !important;
  }  

  #logo-nav-bar {
    margin-bottom: 80px;
  }
}

@media screen and (max-width: 625px) {

  #logo-nav-bar{
    right: 0;
  }
}

@media screen and (max-width: 425px) {
  .lg-device {
    display: none !important;
  }
}
@media screen and (max-width: 375px) {
  .md-device {
    display: none !important;
  }
}
@media screen and (max-width: 320px) {
  .sm-device {
    display: none !important;
  }

  #barra-mobile {
    left: 90px;
  }

  

}
</style>
