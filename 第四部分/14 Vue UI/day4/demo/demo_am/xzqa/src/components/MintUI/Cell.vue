<template>
  <div>
    <mt-cell 
      title="飞行模式" 
      label="在此种模式下禁止通话">
          <img src="../../assets/images/fly.png" alt="" slot="icon">
          <mt-switch v-model="flyMode"></mt-switch>
    </mt-cell>

    <mt-cell title="无限局域网" isLink>
      <img src="../../assets/images/network.png" alt="" slot="icon">
      未连接
    </mt-cell>

    <mt-cell title="蓝牙" isLink to="/">
        <img src="../../assets/images/blue.png" alt="" slot="icon">
    </mt-cell>

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