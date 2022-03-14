<template>
  <div>
      <mt-header title="首页" class="a1"></mt-header>
      <mt-button type="primary" class="a2">按钮</mt-button>
      <mt-navbar>
          <mt-tab-item>生活</mt-tab-item>
          <mt-tab-item>娱乐</mt-tab-item>
          <mt-tab-item>汽车</mt-tab-item>
      </mt-navbar>
  </div>
</template>
<style scoped>
.a1,.a2{
  background-color:#f00;
}
.mint-tab-item.is-selected{  
  color:#f00 !important;
}
.mint-tab-item-label{
  font-size:30px!important;
}
</style>
