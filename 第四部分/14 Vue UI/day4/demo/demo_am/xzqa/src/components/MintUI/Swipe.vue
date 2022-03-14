<template>
  <div>
    <div class="swipe">
    <mt-swipe
      :showIndicators="true"
      :auto="3000"
      :speed="300"
      :continuous="true">
      <mt-swipe-item>
          <img src="../../assets/images/ad/886x315-1592552506.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
          <img src="../../assets/images/ad/886x315-1592556291.jpg">
      </mt-swipe-item>
    </mt-swipe>
    </div>
  </div>
</template>
<style scoped>
.swipe{
  height:120px;
}
</style>