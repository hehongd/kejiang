<template>
  <div>
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="a"> 
        11 
      </mt-tab-container-item>
      <mt-tab-container-item id="b"> 
        22 
      </mt-tab-container-item>
      <mt-tab-container-item id="c"> 
        33 
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar v-model="active" fixed>
      <mt-tab-item id="a">面板A</mt-tab-item>
      <mt-tab-item id="b">面板B</mt-tab-item>
      <mt-tab-item id="c">面板C</mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data(){
    return {
      active:'a'
    }
  }
}
</script>