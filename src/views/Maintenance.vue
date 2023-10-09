<template>
  <div class="container">
    <div class="what-is-up">
      <!--<img class="mb-5" src="/assets/img/lampada.png" />-->
      <div class="spinny-cogs">
        <i class="fa fa-cog" aria-hidden="true"></i>
        <i class="fa fa-5x fa-cog fa-spin" aria-hidden="true"></i>
        <i class="fa fa-3x fa-cog" aria-hidden="true"></i>
      </div>
      <h1 class="maintenance">Em Manutenção</h1>
      <h2>Nossos desenvolvedores estão trabalhando para atualizar o site.</h2>
    </div>
  </div>
</template>
<script>
export default {
  mounted: function() {
    console.log(this.$route.path);
  }
};
</script>
<style lang="scss" scoped >
* {
  margin: 0;
  padding: 0;
}

html,
body {
  height: 100%;
  // background: url(http://subtlepatterns2015.subtlepatterns.netdna-cdn.com/patterns/dark_fish_skin.png);
  color: white;
  font-family: "Inconsolata", monospace;
  font-size: 100%;
}
.maintenance {
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-size: 3rem;
}
.container {
  display: table;
  margin: 0 auto;
  max-width: 1024px;
  width: 100%;
  height: 100%;
  align-content: center;
  position: relative;
  box-sizing: border-box;
  .what-is-up {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    vertical-align: middle;
    text-align: center;
    box-sizing: border-box;
    .spinny-cogs {
      display: block;
      margin-bottom: 2rem;
      .fa {
        &:nth-of-type(1) {
          @extend .fa-spin-one;
        }
        &:nth-of-type(3) {
          @extend .fa-spin-two;
        }
      }
    }
  }
}

@-webkit-keyframes fa-spin-one {
  0% {
    -webkit-transform: translateY(-2rem) rotate(0deg);
    transform: translateY(-2rem) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-2rem) rotate(-359deg);
    transform: translateY(-2rem) rotate-(359deg);
  }
}
@keyframes fa-spin-one {
  0% {
    -webkit-transform: translateY(-2rem) rotate(0deg);
    transform: translateY(-2rem) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-2rem) rotate(-359deg);
    transform: translateY(-2rem) rotate-(359deg);
  }
}
.fa-spin-one {
  -webkit-animation: fa-spin-one 1s infinite linear;
  animation: fa-spin-one 1s infinite linear;
}

@-webkit-keyframes fa-spin-two {
  0% {
    -webkit-transform: translateY(-0.5rem) translateY(1rem) rotate(0deg);
    transform: translateY(-0.5rem) translateY(1rem) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-0.5rem) translateY(1rem) rotate(-359deg);
    transform: translateY(-0.5rem) translateY(1rem) rotate(-359deg);
  }
}
@keyframes fa-spin-two {
  0% {
    -webkit-transform: translateY(-0.5rem) translateY(1rem) rotate(0deg);
    transform: translateY(-0.5rem) translateY(1rem) rotate(0deg);
  }
  100% {
    -webkit-transform: translateY(-0.5rem) translateY(1rem) rotate(-359deg);
    transform: translateY(-0.5rem) translateY(1rem) rotate(-359deg);
  }
}

.fa-spin-two {
  -webkit-animation: fa-spin-two 2s infinite linear;
  animation: fa-spin-two 2s infinite linear;
}
</style>