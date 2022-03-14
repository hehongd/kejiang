<template>
  <div>
    {{flyMode}}
    <mt-switch v-model="flyMode">飞行模式</mt-switch>
  </div>
</template>
<script>
export default {
  data(){
    return {
      flyMode:true
    }
  }
}
</script>