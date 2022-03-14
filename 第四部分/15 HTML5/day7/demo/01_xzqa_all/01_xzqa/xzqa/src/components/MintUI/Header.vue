<template>
  <div>
      <mt-header title="学前端,到学问" fixed>

        <router-link slot="left" to="/">
            <mt-button icon="back"></mt-button>
        </router-link>
        <mt-button slot="right" icon="more"></mt-button>

      </mt-header>
      <div class="container">
        <p v-for="(v,k) in 50" :key="k">
          第{{v}}个段落
        </p>
      </div>
  </div>
</template>
<style scoped>
.container{
  margin-top:40px;
}
</style>